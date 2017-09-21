import React from 'react';
import './RightMenuOptions.css';

export class RightMenuOptions extends React.Component{

    render(){
        return (
            <li onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} className="RightMenuOptions">
                {this.props.title}
            </li>
        );
    }
}