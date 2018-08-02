import React, { Component } from 'react';
import video from './1.mp4';
import './style.css';
import ReactModal from 'react-modal';
import img from './4.jpg';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    var style = {
      content: {
        border: '0',
        borderRadius: '7px',
        bottom: 'auto',
        height: '400px', // set height
        left: '50%',
        // padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '40%', // start from center
        transform: 'translate(-50%,-' + '100px' + ')', // adjust top "up" based on height
        width: '40%',
        maxWidth: '40rem',
        zIndex: '2',
        backgroundImage: 'url(' + img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    };

    return (
      <div>
        <div className="v-header videoContainer">
          <div className="fullscreen-video-wrap">
            <video
              name="wmode"
              value="opaque"
              src={video}
              autoPlay
              loop
              muted
            />
          </div>
          <div className="header-overlay" />
          <div className="header-content">
            <h1>Z-Spa</h1>
            <p>Professional, Dedicated to Providing The World Best Massage</p>
            <div className="wrap">
              <button className="btn" onClick={this.handleOpenModal}>
                Make Appointment
              </button>
              <ReactModal
                ariaHideApp={false}
                id="modal-custom"
                isOpen={this.state.showModal}
                style={style}
              >
                <div id="modal">
                  To Make Appointment Please Call<br /> (425)-823-6038
                </div>
                <button
                  id="close-modal"
                  className="btn"
                  onClick={this.handleCloseModal}
                >
                  GOT IT!
                </button>
              </ReactModal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
