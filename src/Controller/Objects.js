import React from 'react';
import {CMD} from "../CMD/CMD";
import {Blog} from "../Blog/Blog";
import {ColorChanger} from "../ColorChanger/ColorChanger";

export const Programs = [

    {
        name: 'My Computer',
        image: 'computer',
        desktop: true,
        visible: false,
        minimized: false,
        content: null,
        fileBrowser: true
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
        parent: null
    },

    {
        name: 'Command',
        image: 'console_prompt',
        desktop: false,
        visible: false,
        minimized: false,
        fileBrowser: false,
        parent: null,
        content: <CMD/>
    },

    {
        name: 'Games',
        image: 'joystick',
        desktop: false,
        visible: false,
        minimized: false,
        fileBrowser: true,
        parent: null
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
        name: 'Change Color',
        image: 'kodak_imaging',
        visible: false,
        minimized: false,
        content: ''
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
        name: 'Picture App',
        image: 'BC',
        parent: 'Portfolio',
        url: 'https://bc-picture-app.herokuapp.com'
    },

    {
        name: 'Old Portfolio',
        image: 'Fist',
        parent: 'Portfolio',
        url: 'http://solidaritydesigns.com'

    },
    {
      name: 'BC API Toolbox',
      image: 'npm',
      parent: 'Portfolio',
      url: 'https://npmjs.com/bc-api-toolbox'

    },

    {
        name: 'Github',
        image: 'gh',
        parent: 'My Computer',
        url: 'https://github.com/the-transgineer'
    },
    {
        name: 'Linkedin',
        image: 'link',
        parent: 'My Computer',
        url: 'https://linkedin.com/in/mckinley-forbes'
    },
    {
        name: 'Twitter',
        image: 'twitter',
        parent: 'My Computer',
        url: 'https://twitter.com/Transgineering'
    },
    {
        name: 'Instagram',
        image: 'insta',
        parent: 'My Computer',
        url: 'https://www.instagram.com/TheTransgineer/'
    },
    {
        name: 'Facebook',
        image: 'face',
        parent: 'My Computer',
        url: 'https://www.facebook.com/caleb.forbes.148'
    }
];