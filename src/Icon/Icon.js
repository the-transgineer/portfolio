import React from 'react';
import './Icon.css';

export class Icon extends React.Component{

    render(){
        const style = {
            backgroundImage: `url(/Icons/${this.props.image}.ico`
        };

        return (
            <li className="Icon" style={style}>
                <p id="IconTitle">{this.props.name}</p>
            </li>
        );
    }
}