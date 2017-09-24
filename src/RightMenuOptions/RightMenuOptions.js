import React from 'react';
import './RightMenuOptions.css';

export class RightMenuOptions extends React.Component{

    handleClick = e => {
        let input = e.target.textContent;
        console.log(input);
        switch(input){
            case 'Open':{
                this.props.controller.toggleVisible(this.props.name);
                this.props.controller.toggleMax(this.props.name);
                break;
            }

            case 'Rename':{
                this.props.controller.rename(this.props.name, 'NewName');
                break;
            }

            case 'Delete':{
                this.props.controller.delete(this.props.name);
                break;
            }

            default: {
                this.props.controller.toggleVisible(input);
                this.props.controller.toggleMax(input);
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