import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { loadMetadata } from '../../actions/cv';
import PropTypes from 'prop-types';

class HeaderPartial extends Component {
  componentDidMount() {
    this.props.loadMetadata();
  }

  render() {
    return <Header metadata={this.props.metadata} />;
  }
}


// TypeChecking for properties
HeaderPartial.propTypes = {
  loadMetadata: PropTypes.func.isRequired,
  metadata: PropTypes.object
};

const mapStateToProps = (state) => ({
  metadata: state.cv.metadata
});

export default connect(mapStateToProps, { loadMetadata })(HeaderPartial);
