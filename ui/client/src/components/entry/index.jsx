import React from 'react';
import axios from 'axios';
import './style.css';
import MainPage from '../mainPageComponent';
import Nav from '../navbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { componentRoutes } from '../../routes';
import Contact from '../ContactComponent';
class Entry extends React.Component {
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
        <Switch>
          <Route path="/" component={Nav} />
        </Switch>
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
