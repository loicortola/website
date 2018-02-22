import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import Contact from '../components/Contact';

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Contact metadata={this.props.metadata}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.metadata
});

export default connect(mapStateToProps)(ContactPage)
