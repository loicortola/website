import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AboutMe from '../components/AboutMe';
import Media from '../components/Media';
import Person from '../../../partials/structureddata/Person';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { loadAboutMe } from '../../../actions/cv';

class AboutMePage extends Component {
  componentDidMount() {
    this.props.loadAboutMe();
  }

  render() {
    if (!this.props.aboutme) {
      return <div>Loading</div>;
    }
    if (!this.props.metadata) {
      return <AboutMe text={this.props.aboutme.text} />;
    }
    return (
      <div>
        <AboutMe text={this.props.aboutme.text} />
        <Divider />
        <Media media={this.props.metadata.media} />
        <Person metadata={this.props.metadata} />
      </div>
    );
  }
}



// TypeChecking for properties
AboutMePage.propTypes = {
  loadAboutMe: PropTypes.func.isRequired,
  aboutme: PropTypes.object,
  metadata: PropTypes.object
};

const mapStateToProps = (state) => ({
  aboutme: state.cv.aboutme,
  metadata: state.cv.metadata
});

export default connect(mapStateToProps, { loadAboutMe })(AboutMePage);
