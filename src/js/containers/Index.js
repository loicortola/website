import React, {Component} from 'react';
import {HeaderPartial} from '../partials/header/containers/index';
import {connect} from 'react-redux';
import '../../stylesheets/main.scss';


class Index extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      <HeaderPartial/>
      <div id='main'>
        {this.props.children}
      </div>
      <footer id='footer'>Copyright © 2018 From Resourcepool with Love.</footer>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.profile,
  };
};

export default connect(mapStateToProps)(Index)
