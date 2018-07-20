import React, { Component } from 'react';
import video from './1.mp4';
import './style.css';

class Video extends Component {
  handleClick() {
    console.log('a button been clicked');
  }
  render() {
    return (
      <div>
        <div className="v-header videoContainer">
          <div className="fullscreen-video-wrap">
            <video src={video} autoPlay loop muted />
          </div>
          <div className="header-overlay" />
          <div className="header-content">
            <h1>Z-Spa</h1>
            <p>Professional, dedicated to providng the world best massage</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
