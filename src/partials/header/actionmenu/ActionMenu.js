import React, {Component} from 'react';
import styles from './ActionMenu.scss';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl} from 'react-intl';
import TwitterIcon from './Twitter';
import LinkedInIcon from './LinkedIn';
import GithubIcon from './Github';
import InstagramIcon from './Instagram';
import Button from 'material-ui/Button';

class ActionMenu extends Component {
  constructor(props) {
    super(props);
  }
  
  openGithub() {
    if (this.props.metadata) {
      return this.props.metadata.social.github;
    }
  }

  openTwitter() {
    if (this.props.metadata) {
      return this.props.metadata.social.twitter;
    }
  }

  openLinkedIn() {
    if (this.props.metadata) {
      return this.props.metadata.social.linkedin;
    }
  }

  openInstagram() {
    if (this.props.metadata) {
      return this.props.metadata.social.instagram;
    }
  }
  
  render() {
    return (
        <nav id={styles.actionMenu} className={(this.props.shrink ? styles.shrink : styles.expand)}>
          <Button variant="fab" mini color="secondary" aria-label="add" href={this.openGithub()}>
            <GithubIcon />
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add" href={this.openTwitter()}>
            <TwitterIcon />
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add" href={this.openLinkedIn()}>
            <LinkedInIcon />
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add" href={this.openInstagram()}>
            <InstagramIcon />
          </Button>
        </nav>
    );
  }
}

// TypeChecking for properties
ActionMenu.propTypes = {
  shrink: PropTypes.bool.isRequired,
  metadata: PropTypes.object
};

export default injectIntl(ActionMenu);
