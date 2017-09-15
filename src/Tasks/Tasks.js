import React from 'react';
import './Tasks.css';
import {Time} from "../Time/Time";
import {Sound} from "../Sound/Sound";

export class Tasks extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Tasks">
                <Sound className="item" visible={true}/>
                <Time className="item"/>
            </div>
        );
    }
}