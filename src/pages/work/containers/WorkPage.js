import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWork } from '../../../actions/cv';
import Work from '../components/Work';
import PropTypes from 'prop-types';

class WorkPage extends Component {
  componentDidMount() {
    this.props.loadWork();
  }

  render() {
    if (this.props.work && Object.keys(this.props.work).length > 0) {
      let result = [];
      for (let k in Object.keys(this.props.work)) {
        result.push(<Work experience={this.props.work[k]} key={k} />);
      }
      return result;
    }
    return <div className="work-container">Loading</div>;
  }
}


// TypeChecking for properties
WorkPage.propTypes = {
  loadWork: PropTypes.func.isRequired,
  work: PropTypes.array
};


const mapStateToProps = (state) => ({
  work: state.cv.work
});

export default connect(mapStateToProps, { loadWork })(WorkPage);
