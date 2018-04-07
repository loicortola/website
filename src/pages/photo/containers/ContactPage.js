import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import Photo from '../components/Instagram';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Photo metadata={this.props.metadata}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.cv.metadata
});

export default connect(mapStateToProps)(PhotoPage)
