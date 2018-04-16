import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import styles from './Instagram.scss';
import LikeIcon from 'material-ui-icons/Favorite';
class Instagram extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    return (
        <div className={styles.photoContainer} onClick={() => document.getElementById('instaLink' + this.props.key).click()}>
            <a href={this.props.data.url} target="_blank" id={'instaLink' + this.props.key}/>
            <div className={styles.imageContainer}>
              <span className={styles.helper}></span>
              <img src={this.props.data.urlImage}/>
            </div>
            <div className={styles.overlay}>
              <div className={styles.likeContainer}>
                <span className={styles.helper}></span>
                <LikeIcon className={styles.likeIcon}/>
                <div className={styles.likeValue}>{this.props.data.numberLikes}</div>
              </div>
              <div className={styles.description}>{this.props.data.description}</div>  
            </div>
        </div>
    );
  }
}

// TypeChecking for properties
Instagram.propTypes = {
  data: PropTypes.object
};

export default injectIntl(Instagram);
