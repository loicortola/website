import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import styles from './Instagram.scss';
import LikeIcon from 'material-ui-icons/Favorite';
import ReactGA from 'react-ga';

class Instagram extends Component {
  constructor(props) {
    super(props);
  }
  
  renderDescription() {
    if (!this.props.data.description) {
      return '';
    }
    if (this.props.data.description.length <= 48) {
      return this.props.data.description;
    }
    // Take 8 first words
    let descr = this.props.data.description.substr(0, 48);
    return descr.substr(0, descr.lastIndexOf(" ")) + '...';
  }
  
  onClick(id) {
    ReactGA.event({
      category: 'Instagram',
      action: 'Clicked on Picture ' + id
    });
    document.getElementById('instaLink' + id).click()
  }

  render() {
    return (
        <div className={styles.photoContainer} onClick={() => this.onClick(this.props.id)}>
            <a href={this.props.data.url} target="_blank" id={'instaLink' + this.props.id}/>
            <div className={styles.imageContainer}>
              <span className={styles.helper}></span>
              <img src={this.props.data.urlImage}/>
            </div>
            <div className={styles.overlay}>
              <div className={styles.likeContainer}>
                <span className={styles.helper}></span>
                <LikeIcon className={styles.likeIcon}/>
                <div className={styles.likeValue}>{this.props.data.numberLike}</div>
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
