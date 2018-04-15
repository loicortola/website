import React, {Component} from 'react';
import styles from './Header.scss';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import Avatar from 'material-ui/Avatar';
import Menu from './menu/Menu';
import ActionMenu from './actionmenu/ActionMenu';
import RaisedButtonMenu from './raisedbuttonsmenu/RaisedButtonsMenu';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

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
  
  renderName() {
    if (this.props.metadata) {
      return this.props.metadata.firstName + ' ' + this.props.metadata.lastName;
    }
    return 'Loading';
  }
  
  renderCatchline() {
    if (this.props.metadata) {
      return this.props.metadata.catchline;
    }
    return 'Loading';
  }

  render() {
    return (
        <header id={styles.header} className={(this.state.shrinkNav ? styles.shrink : styles.expand)}>
          <div className={classNames(styles.headerContainer, (this.state.shrinkNav ? styles.shrink : styles.expand))}>
            <div id={styles.headerMetaContainer}>
              <div id={styles.metadata}>
                <Avatar
                    src="images/profile-default.jpg"
                    className={styles.avatar}/>
                <Typography component="div" variant="headline" className={styles.name}>{this.renderName()}</Typography>
                <div className={styles.catchline}>{this.renderCatchline()}</div>
              </div>
            </div>
            <RaisedButtonMenu metadata={this.props.metadata} shrink={this.state.shrinkNav}/>
            <ActionMenu metadata={this.props.metadata} shrink={this.state.shrinkNav}/>
            <Menu/>
          </div>
        </header>
    );
  }
}

// TypeChecking for properties
Header.propTypes = {
  text: PropTypes.string,
  metadata: PropTypes.object
};

export default injectIntl(Header);
