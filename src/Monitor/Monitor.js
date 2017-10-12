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
        this.props.controller.getOne('Games').content = <FileBrowser name='Games' controller={this.props.controller}/>;
        this.props.controller.getOne('My Computer').content = <FileBrowser name="My Computer" controller={this.props.controller}/>;
        this.state = {
            rightMenu: this.props.controller.rightVisible,
            startMenu: this.props.controller.startVisible
        }
    }


    handleClick = () =>{
        this.setState(this.state);
    };

    render() {
        return (
            <div onClick={this.handleClick} className="Monitor">
             <Desktop controller={this.props.controller} />
             <Taskbar controller={this.props.controller} RightMenu={this.state.rightMenu}/>
            </div>
        );
    }
}

export default Monitor;