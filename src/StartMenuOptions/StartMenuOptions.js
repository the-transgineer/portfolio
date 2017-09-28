import React from 'react';
import './StartMenuOptions.css';

export class StartMenuOptions extends React.Component{

    handleClick = () =>{
      this.props.controller.hideStart();
      this.props.controller.toggleVisible(this.props.name);
        this.props.controller.toggleMax(this.props.name);
    };

    render(){
        const divStyle = {
            backgroundImage: `url(/Icons/${this.props.image}.ico)`,
            display: this.props.visible ? 'block' : 'none'
        };

        return (
            <div onClick={this.handleClick} style={divStyle} className="StartMenuOption">
                <p>{this.props.name}</p>
            </div>
        );
    }
}