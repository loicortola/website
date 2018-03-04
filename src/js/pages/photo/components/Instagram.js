import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage, defineMessages, injectIntl} from 'react-intl';

class Instagram extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>Contact me with email: {this.props.metadata.email}</div>
    );
  }
}

// TypeChecking for properties
Instagram.propTypes = {
  metadata: PropTypes.object
};

export default injectIntl(Instagram);
