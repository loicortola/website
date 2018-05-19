import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProjects } from '../../../actions/cv';
import Project from '../components/Project';
import PropTypes from 'prop-types';

class ProjectsPage extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    if (this.props.projects && Object.keys(this.props.projects).length > 0) {
      let result = [];
      for (let k in Object.keys(this.props.projects)) {
        result.push(<Project data={this.props.projects[k]} key={k} />);
      }
      return result;
    }
    return <div className="projects-container">Projects</div>;
  }
}

// TypeChecking for properties
ProjectsPage.propTypes = {
  loadProjects: PropTypes.func.isRequired,
  projects: PropTypes.object
};

const mapStateToProps = (state) => ({
  projects: state.cv.projects
});

export default connect(mapStateToProps, { loadProjects })(ProjectsPage);
