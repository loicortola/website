import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import styles from './AboutMe.scss';

class AboutMe extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ReactMarkdown
          className="markdown-container"
          source={this.props.text}
          escapeHtml={false}
        />
      </div>
    );
  }
}

// TypeChecking for properties
AboutMe.propTypes = {
  text: PropTypes.string
};

export default AboutMe;
