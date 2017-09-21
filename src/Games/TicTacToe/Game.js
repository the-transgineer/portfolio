import React from 'react';
import {Board} from "./Board"
import './TicTac.css'

export class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true

        }
        console.log(this.props.controller);
    };


    render() {

        return (
            <div className="game">
                <div className="game-board">
                    <Board controller={this.props.controller} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

}