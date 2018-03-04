import React, {Component} from 'react';
import './RaisedButtonsMenu.scss';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl} from 'react-intl';
import Button from 'material-ui/Button';
import LocationIcon from 'material-ui-icons/LocationOn';
import EmailIcon from 'material-ui-icons/Email';
import AttachmentIcon from 'material-ui-icons/Attachment';

class RaisedButtonsMenu extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <nav id="raised-button-menu" className={(this.props.shrink ? 'shrink' : 'expand')}>
          <Button variant="raised" color="secondary">
            Paris, France
            <LocationIcon className="icon"/>
          </Button>
          <Button variant="raised" color="secondary">
            Message me
            <EmailIcon className="icon"/>
          </Button>
          <Button variant="raised" color="secondary"  className="resume">
            Printable Version
            <AttachmentIcon className="icon"/>
          </Button>
        </nav>
    );
  }
}

// TypeChecking for properties
RaisedButtonsMenu.propTypes = {
  shrink: PropTypes.bool.isRequired
};

export default injectIntl(RaisedButtonsMenu);
