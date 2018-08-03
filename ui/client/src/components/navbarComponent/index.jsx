import React from 'react';
import './style.css';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  handleContentClick(event) {
    // event.preventDefault();
    if (this.props.location.pathname !== '/') {
      console.log('you can direct now');
      this.props.history.push('/');
    }
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
  direct(event) {}
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
        <a
          className="navbar-brand pd"
          href="/"
          style={{
            display: 'inline-block',
            fontSize: '250%',
            color: 'black'
          }}
        >
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
            <li className="nav-item">
              <a
                href="#prices"
                className="nav-link active"
                onClick={e => this.handleContentClick(e)}
              >
                Prices
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#content"
                onClick={e => this.handleContentClick(e)}
              >
                Benefits
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link active">
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
