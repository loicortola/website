import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../stylesheets/main.scss';
import {loadProfile} from '../pages/introduction/actions';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {ready: false};
  }

  componentWillMount() {
    // NO-OP
  }

  loadProfile() {
    console.log('Not Loaded. Will load profile');
    this.props.loadProfile();
  }

  render() {
    <div>
      <header id='header'>
        Header
      </header>
      <div id='main'>
        <nav><Menu active='dashboard'/></nav>
        <main>{this.props.children}</main>
      </div>
      <footer id='footer'>Copyright © 2018 From Resourcepool with Love.</footer>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.profile,
  };
};

export default connect(mapStateToProps, {loadProfile})(Index)
