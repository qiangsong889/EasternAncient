import React from 'react';
import './style.css';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  handleContentClick(event) {
    var target = $(event.target.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  }
  direct(event) {
    //i dont need this run history push, href will do the same thing
    // console.log(event.target);
    // this.props.history.push(event.target.getAttribute('href'));
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand pd" href="">
          Z-Spa
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pd">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#content"
                onClick={e => this.handleContentClick(e)}
              >
                Content
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Find Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
