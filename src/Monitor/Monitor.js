import React, { Component } from 'react';
import './Monitor.css';
import {Taskbar} from "../Taskbar/Taskbar";
import {Desktop} from "../Desktop/Desktop";
import {Game} from "../Games/TicTacToe/Game"
import {FileBrowser} from "../FileBrowser/FileBrowser";

class Monitor extends Component {
    constructor(props){
        super(props);

        this.props.controller.getOne('Tic Tac Toe').content = <Game controller={this.props.controller}/>;
        this.props.controller.getOne('Portfolio').content = <FileBrowser name='Portfolio' controller={this.props.controller}/>;

        this.state = {
            rightMenu: false,
            startMenu: false
        }
    }


    handleClick = () =>{
        this.setState({
            rightMenu: false,
            startMenu: false
        });

    };

    render() {
        return (
            <div onClick={this.handleClick} className="Monitor">
             <Desktop controller={this.props.controller} />
             <Taskbar controller={this.props.controller} />
            </div>
        );
    }
}

export default Monitor;