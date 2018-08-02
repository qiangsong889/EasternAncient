import React from 'react';
import './style.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import image1 from './01.svg';
import image2 from './02.svg';
import image3 from './03.svg';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  getdata() {}
  render() {
    return (
      <div id="content">
        <h1>Benefits of Massage</h1>
        <div className="benefits-container pd">
          <div className="benefits">
            <img
              src={image1}
              alt=""
              style={{ width: '100px', height: '100px' }}
            />
            <h5>Reduce Stress</h5>
            <p>
              regular massage sessions over a prolonged period of time can boost
              energy levels, reduce pain, and stimulate individuals on physical
              as well as emotional levels.
            </p>
          </div>
          <div className="benefits">
            <img
              src={image2}
              alt=""
              style={{ width: '100px', height: '100px' }}
            />
            <h5>Helps Improve Circulation</h5>
            <p>
              Improves circulation is part of a snowball effect that occurs in
              the body as a result of receiving regular massage therapy on a
              consistent basis.
            </p>
          </div>
          <div className="benefits">
            <img
              src={image3}
              alt=""
              style={{ width: '100px', height: '100px' }}
            />
            <h5>Reduce Pain From Exercise</h5>
            <p>
              massage therapy can reduce inflammation of skeletal muscle damaged
              through exercise.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
