import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
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

class AboutMe extends Component {
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
          <ReactMarkdown source={this.props.text}/>
        </div>
      );
  }
}

// TypeChecking for properties
AboutMe.propTypes = {
  text: PropTypes.string
};

export default injectIntl(AboutMe);
