import React, {Component} from 'react';
import styles from './Header.scss';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import Avatar from 'material-ui/Avatar';
import Menu from './menu/Menu';
import ActionMenu from './actionmenu/ActionMenu';
import RaisedButtonMenu from './raisedbuttonsmenu/RaisedButtonsMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    window.onscroll = () => {
      this.changeNav()
    };
    this.state = {
      height: parseInt(styles.headerLargeHeight) - parseInt(styles.headerShrinkHeight),
      shrinkNav: false
    };
  }

  changeNav() {
    let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > this.state.height && !this.state.shrinkNav) {
      this.setState({
        shrinkNav: true
      });
    } else if (offset < this.state.height && this.state.shrinkNav) {
      this.setState({
        shrinkNav: false
      });
    }
  }

  render() {
    return (
        <header id='header' className={(this.state.shrinkNav ? 'shrink' : 'expand')}>
          <div className={'header-container ' + (this.state.shrinkNav ? 'shrink' : 'expand')}>
            <div id='header-meta-container'>
              <div id='metadata'>
                <Avatar
                    src="images/profile-default.png"
                    className="avatar"/>
                <div className="name">{this.props.metadata.firstName} {this.props.metadata.lastName}</div>
                <div className="catchline">{this.props.metadata.catchline}</div>
              </div>
            </div>
            <RaisedButtonMenu shrink={this.state.shrinkNav}/>
            <ActionMenu shrink={this.state.shrinkNav}/>
            <Menu/>
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
