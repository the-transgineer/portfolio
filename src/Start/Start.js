import React from 'react';
import './Start.css';

export class Start extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        let startClasses = ["Start"];

        if(!this.props.visible){
            console.log(this.props.visible);
            startClasses.push("Start-Hidden")
        }

        return(
            <div className={startClasses}>

            </div>
        );
    }
}