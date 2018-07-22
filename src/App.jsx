import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Sidebar/index';
import Content from './components/Content/index';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: { }
    }
  }

  render() {
    console.log('=> render');
    
    return (
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    );
  }

  componentDidMount() {
    console.log('=> did app.jsx');
    fetch('https://meu-site-5f4d8.firebaseio.com/.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.state.data = data;
        })
  }
}

export default App;