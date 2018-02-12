import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router';
import Introduction from '../components/Introduction';
import {connect} from 'react-redux';
import {loadProfile} from '../actions';
import './introductionPage.scss';

class IntroductionPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  createQuest() {
    this.props.loadProfile().then(() => {
      console.log('Hello');
    });
  }

  render() {
    return (
      <div id='introduction-container'>
        <Introduction data={this.props.profile.introduction}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {loadProfile})(IntroductionPage)
