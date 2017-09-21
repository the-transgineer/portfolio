import React from 'react';
import {TaskItem} from "./TaskItem"
import './TaskItem.css'

export class TaskItemList extends React.Component{

    render(){
        return (
            <div className="TaskItemList">
                {this.props.controller.getAll().map((item, index) =>{
                    if(item.visible){
                        return <TaskItem key={index} name={item.name} controller={this.props.controller}/>
                    }
                })}
            </div>
        );
    }
}