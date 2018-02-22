import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import {loadWork} from '../actions';
import './WorkPage.scss';

class WorkPage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.loadAboutMe();
  }

  render() {
    (COUCOU)
  }
}

const mapStateToProps = (state, ownProps) => ({
  work: state.work
});

export default connect(mapStateToProps, {loadWork})(WorkPage)
