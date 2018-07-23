import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Sidebar/index';
import Content from './components/Content/index';

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
    fetch('https://meu-site-5f4d8.firebaseio.com/.json')
        .then(res => res.json())
        .then(data => {
            console.log('retorno do data => 🔥💿', data);
            this.setState({ profile: data });
        })
  }
}

export default App;