import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router';
import AboutMe from '../components/AboutMe';
import {connect} from 'react-redux';
import {loadAboutMe} from '../actions';
import './AboutMePage.scss';
import {Redirect, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

<Router basename="/aboutme"/>

class AboutMePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadAboutMe();
  }

  render() {

    return this.props.aboutme ? (
      <div id='aboutme-container'>
        <AboutMe text={this.props.aboutme.text}/>
      </div>
    ) : (
      <div id='aboutme-container'>
      Loading // FIXME
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  aboutme: state.aboutme
});

export default connect(mapStateToProps, {loadAboutMe})(AboutMePage)
