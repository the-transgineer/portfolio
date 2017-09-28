import React from 'react';

export const Programs = [

    {
        name: 'My Computer',
        image: 'computer',
        desktop: true,
        visible: false,
        minimized: false,
        content: <h1>Hello World</h1>
    },


    {
        name: 'Tic Tac Toe',
        image: 'computer',
        desktop: true,
        visible: false,
        minimized: false,
        content: ''
    },

    {
        name: 'Change Color',
        image: 'file_eye',
        desktop: false,
        visible: false,
        minimized: false,
        parent: 'Portfolio',
        content: ''
    },

    {
        name: 'Portfolio',
        image: 'folder-open',
        desktop: true,
        visible: false,
        minimized: false,
        fileBrowser: true,
        parent: 'none'
    }
];