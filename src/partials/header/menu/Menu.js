import React, {Component} from 'react';
import styles from './Menu.scss';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl} from 'react-intl';
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
import PhotoIcon from 'material-ui-icons/Photo';
import { push } from 'react-router-redux';
import {connect} from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleItemClick = (page) => {
    console.log(page);
    push(page);
  };
  
  render() {
    return (
        <nav id={styles.menu}>
          <IconButton onClick={this.handleToggle} children={<i className="material-icons">menu</i>}/>
          <Drawer open={this.state.open} onClose={this.handleClose}>
              <span
                  tabIndex={0}
                  role="button"
                  onClick={this.handleToggle}
                  onKeyDown={this.handleToggle}>
                 <div style={{width: 250}}>
                  <List>
                    <ListItem button onClick={() => this.props.goToPage('aboutme')}>
                      <ListItemIcon>
                        <AccountCircleIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<FormattedMessage id="lbl.home"/>} className="text"/>
                    </ListItem>
                  </List>
                   <Divider/>
                   <List>
                    <ListItem button onClick={() => this.props.goToPage('work')}>
                      <ListItemIcon>
                        <WorkIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<FormattedMessage id="lbl.work"/>}/>
                    </ListItem>
                    <ListItem button onClick={() => this.props.goToPage('projects')}>
                      <ListItemIcon>
                        <ExtensionIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<FormattedMessage id="lbl.projects"/>}/>
                    </ListItem>
                   </List>
                   <Divider/>
                   <List>
                    <ListItem button onClick={() => this.props.goToPage('photo')}>
                      <ListItemIcon>
                        <PhotoIcon/>
                      </ListItemIcon>
                      <ListItemText primary={<FormattedMessage id="lbl.photo"/>}/>
                    </ListItem>
                  </List>
                 </div>
              </span>
          </Drawer>
        </nav>
    );
  }
}

// TypeChecking for properties
Menu.propTypes = {
  text: PropTypes.string
};


export const goToPage = (page) => (dispatch) => {
  return dispatch(push(page));
};


export default injectIntl(connect(null, {goToPage})(Menu));
