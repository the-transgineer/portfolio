import React, { Component } from 'react';
import Monitor from '../Monitor/Monitor'
import './App.css';
import {SplashScreen} from "../SplashScreen/SplashScreen";
import {Controller} from "../Controller/Contoroller"

class App extends Component {
    constructor(props){
        super(props);
        let controller = new Controller();
        this.state = {
            controller: controller
        };
    }
  render() {
    return (
      <div className="App">
        <SplashScreen/>
        <Monitor controller={this.state.controller}/>
      </div>
    );
  }
}

export default App;
