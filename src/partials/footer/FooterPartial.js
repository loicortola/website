import React, { Component } from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FooterPartial extends Component {
  render() {
    return <Footer />;
  }
}

const mapStateToProps = (state) => ({
  metadata: state.cv.metadata
});


// TypeChecking for properties
FooterPartial.propTypes = {
  metadata: PropTypes.object
};

export default connect(mapStateToProps)(FooterPartial);
