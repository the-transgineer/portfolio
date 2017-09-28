import React, { Component } from 'react';
import './Menu.css';
import {Start} from "../Start/Start";

export class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            visible : this.props.visible
        };

    }


    showStart = () =>{
        this.setState({
            visible: !(this.state.visible)
        });
        this.props.controller.hideRight();
        if(!this.props.controller.startVisible){
            this.props.controller.showStart();
        }
        else {
            this.props.controller.hideStart();
        }
    };

    render(){

        let menuClasses = ["Menu"];
        return (
            <div>
                <Start visible={this.props.controller.startVisible}/>
                <div onClick={ this.showStart } className={menuClasses}>
                    <img src="" alt=""/>
                    Start
                </div>
            </div>
        );
    }
}
