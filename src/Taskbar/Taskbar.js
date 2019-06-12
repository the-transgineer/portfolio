import React, { Component } from 'react';
import './Taskbar.css';
import {Menu} from "../Menu/Menu";
import {Tasks} from "../Tasks/Tasks";
import {TaskItemList} from "../TaskItem/TaskItemList";
import ToolTip from "../ToolTip/ToolTip";

export class Taskbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: true
        }
    }

    click = () =>{
        this.props.controller.hideRight();
    };

    handleRightClick = e => {
        e.preventDefault();
        
    };

    render() {
        return (
            <div onClick={this.click} onContextMenu={this.handleRightClick} className="Taskbar">
                <Menu visible={this.props.RightMenu} controller={this.props.controller} />
                <TaskItemList controller={this.props.controller}/>
                <Tasks/>
                <ToolTip />
            </div>
        );
    }
}
