import React from 'react';
import './StartMenuOptions.css';

export class StartMenuOptions extends React.Component{

    render(){
        const divStyle = {
            backgroundImage: `url(/Icons/${this.props.image}.ico)`,
            display: this.props.visible ? 'block' : 'none'
        };

        return (
            <div style={divStyle} className="StartMenuOption">
                {this.props.children}
            </div>
        );
    }
}