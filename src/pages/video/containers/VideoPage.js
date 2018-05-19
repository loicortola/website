import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Youtube from '../components/YoutubePlayer';
import styles from './VideoPage.scss';
import PropTypes from 'prop-types';

class VideoPage extends Component {
  getVideo() {
    let video = null;
    this.props.metadata.media.every(m => {
      if (
        m.type === 'VIDEO' &&
        m.id === parseInt(this.props.match.params.videoId)
      ) {
        video = m;
        return false;
      }
      return true;
    });
    return video;
  }

  render() {
    if (!this.props.metadata) {
      return <div>Loading</div>;
    }
    let video = this.getVideo();
    if (!video) {
      return <div>{'This video doesn\'t exist'}</div>;
    }
    return (
      <div className={styles.container}>
        <Typography variant="headline" component="p" className={styles.title}>
          {video.title}
        </Typography>
        <br />
        <Typography
          variant="body1"
          component="p"
          className={styles.description}
        >
          {video.description}
        </Typography>
        <Youtube video={video} />
      </div>
    );
  }
}



// TypeChecking for properties
VideoPage.propTypes = {
  metadata: PropTypes.object,
  match: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  metadata: state.cv.metadata
});

export default connect(mapStateToProps)(VideoPage);
