import React, {Component} from 'react';
import styles from './Footer.scss';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import {defineMessages, injectIntl} from 'react-intl';


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

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
        <div id={styles.footerContainer}>
          <footer id={styles.footer}>
            <Typography component="span" variant="body1" className={styles.text}>Copyright © 2018 From Resourcepool with Love.</Typography>
          </footer>
        </div>
    );
  }
}

// TypeChecking for properties
Footer.propTypes = {
};

export default injectIntl(Footer);
