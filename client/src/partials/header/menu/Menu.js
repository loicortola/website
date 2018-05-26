/* eslint-disable no-console */
import React, { Component } from 'react';
import styles from './Menu.scss';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExtensionIcon from '@material-ui/icons/Extension';
import WorkIcon from '@material-ui/icons/Work';
import PhotoIcon from '@material-ui/icons/Photo';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }
  
  handleClose = () => {
    this.setState({ open: false });
  }
  
  render() {
    return (
      <nav id={styles.menu}>
        <IconButton onClick={this.handleToggle}>
          <i className="material-icons">menu</i>
        </IconButton>
        <Drawer open={this.state.open} onClose={this.handleClose}>
          <span
            tabIndex={0}
            role="button"
            onClick={this.handleToggle}
            onKeyDown={this.handleToggle}
          >
            <div style={{ width: 250 }}>
              <List>
                <ListItem
                  button
                  onClick={() => this.props.goToPage('/aboutme')}
                >
                  <ListItemIcon>
                    <AccountCircleIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<FormattedMessage id="lbl.home"/>}
                    className="text"
                  />
                </ListItem>
              </List>
              <Divider/>
              <List>
                <ListItem button onClick={() => this.props.goToPage('/work')}>
                  <ListItemIcon>
                    <WorkIcon/>
                  </ListItemIcon>
                  <ListItemText primary={<FormattedMessage id="lbl.work"/>}/>
                </ListItem>
                <ListItem
                  button
                  onClick={() => this.props.goToPage('/projects')}
                >
                  <ListItemIcon>
                    <ExtensionIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<FormattedMessage id="lbl.projects"/>}
                  />
                </ListItem>
              </List>
              <Divider/>
              <List>
                <ListItem button onClick={() => this.props.goToPage('/photo')}>
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
  goToPage: PropTypes.func.isRequired
};

export const goToPage = page => dispatch => {
  return dispatch(push(page));
};

export default injectIntl(connect(null, { goToPage })(Menu));
