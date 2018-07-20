import React from 'react';
import './style.css';
import $ from 'jquery';
class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        haha
        <div id="star">&star;</div>
      </div>
    );
  }
}

export default Content;
