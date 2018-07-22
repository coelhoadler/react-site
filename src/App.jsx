import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Sidebar/index';

import Content from './components/Content/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
