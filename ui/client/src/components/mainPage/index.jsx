import React from 'react';
import axios from 'axios';
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
        hellor from main page
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }
}

export default Main;
