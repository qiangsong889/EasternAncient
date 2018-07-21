import React from 'react';
import './style.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from '../testComponent';
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
