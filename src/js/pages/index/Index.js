import React, {Component} from 'react';
import {Footer, Header} from '../../partials/components';
import {connect} from 'react-redux';
import '../../../stylesheets/main.scss';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import EmailIcon from 'material-ui-icons/Email';
import './Index.scss';

class Index extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Header/>
          <Paper id="main" className="main-container" elevation={4}>
            {this.props.children}
          </Paper>
          <div className="bottom-menu-container">
            <div className="contact-button-container">
              <Button variant="fab" color="secondary" aria-label="add">
                <EmailIcon/>
              </Button>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.router.location
  };
};

export default connect(mapStateToProps)(Index)
