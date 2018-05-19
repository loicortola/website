import React, { Component } from 'react';
import { Footer, Header } from '../../partials/components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import style from './Index.scss';
import ReactGA from 'react-ga';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  sendMail() {
    ReactGA.event({
      category: 'Contact',
      action: 'Clicked on Contact FAB'
    });
    if (this.props.metadata) {
      window.location.href =
        'mailto:' + this.props.metadata.email + '?subject=First%20Contact';
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className={style.mainContainer}>
          <Paper id={style.main} elevation={4}>
            {this.props.children}
          </Paper>
        </div>
        <div className={style.bottomMenuContainer}>
          <div className={style.contactButtonContainer}>
            <Button
              variant="fab"
              color="secondary"
              aria-label="add"
              onClick={() => {
                this.sendMail();
              }}
            >
              <EmailIcon />
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// TypeChecking for properties
Index.propTypes = {
  metadata: PropTypes.object,
  children: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    location: state.router.location,
    metadata: state.cv.metadata
  };
};

export default connect(mapStateToProps)(Index);
