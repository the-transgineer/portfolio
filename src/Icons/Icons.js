import React from 'react';
import './Icons.css';
import {Icon} from "../Icon/Icon";

export class Icons extends React.Component{
    render(){
        return (
            <ul className="Icons">
                {this.props.controller.getAll().map( (i, j) => {
                    if(i.desktop) {
                        return <Icon controller={this.props.controller} key={j} name={i.name}/>
                    }
                })}
            </ul>
        );
    }
}