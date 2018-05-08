import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import styles from './Instagram.scss';
import LikeIcon from 'material-ui-icons/Favorite';
class Instagram extends Component {
  constructor(props) {
    super(props);
  }
  
  renderDescription() {
    if (!this.props.data.description) {
      return '';
    }
    // Take 8 first words
    let descr = this.props.data.description.substr(0, 48);
    return descr.substr(0, descr.lastIndexOf(" ")) + '...';
  }

  render() {
    return (
        <div className={styles.photoContainer} onClick={() => document.getElementById('instaLink' + this.props.id).click()}>
            <a href={this.props.data.url} target="_blank" id={'instaLink' + this.props.id}/>
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
              <div className={styles.description}>{this.renderDescription()}</div>  
            </div>
        </div>
    );
  }
}

// TypeChecking for properties
Instagram.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default injectIntl(Instagram);
