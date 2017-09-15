import React from 'react';
import './Desktop.css';
import {RightMenu} from "../RightMenu/RightMenu";
import {Window} from "../Window/Window";

export class Desktop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            backgroundColor : '#008483',
            displayMenu     : false,
            displayMenuX    : 0,
            displayMenuY    : 0
        }
    }

    showMenu = (e) =>{
        e.preventDefault();
        this.setState({
            displayMenu: true,
            displayMenuX: `${e.clientX - 510 }px`,
            displayMenuY: `${e.clientY - 10}px`
        });
    };

    handleClick = () =>{
        this.setState({
            displayMenu: false,
        })
    };

    childHandleClick = () => {
        this.setState({
            backgroundColor: 'red'
        });
    };


    render(){

        let style = {
            backgroundColor: this.state.backgroundColor
        };

        let menuStyle = {
            position: 'absolute',
            left: this.state.displayMenuX,
            top: this.state.displayMenuY
        };
        return(
            <div onContextMenu={this.showMenu} onClick={this.handleClick} style={style} className="Desktop">
                <Window instance={{title: 'hi', content:'content'}}/>
                <RightMenu changeColor={this.childHandleClick} visible={this.state.displayMenu} style={menuStyle} />
            </div>
        );
    }
}