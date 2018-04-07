import React, {Component} from 'react';
import {NavLink} from 'react-router';
import Header from './Header';
import {connect} from 'react-redux';
import {loadMetadata} from '../../actions/cv';

class HeaderPartial extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadMetadata();
  }

  render() {
    return this.props.metadata ? (
      <Header metadata={this.props.metadata}/>
    ) : (
      <div>
      Loading // FIXME
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.cv.metadata
});

export default connect(mapStateToProps, {loadMetadata})(HeaderPartial)
