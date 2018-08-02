import React from 'react';
import './style.css';
var map, marker, center, infowindow;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    console.log('contact component run', this.props);
  }
  componentDidMount() {
    center = { lat: 33.944267, lng: -117.390911 };
    infowindow = new google.maps.InfoWindow({
      content:
        '<h4>Eastern Ancient Massage</h4><br/><p><strong>Address:</strong>6709 Indiana Ave, Riverside, CA, 92506</p>'
    });
    map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 14
    });
    marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Eastern Ancient Massage'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
  render() {
    return (
      <div id="contact">
        <div id="header-content">
          <p>
            <span>Address:</span> 12459 116th AVE NE Kirkland, WA, 98034
          </p>
          <p>
            <span>Phone Number:</span> (425)-823-6038
          </p>
          <p>
            <span>Business Hours:</span> 10AM-10PM Monday-Sunday
          </p>
        </div>
        <div id="map" />
      </div>
    );
  }
}

export default Contact;
