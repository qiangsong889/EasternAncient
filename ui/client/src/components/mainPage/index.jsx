import React from 'react';
import axios from 'axios';
import './style.css';
import Video from '../videoComponent/index';
import Nav from '../navbarComponent';
import Content from '../contentComponent';

class Main extends React.Component {
  constructor() {
    super();
  }
  async handleClick() {
    try {
      const { data } = await axios.post(
        'http://localhost:1992/api/test/test1',
        {
          name: 'shayne'
        }
      );
      console.log(data);
    } catch (err) {
      console.log('err handling click');
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <Video />
        <Content />
      </div>
    );
  }
}

export default Main;
