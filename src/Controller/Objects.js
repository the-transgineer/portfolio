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
        desktop: false,
        visible: false,
        minimized: false,
        parent: 'Games',
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
    },

    {
        name: 'Command',
        image: 'console_prompt',
        desktop: false,
        visible: false,
        minimized: false,
        fileBrowser: false,
        parent: 'none'
    },

    {
        name: 'Games',
        image: 'joystick',
        desktop: false,
        visible: false,
        minimized: false,
        fileBrowser: true,
        parent: 'none'
    },

    {
        name: 'Community App',
        image: 'BC',
        parent: 'Portfolio'
    },

    {
        name: 'Safe Night',
        image: 'SN',
        parent: 'Portfolio'
    },

    {
        name: 'Old Portfolio',
        image: 'Fist',
        parent: 'Portfolio'

    }
];