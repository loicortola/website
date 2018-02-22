import React, {Component} from 'react';
import {NavLink} from 'react-router';
import AboutMe from '../components/AboutMe';
import {connect} from 'react-redux';
import {loadAboutMe} from '../actions';
import './AboutMePage.scss';


class AboutMePage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadAboutMe();
  }

  render() {
    return this.props.aboutme ? (
        <AboutMe text={this.props.aboutme.text}/>
    ) : (
      <div>OOOPS</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  aboutme: state.aboutme,
  location: state.router.location
});

export default connect(mapStateToProps, {loadAboutMe})(AboutMePage)
