import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from '../components/Contact';

class ContactPage extends Component {
  render() {
    return <Contact metadata={this.props.metadata} />;
  }
}


// TypeChecking for properties
ContactPage.propTypes = {
  metadata: PropTypes.object
};

const mapStateToProps = (state) => ({
  metadata: state.cv.metadata
});

export default connect(mapStateToProps)(ContactPage);
