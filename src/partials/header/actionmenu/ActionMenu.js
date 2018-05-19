import React, {Component} from 'react';
import styles from './ActionMenu.scss';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl} from 'react-intl';
import TwitterIcon from './Twitter';
import LinkedInIcon from './LinkedIn';
import GithubIcon from './Github';
import InstagramIcon from './Instagram';
import Button from 'material-ui/Button';
import ReactGA from 'react-ga';

class ActionMenu extends Component {
  constructor(props) {
    super(props);
  }
  
  getLink(target) {
    if (this.props.metadata) {
      return this.props.metadata.social[target] || "#";
    }
  }
  
  onClick(target) {
    let value = null;
    switch (target) {
      case 'open_github':
        value = 'Github';
        break;
      case 'open_twitter':
        value = 'Twitter';
        break;
      case 'open_linkedin':
        value = 'LinkedIn';
        break;
      case 'open_instagram':
        value = 'Instagram';
        break;
    }
    ReactGA.event({
      category: 'Social',
      action: 'Clicked on ' + value
    });
    document.getElementById(target).click();
  }
  
  render() {
    return (
        <nav id={styles.actionMenu} className={(this.props.shrink ? styles.shrink : styles.expand)}>
          <a href={this.getLink('github')} target="_blank" id="open_github"/>
          <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => this.onClick('open_github')}>
            <GithubIcon />
          </Button>
          <a href={this.getLink('twitter')} target="_blank" id="open_twitter"/>
          <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => this.onClick('open_twitter')}>
            <TwitterIcon />
          </Button>
          <a href={this.getLink('linkedin')} target="_blank" id="open_linkedin"/>
          <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => this.onClick('open_linkedin')}>
            <LinkedInIcon />
          </Button>
          <a href={this.getLink('instagram')} target="_blank" id="open_instagram"/>
          <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => this.onClick('open_instagram')}>
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
