import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

defineMessages({
  msgContactMe: {
    id: 'msg.contactme',
    defaultMessage: 'Contact me with email'
  }
});

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormattedMessage id="msg.contactme" />: {this.props.metadata.email}
      </div>
    );
  }
}

// TypeChecking for properties
Contact.propTypes = {
  metadata: PropTypes.object
};

export default injectIntl(Contact);
