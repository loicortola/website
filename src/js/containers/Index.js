import React, {Component} from 'react';
import {HeaderPartial, FooterPartial} from '../partials/header/containers/index';
import {connect} from 'react-redux';
import '../../stylesheets/main.scss';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';


class Index extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      <HeaderPartial/>
      <Paper id="main" className="main-container" elevation={4}>
        {this.props.children}
      </Paper>
      <FooterPartial/>
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
