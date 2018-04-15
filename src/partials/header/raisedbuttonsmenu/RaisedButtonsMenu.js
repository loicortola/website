import React, {Component} from 'react';
import styles from './RaisedButtonsMenu.scss';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import Button from 'material-ui/Button';
import LocationIcon from 'material-ui-icons/LocationOn';
import EmailIcon from 'material-ui-icons/Email';
import AttachmentIcon from 'material-ui-icons/Attachment';

class RaisedButtonsMenu extends Component {
  constructor(props) {
    super(props);
  }

  renderLocation() {
    if (this.props.metadata) {
      return this.props.metadata.location.name;
    }
    return 'Loading';
  }

  sendMail() {
    if (this.props.metadata) {
      location.href = "mailto:" + this.props.metadata.email + '?subject=First%20Contact';
    }
  }

  render() {
    return (
        <nav id={styles.raisedButtonMenu} className={(this.props.shrink ? styles.shrink : styles.expand)}>
          <Button variant="raised" color="secondary">
            {this.renderLocation()}
            <LocationIcon className={styles.icon}/>
          </Button>
          <Button variant="raised" color="secondary" onClick={() => {this.sendMail()}}>
            Message me
            <EmailIcon className={styles.icon}/>
          </Button>
          <Button variant="raised" color="secondary" className={styles.resume}>
            Printable Version
            <AttachmentIcon className={styles.icon}/>
          </Button>
        </nav>
    );
  }
}

// TypeChecking for properties
RaisedButtonsMenu.propTypes = {
  shrink: PropTypes.bool.isRequired,
  metadata: PropTypes.object
};

export default injectIntl(RaisedButtonsMenu);
