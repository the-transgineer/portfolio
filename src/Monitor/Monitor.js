import React, { Component } from 'react';
import './Monitor.css';
import {Taskbar} from "../Taskbar/Taskbar";
import {Desktop} from "../Desktop/Desktop";

class Monitor extends Component {
    constructor(props){
        super(props);

        this.state = {
            rightMenu: false,
            startMenu: false
        }
    }

    handleClick = () =>{
        this.setState({
            rightMenu: false,
            startMenu: false
        })
    };

    render() {
        return (
            <div onClick={this.handleClick} className="Monitor">
             <Desktop rightMenuVisible={this.state.rightMenu}/>
             <Taskbar startMenuVisible={this.state.startMenu}/>
            </div>
        );
    }
}

export default Monitor;