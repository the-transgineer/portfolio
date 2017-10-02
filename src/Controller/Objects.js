import React from 'react';
import {CMD} from "../CMD/CMD";
import {Blog} from "../Blog/Blog";

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
        image: 'X',
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
        parent: 'none',
        content: <CMD/>
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
        name: 'Blog',
        image:'msie1',
        desktop: true,
        visible: false,
        minimized: false,
        content: <Blog/>

    },

    {
        name: 'Community App',
        image: 'BC',
        parent: 'Portfolio',
        url: 'http://bc-community-app.herokuapp.com'
    },

    {
        name: 'Safe Night',
        image: 'SN',
        parent: 'Portfolio',
        url: 'http://safe-night.herokuapp.com'
    },

    {
        name: 'Old Portfolio',
        image: 'Fist',
        parent: 'Portfolio',
        url: 'http://solidaritydesigns.com'

    }
];