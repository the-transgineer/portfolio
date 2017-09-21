import React from 'react';
import './RightMenuOptions.css';

export class RightMenuOptions extends React.Component{

    handleClick = e => {
        let input = e.target.textContent;
        console.log(input);
        switch(input){
            case 'Open':{
                console.log(this.props);
                this.props.controller.toggleVisible(this.props.name);
                this.props.controller.toggleMax(this.props.name);
                break;
            }
        }
    };

    render(){
        return (
            <li onClick={this.handleClick} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} className="RightMenuOptions">
                {this.props.title}
            </li>
        );
    }
}