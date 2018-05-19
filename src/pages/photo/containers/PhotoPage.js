import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from '../components/Instagram';
import { loadInstagram } from '../../../actions/cv';
import PropTypes from 'prop-types';
import styles from './PhotoPage.scss';
class PhotoPage extends Component {
  componentDidMount() {
    this.props.loadInstagram();
  }

  getPhotos() {
    let result = [];
    for (let k in Object.keys(this.props.instagram.posts)) {
      result.push(
        <Photo data={this.props.instagram.posts[k]} id={k} key={k} />
      );
    }
    return result;
  }

  render() {
    if (this.props.instagram) {
      return <div className={styles.container}>{this.getPhotos()}</div>;
    }
    return <div>Loading</div>;
  }
}


// TypeChecking for properties
PhotoPage.propTypes = {
  loadInstagram: PropTypes.func.isRequired,
  instagram: PropTypes.object
};

const mapStateToProps = (state) => ({
  instagram: state.cv.instagram
});

export default connect(mapStateToProps, { loadInstagram })(PhotoPage);
