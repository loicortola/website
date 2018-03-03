import React, {Component} from 'react';
import './ActionMenu.scss';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import ExtensionIcon from 'material-ui-icons/Extension';
import WorkIcon from 'material-ui-icons/Work';
import PollIcon from 'material-ui-icons/Poll';
import DraftsIcon from 'material-ui-icons/Drafts';
import SchoolIcon from 'material-ui-icons/School';
import StarIcon from 'material-ui-icons/Star';
import Button from 'material-ui/Button';

class ActionMenu extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <nav id="action-menu">
          <Button variant="fab" mini color="secondary" aria-label="add">
            <StarIcon/>
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <StarIcon/>
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <StarIcon/>
          </Button>
          <Button variant="fab" mini color="secondary" aria-label="add">
            <StarIcon/>
          </Button>
        </nav>
    );
  }
}

// TypeChecking for properties
ActionMenu.propTypes = {
  text: PropTypes.string
};

export default injectIntl(ActionMenu);
