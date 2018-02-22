import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage, defineMessages, injectIntl} from 'react-intl';

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>Work is: {this.props.experience.position} @ {this.props.experience.company}</div>
    );
  }
}

// TypeChecking for properties
Work.propTypes = {
  experience: PropTypes.object.isRequired
};

export default injectIntl(Work);
