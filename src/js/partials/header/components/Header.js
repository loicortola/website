import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {FormattedMessage, defineMessages, injectIntl} from 'react-intl';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import './Header.scss';


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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
        <header id='header'>
          
          <nav id="menu">
            <IconButton onClick={this.handleToggle} children={<i className="material-icons">menu</i>} />
            <Drawer open={this.state.open} onClose={this.handleClose}>
              <span
                  tabIndex={0}
                  role="button"
                  onClick={this.handleToggle}
                  onKeyDown={this.handleToggle}>
                <div>PLACE MENU CONTENT HERE</div>
              </span>
            </Drawer>
          </nav>
          <div id='header-meta-container'>
            <div id='metadata'>
              <Avatar
                  src="images/profile-default.png"
                  className="avatar"/>
              <div className="name">{this.props.metadata.firstName} {this.props.metadata.lastName}</div>
              <div className="catchline">{this.props.metadata.catchline}</div>
            </div>
          </div>
        </header>
      );
  }
}

// TypeChecking for properties
Header.propTypes = {
  text: PropTypes.string
};

export default injectIntl(Header);
