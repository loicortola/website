import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import {loadProjects} from '../../../actions/cv';
import Project from '../components/Project';

class ProjectsPage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    if (this.props.projects && Object.keys(this.props.projects).length > 0) {
      let result = [];
      for (let k in Object.keys(this.props.projects)) {
        result.push(<Project data={this.props.projects[k]} key={k}/>);
      }
      return result;
    }
    return (<div className="projects-container">Projects</div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  projects: state.cv.projects
});

export default connect(mapStateToProps, {loadProjects})(ProjectsPage)
