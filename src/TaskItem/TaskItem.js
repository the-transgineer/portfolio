import React from 'react';
import './TaskItem.css';

export class TaskItem extends React.Component{
    /*constructor(props){
        super(props);

        this.state = {
            minimized: false
        }
    }*/

    render(){
        const Program = this.props.controller.getOne(this.props.name);
        const itemStyle = {
            backgroundImage: `url(/Icons/${Program.image}.ico)`
        };
        return(
            <div style={itemStyle} className="TaskItem">
                <p>{Program.name}</p>
            </div>
        );
    }
}