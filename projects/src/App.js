import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Projects from './components/Projects';
import Actions from './components/Actions';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/projects/')
      .then(res => {
        console.log(res.data);
        this.setState({
          projects: res.data
        })
      })
      .catch(err => console.log(err));
    axios
      .get('http://localhost:4000/api/actions')
      .then(res => {
        this.setState({
          actions: res.data
        })
      });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/actions'>Actions</NavLink>
        </nav>

        <Route
          exact
          path='/'
          render={props =>
            <Home
              {...props}
            />
          }
        />

        <Route
          path='/projects'
          render={props =>
            <Projects
              {...props}
              projects={this.state.projects}
            />
          }
        />

        <Route
          path='/actions'
          render={props => 
            <Actions
              {...props}
              actions={this.state.actions}
            />
          }
        />
      </div>
    );
  }
}

export default App;
