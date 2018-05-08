import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import Photo from '../components/Instagram';
import {loadInstagram} from '../../../actions/cv';
import styles from './PhotoPage.scss';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadInstagram();
  }

  getPhotos() {
    let result = [];
    for (let k in Object.keys(this.props.instagram.posts)) {
      result.push(<Photo data={this.props.instagram.posts[k]} id={k} key={k}/>);
    }
    return result;
  }
  
  render() {
    if (this.props.instagram) {
      
      return (
          <div className={styles.container}>
            {this.getPhotos()}
          </div>
      );
    }
    return (<div>Loading</div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  instagram: state.cv.instagram
});

export default connect(mapStateToProps, {loadInstagram})(PhotoPage)
