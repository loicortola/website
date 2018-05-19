import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import styles from './Media.scss';
import {push} from "react-router-redux";
import {connect} from "react-redux";
import Typography from 'material-ui/Typography';
import PlayIcon from 'material-ui-icons/PlayArrow';
import ReactGA from 'react-ga';

class Media extends Component {
  constructor(props) {
    super(props);
  }

  getThumbnailLink(video) {
    if (video.thumbnail.indexOf('http') >= 0) {
      return video.thumbnail;
    }
    return '/images/' + video.thumbnail;
  }
  
  onVideoClick(id) {
    ReactGA.event({
      category: 'Media',
      action: 'Clicked on Video',
      value: id
    });
    this.props.goToPage('/video/' + id);
  }

  computeVideo(video) {
    return (
        <div key={video.id} onClick={() => this.onVideoClick(video.id)} className={styles.media}>
          <img src={this.getThumbnailLink(video)} className={styles.thumbnail}/>
          <Typography variant="body2" component="div">{video.title}</Typography>
          <div className={styles.descriptionContainer}>
            <PlayIcon className={styles.icon}/>
            <div className={styles.description}>{video.description}</div>
          </div>
        </div>
    )
  }

  render() {
    if (!this.props.media || this.props.media.length === 0) {
      return (<div></div>)
    }
    let results = [];
    for (let i = this.props.media.length - 1; i >= Math.max(this.props.media.length - 4, 0); i--) {
      let media = this.props.media[i];
      if (media.type === "VIDEO") {
        results.push(this.computeVideo(media));
      }
    }
    return (
        <div className={styles.container}>
          <Typography variant="headline" component="p">Tech talks & Conferences</Typography>
          <br/>
          <div className={styles.flex}>
            {results}
          </div>
        </div>
    );

  }
}

// TypeChecking for properties
Media.propTypes = {
  media: PropTypes.array
};


export const goToPage = (page) => (dispatch) => {
  return dispatch(push(page));
};

export default injectIntl(connect(() => ({}), {goToPage})(Media));
