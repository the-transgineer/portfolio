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
        url: 'http://the-transgineer.github.io/old-portfolio'

    },
    {
      name: 'BC API Toolbox',
      image: 'npm',
      parent: 'Portfolio',
      url: 'https://npmjs.com/bc-api-toolbox'

    },
    {
      name: 'Transportation Dashboard',
      image : 'coa',
      parent: 'Portfolio',
      url: 'http://transportation-dashboard.herokuapp.com'
    },
    {
      name: 'MapBoard',
      image: 'npm',
      parent: 'Portfolio',
      url: 'https://npmjs.com/mapboard-components'
    },
    {
      name: 'Pantry',
        image: 'pantry',
      parent: 'Portfolio',
      url: 'https://pantry-io.herokuapp.com'
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
        url: 'https://www.linkedin.com/in/mckinley-forbes-9b2a05181/'
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
];