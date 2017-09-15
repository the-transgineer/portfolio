import React from 'react';
import './Sound.css';
import {SoundMenu} from "../soundMenu/SoundMenu";

export class Sound extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible : props.visible,
            menuVisible : false
        }
    }

    handleClick = () => {
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    };



    render(){
        let classes = ["Sound"];

        if (!this.state.visible){
            classes.push('hidden')
        }
        return (
            <div onClick={this.handleClick} className={classes}>
                <SoundMenu visible={this.state.menuVisible}/>
            </div>
        );
    }
}