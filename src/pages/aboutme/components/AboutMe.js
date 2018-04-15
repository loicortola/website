import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {FormattedMessage, defineMessages, injectIntl} from 'react-intl';
import styles from './AboutMe.scss';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ReactMarkdown className="markdown-container" source={this.props.text}/>
    );
  }
}

// TypeChecking for properties
AboutMe.propTypes = {
  text: PropTypes.string
};

export default injectIntl(AboutMe);
