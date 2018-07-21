import React from 'react';
import './style.css';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    console.log('contact component run');
  }
  render() {
    return <div id="contact">hello from contact component</div>;
  }
}

export default Contact;
