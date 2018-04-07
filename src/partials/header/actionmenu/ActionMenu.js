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
  
  render() {
    return (
        <nav id={styles.actionMenu} className={(this.props.shrink ? styles.shrink : styles.expand)}>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <GithubIcon />
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <TwitterIcon />
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <LinkedInIcon />
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <InstagramIcon />
          </Button>
        </nav>
    );
  }
}

// TypeChecking for properties
ActionMenu.propTypes = {
  shrink: PropTypes.bool.isRequired
};

export default injectIntl(ActionMenu);
