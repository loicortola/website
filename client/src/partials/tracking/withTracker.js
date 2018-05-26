/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };

  class WithTracker extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname;
      const nextPage = this.props.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
  
  // TypeChecking for properties
  WithTracker.propTypes = {
    location: PropTypes.object.isRequired
  };
  
  return WithTracker;
}
