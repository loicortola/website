import React, {Component} from 'react';
import {NavLink} from 'react-router';
import {connect} from 'react-redux';
import Typography from 'material-ui/Typography';
import Youtube from '../components/YoutubePlayer';
import styles from './VideoPage.scss';

class VideoPage extends Component {
  constructor(props) {
    super(props);
  }

  getVideo() {
    let video = null;
    console.log(this.props.match.params);
    this.props.metadata.media.every((m) => {
      if (m.type === "VIDEO" && m.id === parseInt(this.props.match.params.videoId)) {
        video = m;
        return false;
      }
      return true;
    });
    return video;
  }

  render() {
    if (!this.props.metadata) {
      return (<div>Loading</div>)
    }
    let video = this.getVideo();
    if (!video) {
      return (<div>This video doesn't exist</div>)
    }
    return (
        <div className={styles.container}>
          <Typography variant="headline" component="p" className={styles.title}>{video.title}</Typography>
          <br/>
          <Typography variant="body1" component="p" className={styles.description}>{video.description}</Typography>
          <Youtube video={video}/>
        </div>
        
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.cv.metadata
});

export default connect(mapStateToProps)(VideoPage)
