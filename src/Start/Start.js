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
                <StartMenuOptions name="Command" controller={this.props.controller} image="console_prompt" visible={this.props.visible} />
                <StartMenuOptions name="Games"   controller={this.props.controller} image="joystick" visible={this.props.visible} />
            </div>
        );
    }
}