import React, {Component} from 'react';
import {Footer, Header} from '../../partials/components';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import EmailIcon from 'material-ui-icons/Email';
import style from './Index.scss';

class Index extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Header/>
          <div className={style.mainContainer}>
            <Paper id={style.main} elevation={4}>
              {this.props.children}
            </Paper>
          </div>
          <div className={style.bottomMenuContainer}>
            <div className={style.contactButtonContainer}>
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
