import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Sidebar/index';
import Content from './components/Content/index';

import Address from './api.adress';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: []
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content 
          jobs={ this.state.profile.experience } />
      </div>
    );
  }

  componentDidMount() {
    fetch(Address.API)
      .then(res => res.json())
      .then(data => {
          // console.log(`retorno do data => 🔥💿`, data);
          this.setState({ profile: data });
      }).catch(err => {
        console.error(`🚫 Error to load data`, err);
      })
  }
}

export default App;