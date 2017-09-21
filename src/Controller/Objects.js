import React from 'react';
import {Game} from "../Games/TicTacToe/Game";

export const Programs = [
    {
        name: 'computer',
        image: 'computer',
        desktop: true,
        visible: false,
        minimized: false,
        content: 'Hello World'
    },

    {
        name: 'my computer',
        image: 'computer',
        desktop: false,
        visible: false,
        minimized: false,
        content: '<div>Hello World</div>'
    },


    {
        name: 'Tic Tac Toe',
        image: 'computer',
        desktop: true,
        visible: false,
        minimized: false,
        content: <Game />
    }
];