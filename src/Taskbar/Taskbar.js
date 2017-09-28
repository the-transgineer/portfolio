import React, { Component } from 'react';
import './Taskbar.css';
import {Time} from '../Time/Time'
import {Menu} from "../Menu/Menu";
import {Tasks} from "../Tasks/Tasks";
import {TaskItem} from "../TaskItem/TaskItem";
import {TaskItemList} from "../TaskItem/TaskItemList";

export class Taskbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: true
        }
    }

    handleRightClick = e => {
        e.preventDefault();
        
    };

    render() {
        console.log('rendered');
        return (
            <div onContextMenu={this.handleRightClick} className="Taskbar">
                <Menu  />
                <TaskItemList controller={this.props.controller}/>
                <Tasks/>
            </div>
        );
    }
}
