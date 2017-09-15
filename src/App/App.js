import React, { Component } from 'react';
import Monitor from '../Monitor/Monitor'
import './App.css';
import {SplashScreen} from "../SplashScreen/SplashScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplashScreen/>
        <Monitor/>
      </div>
    );
  }
}

export default App;
