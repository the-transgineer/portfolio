import React from 'react';
import './SoundMenu.css';

export class SoundMenu extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        let classes = ["SoundMenu"];
        if(!this.props.visible){
            classes.push('hide');
        }
        return (
            <div className={classes}>

            </div>
        );
    }
}