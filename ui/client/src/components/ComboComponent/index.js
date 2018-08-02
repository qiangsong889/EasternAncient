//30mins foot 30$
//30mins body 40$

// 1 hour foot  40$
//1 hour body 60$
//30mins foot 30mins body 50$

//90mins body 90$

//happy hours
//10:00AM-12:00AM 1 hour body 50$

import React from 'react';
import './style.css';
import image1 from './01.jpg';
import image2 from './02.jpg';
import image3 from './03.jpg';
import image4 from './04.png';

class Prices extends React.Component {
  constructor() {
    super();
  }
  render() {
    var style = {
      width: '100px',
      height: '100px',
      border: 'none',
      borderRadius: '200px'
    };
    var style1 = {
      width: '100px',
      height: '100px',
      border: 'none'
      // borderRadius: '200px'
    };
    return (
      <div id="prices">
        <div className="price-list">
          <img src={image1} style={style} />
          <h5>FOOT MASSAGE</h5>
          <p>30 MINS FOR 30$</p>
          <p>60 MINS FOR 40$</p>
        </div>
        <div className="price-list">
          <img src={image2} style={style} />
          <h5>BODY MASSAGE</h5>
          <p>30 MINS FOR 40$</p>
          <p>60 MINS FOR 60$</p>
          <p>90 MINS FOR 90$</p>
        </div>
        <div className="price-list">
          <img src={image3} style={style} />
          <h5>COMBO</h5>
          <p>30 MINS FOOT with 30 MINS BODY FOR 50$</p>
        </div>
        <div className="price-list">
          <img src={image4} style={style1} />
          <h5 />
          <p>60 MINS BODY FOR 50$ 10:00AM-12:00AM EVERY DAY</p>
        </div>
      </div>
    );
  }
}

export default Prices;
