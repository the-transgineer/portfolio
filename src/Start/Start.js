import React from 'react';
import './Start.css';
import {StartMenuOptions} from "../StartMenuOptions/StartMenuOptions";

export class Start extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        let startClasses = ["Start"];

        if(!this.props.visible){
            startClasses.push("Start-Hidden")
        }

        return(
            <div className={startClasses}>
                <StartMenuOptions image="console_prompt" visible={this.props.visible}><p>Command</p></StartMenuOptions>
            </div>
        );
    }
}