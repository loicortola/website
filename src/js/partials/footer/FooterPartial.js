import React, {Component} from 'react';
import {NavLink} from 'react-router';
import Footer from './Footer';
import {connect} from 'react-redux';
import {loadMetadata} from '../../actions/cv';

class FooterPartial extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id='footer-container'>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.metadata
});

export default connect(mapStateToProps, {loadMetadata})(FooterPartial)
