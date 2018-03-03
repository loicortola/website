import React, {Component} from 'react';
import {NavLink} from 'react-router';
import AboutMe from '../components/AboutMe';
import {connect} from 'react-redux';
import {loadAboutMe} from '../../../actions/cv';


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
  aboutme: state.cv.aboutme
});

export default connect(mapStateToProps, {loadAboutMe})(AboutMePage)
