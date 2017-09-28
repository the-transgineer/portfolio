import React from 'react';
import './CMD.css';
import Terminal from 'jquery.terminal/js/jquery.terminal.min'

export class CMD extends React.Component{
    render(){
        const style = {
            backgroundColor: 'black',
            color: 'white',
            height: '350px',
            width: '100%',
            display: 'flex',
            border: 'none'
        };
        return(
            <div style={style}>
                <p>Forbes 95_</p>
                <input style={style} type="text"/>
            </div>
        )
    }
}