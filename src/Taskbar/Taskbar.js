import React, { Component } from 'react';
import './Taskbar.css';
import {Time} from '../Time/Time'
import {Menu} from "../Menu/Menu";
import {Tasks} from "../Tasks/Tasks";

export class Taskbar extends Component {
    render() {
        return (
            <div className="Taskbar">
                <Menu/>
                <Tasks/>
            </div>
        );
    }
}
