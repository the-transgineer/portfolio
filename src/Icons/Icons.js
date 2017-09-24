import React from 'react';
import './Icons.css';
import {Icon} from "../Icon/Icon";

export class Icons extends React.Component{
    render(){
        return (
            <ul className="Icons">
                {this.props.children}
            </ul>
        );
    }
}