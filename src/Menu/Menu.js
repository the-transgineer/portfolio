import React, { Component } from 'react';
import './Menu.css';
import {Start} from "../Start/Start";

export class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            visible : false
        };

    }


    showStart = () =>{
        this.setState({
            visible: !(this.state.visible)
        })
    };

    render(){

        let menuClasses = ["Menu"];
        return (
            <div>
                <Start visible={this.state.visible}/>
                <div onClick={ this.showStart } className={menuClasses}>
                    <img src="" alt=""/>
                    Start
                </div>
            </div>
        );
    }
}
