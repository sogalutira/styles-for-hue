import React, { Component } from 'react';
import { IndexLink } from 'react-router';

import { NavLink } from '../components';

class App extends Component {
  render() {
    return (
      <div
      >
        <div
          className="nav"
        >
          <div className="nav-left">
            <h1><IndexLink to="/">Styles For Hue</IndexLink></h1>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <IndexLink
                  to="/"
                  activeClassName="active"
                >
                  Home
                </IndexLink>
              </li>
              <li>
                <NavLink
                  to="/template"
                >
                  Template
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="app-container"
        >
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;