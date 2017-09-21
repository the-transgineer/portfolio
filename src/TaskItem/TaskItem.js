import React from 'react';
import './TaskItem.css';

export class TaskItem extends React.Component{
    handleClick = () =>{
        this.props.controller.toggleMax(this.props.name);
    };

    render(){
        const Program = this.props.controller.getOne(this.props.name);
        const itemStyle = {
            backgroundImage: `url(/Icons/${Program.image}.ico)`
        };
        return(
            <div onClick={this.handleClick} style={itemStyle} className="TaskItem">
                <p>{Program.name}</p>
            </div>
        );
    }
}