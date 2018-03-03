import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import {loadWork} from '../../../actions/cv';
import Work from '../components/Work';

class WorkPage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadWork();
  }

  render() {
    if (this.props.work && Object.keys(this.props.work).length > 0) {
      let result = [];
      for (let k in Object.keys(this.props.work)) {
        result.push(<Work experience={this.props.work[k]} key={k}/>);
      }
      return result;
    }
    return (<div className="work-container">Work</div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  work: state.cv.work
});

export default connect(mapStateToProps, {loadWork})(WorkPage)
