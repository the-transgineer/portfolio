import React, { Component } from 'react';
import './Monitor.css';
import {Taskbar} from "../Taskbar/Taskbar";
import {Desktop} from "../Desktop/Desktop";

class Monitor extends Component {
    render() {
        return (
            <div className="Monitor">
             <Desktop/>
             <Taskbar/>
            </div>
        );
    }
}

export default Monitor;