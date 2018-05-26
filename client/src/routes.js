import React, { Component } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import work from './pages/work';
import contact from './pages/contact';
import aboutme from './pages/aboutme';
import projects from './pages/projects';
import photo from './pages/photo';
import video from './pages/video';
import { connect } from 'react-redux';
import withTracker from './partials/tracking/withTracker';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route
          path="/aboutme"
          component={withTracker(aboutme.components.AboutMePage)}
        />
        <Route
          path="/contact"
          component={withTracker(contact.components.ContactPage)}
        />
        <Route path="/work" component={withTracker(work.components.WorkPage)} />
        <Route
          path="/projects"
          component={withTracker(projects.components.ProjectsPage)}
        />
        <Route
          path="/photo"
          component={withTracker(photo.components.PhotoPage)}
        />
        <Route
          path="/video/:videoId"
          component={withTracker(video.components.VideoPage)}
        />
        <Redirect exact from="/" to="/aboutme" />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.router.location
  };
};

export default connect(mapStateToProps)(Routes);
