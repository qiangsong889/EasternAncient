import React from 'react';
import axios from 'axios';
import './style.css';
import MainPage from '../mainPageComponent';
import Nav from '../navbarComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { componentRoutes } from '../../routes';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }
  async handleClick() {
    try {
      const { data } = await axios.post(
        'http://localhost:1992/api/test/test1',
        {
          name: 'shayne'
        }
      );
    } catch (err) {
      console.log('err handling click');
    }
  }
  render() {
    return (
      <div>
        <Route path="/" component={Nav} />
        <Switch>
          {componentRoutes.map((route, i) => {
            return (
              <Route path={route.path} component={route.component} key={i} />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default Entry;
