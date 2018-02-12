import React, {Component, PropTypes} from 'react';
import {FormattedMessage, defineMessages, injectIntl} from 'react-intl';

const messages = defineMessages({
  lblWelcome: {
    id: 'lbl.welcome',
    defaultMessage: 'Welcome'
  },
  lblIntroduction: {
    id: 'lbl.introduction',
    defaultMessage: 'Introduction'
  }
});

class Introduction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='center'>
          <h1>
            <FormattedMessage {...messages.lblWelcome}/>
          </h1>
          <div id='introduction'>
            <FormattedMessage {...messages.lblIntroduction}/>
          </div>
          <div>{this.props.data}</div>
        </div>
      );
  }
}

// TypeChecking for properties
Introduction.propTypes = {
  data: React.PropTypes.object
};

export default injectIntl(Introduction);
