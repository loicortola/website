import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../../stylesheets/main.scss';
import {loadProfile} from '../pages/introduction/actions';


class Index extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // NO-OP
    console.log('Ok');
  }

  loadProfile() {
    console.log('Not Loaded. Will load profile');
    this.props.loadProfile();
  }

  render() {
    return (
      <div>
      <header id='header'>
        Header
      </header>
      <div id='main'>
        Wait
      </div>
      <footer id='footer'>Copyright © 2018 From Resourcepool with Love.</footer>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.profile,
  };
};

export default connect(mapStateToProps, {loadProfile})(Index)
