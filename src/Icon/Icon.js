import React from 'react';
import './Icon.css';
import {Game} from "../Games/TicTacToe/Game";

export class Icon extends React.Component{

    handleClick = () =>{
        if(!this.props.controller.getOne(this.props.name).visible){
            this.props.controller.toggleVisible(this.props.name);
            this.props.controller.getOne('Tic Tac Toe').content = <Game controller={this.props.controller}/>
        }
    };

    render(){
        const program = this.props.controller.getOne(this.props.name);
        const style = {
            backgroundImage: `url(/Icons/${program.image}.ico`
        };


        return (
            <li onClick={this.handleClick} className="Icon" style={style}>
                <p id="IconTitle">{this.props.name}</p>
            </li>
        );
    }
}