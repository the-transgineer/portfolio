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
        const itemStyle = {
            backgroundImage: 'url(/Icons/computer.ico)'
        };
        return(
            <div style={itemStyle} className="TaskItem">
                <p>{this.props.name}</p>
            </div>
        );
    }
}