import React from 'react';
import {PopUp} from "../../Popup/PopUp"
let calculateWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export class Board extends React.Component{
    constructor(){
        super();

        this.state = {
            squares: new Array(9).fill(null),
            xTurn  : true,
        }
    }

    reset = () =>{
        this.setState({
            squares: new Array(9).fill(null)
        })
    };

    handleClick = (i) => {
       let subSquares = this.state.squares;
        if(calculateWinner(subSquares) || subSquares[i]){
            return;
        }
       subSquares[i] = this.state.xTurn ? 'X' : 'O';
       this.setState({
           squares: subSquares,
           xTurn: !this.state.xTurn
       })
    };

    renderSquare(i){
        return (
            <Square onClick={() => this.handleClick(i)} value={this.state.squares[i]} />
        );
    };

    render() {
        let status = `Next player: ${this.state.xTurn ? 'X' : 'O'}`;
        const winner = calculateWinner(this.state.squares);
        let popUp = false;

        const buttonStyle = {
            width: '40px',
            position: 'relative',
            left: '75%',
            marginLeft: '10px',
            marginTop: '-20px',
            padding: '3px, 7px, 3px, 7px',
            backgroundColor: 'grey',
            zIndex: '1',
            textAlign: 'center',
            border: 'solid 1px black'
        };

        if(winner){
            status = `Winner: ${winner}`;
            popUp = true;
        }

        return (
            <div onClick={this.handleClick}>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

                <PopUp visible={popUp} instance={{title: 'Play Again'}}>
                    <h3>Would You like to play again?</h3>
                    <div style={{display: 'inline-flex'}}>
                        <div onClick={ this.reset } style={buttonStyle}>Yes</div>
                        <div style={buttonStyle}>No</div>
                    </div>
                </PopUp>
            </div>
        );
    }
}
