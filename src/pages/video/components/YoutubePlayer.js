import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import styles from './YoutubePlayer.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.getVideoId(),
      start: this.getVideoStart()
    };
  }

  getVideoStart() {
    let link = this.props.video.link;
    link = link.split(/(t=|s=|start=)/);
    return link.length === 3 ? link[2].split(/[^0-9]/i)[0] : undefined;
  }

  /**
   * From Gist from https://gist.github.com/takien/4077195
   * Tested URLs:
   *  http://youtube.googleapis.com/v/wN-UjP7GCmg?version=3
   *  https://www.youtube.com/watch?feature=g-vrec&v=wN-UjP7GCmg
   *  http://www.youtube.com/watch?feature=player_embedded&v=wN-UjP7GCmg#
   *  http://youtu.be/wN-UjP7GCmg
   *  http://www.youtube.com/watch?v=wN-UjP7GCmg
   *  http://i1.ytimg.com/vi/wN-UjP7GCmg/default.jpg
   *  https://www.youtube.com/watch?v=BGL22PTIOAM&feature=g-all-xit
   *  BGL22PTIOAM
   */
  getVideoId() {
    let link = this.props.video.link;
    link = link.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return link[2] !== undefined ? link[2].split(/[^0-9a-z_-]/i)[0] : link[0];
  }

  render() {
    return (
      <div className={styles.container}>
        <iframe
          title="Video Player"
          className={styles.video}
          src={
            'https://www.youtube.com/embed/' +
            this.state.id +
            '?' +
            (this.state.start ? '&start=' + this.state.start : '') +
            '&autoplay=1'
          }
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

// TypeChecking for properties
Contact.propTypes = {
  video: PropTypes.object.isRequired
};

export default injectIntl(Contact);
