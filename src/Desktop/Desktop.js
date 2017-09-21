import React from 'react';
import './Desktop.css';
import {RightMenu} from "../RightMenu/RightMenu";
import {Window} from "../Window/Window";
import {Icons} from "../Icons/Icons";
import {Game} from "../Games/TicTacToe/Game";

export class Desktop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            backgroundColor : '#008483',
            displayMenu     : false,
            displayMenuX    : 0,
            displayMenuY    : 0,
            displayMenuContent: ['test', 'test']
        }
    }

    showMenu = (e) =>{
        const id = e.target.getAttribute('id');
        switch (id){
            case 'IconTitle':
                this.setState({
                    displayMenuContent:['Open', 'Rename', 'Delete']
                });
                break;
            default:
                this.setState({
                    displayMenuContent:['Change Background Color']
                })
        }
        e.preventDefault();
        this.setState({
            displayMenu: true,
            displayMenuX: `${e.clientX - 500 }px`,
            displayMenuY: `${e.clientY - 10}px`
        });
    };

    handleClick = () =>{
        this.setState({
            displayMenu: false
        })
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
                <Icons controller={this.props.controller}/>
                {this.props.controller.getAll().map((item,index) => {
                    if(item.visible){
                        return <Window key={index} name={item.name} controller={this.props.controller}>
                            {item.content}
                        </Window>
                    }
                })}
                <RightMenu content={this.state.displayMenuContent} changeColor={this.childHandleClick} visible={this.state.displayMenu} style={menuStyle} />
            </div>
        );
    }
}