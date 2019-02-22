import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';

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
        <h1>It's working!</h1>
      </div>
    );
  }
}

export default App;
