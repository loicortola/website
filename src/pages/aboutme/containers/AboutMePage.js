import React, {Component} from 'react';
import {NavLink} from 'react-router';
import AboutMe from '../components/AboutMe';
import Media from '../components/Media';
import Divider from 'material-ui/Divider';
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
    if (!this.props.aboutme) {
      return <div>Loading</div>;
    }
    if (!this.props.metadata) {
      return <AboutMe text={this.props.aboutme.text}/>;
    }
    return (
        <div>
          <AboutMe text={this.props.aboutme.text}/>
          <Divider/>
          <Media media={this.props.metadata.media}/>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  aboutme: state.cv.aboutme,
  metadata: state.cv.metadata
});

export default connect(mapStateToProps, {loadAboutMe})(AboutMePage)
