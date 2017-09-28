import React from 'react';
import './Icons.css';
import {Icon} from "../Icon/Icon";

export class Icons extends React.Component{
    render(){
        const style = {
          left: `${this.props.row * 30}%`
        };
        return (
            <ul style={style} className="Icons">
                {this.props.children}
            </ul>
        );
    }
}