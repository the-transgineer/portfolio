import React from 'react';
import './Desktop.css';
import {RightMenu} from "../RightMenu/RightMenu";
import {Window} from "../Window/Window";
import {Icons} from "../Icons/Icons";
import {Icon} from "../Icon/Icon";
import {PopUp} from "../Popup/PopUp";

export class Desktop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            backgroundColor : this.props.controller.DesktopBackground,
            displayMenu     : false,
            displayMenuX    : 0,
            displayMenuY    : 0,
            displayMenuContent: ['test', 'test'],
            displayMenuInfo : ''
        }
    }

    showMenu = (e) =>{
        const id = e.target.getAttribute('id');
        switch (id){
            case 'IconTitle':
                this.setState({
                    displayMenuContent:['Open', 'Rename', 'Delete'],
                    displayMenuInfo: e.target.textContent
                });
                break;
            default:
                this.setState({
                    displayMenuContent:['Change Color', 'Add New']
                })
        }
        e.preventDefault();
        this.setState({
            displayMenu: true,
            displayMenuX: `${e.clientX - 510 }px`,
            displayMenuY: `${e.clientY - 50}px`
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
                <Icons controller={this.props.controller}>
                    {this.props.controller.getAll().map( (i, j) => {
                        if(i.desktop) {
                            return <Icon controller={this.props.controller} key={j} name={i.name}/>
                        }
                    })}
                </Icons>
                {this.props.controller.getAll().map((item,index) => {
                    if(item.visible){
                        return <Window key={index} name={item.name} controller={this.props.controller}>
                            {item.content}
                        </Window>
                    }
                })}

                {this.props.controller.Popups.map((item, index) => {
                    return <PopUp key={index} name={item.name} controller={this.props.controller}>
                        {item.content}
                    </PopUp>
                })}
                <RightMenu content={this.state.displayMenuContent} controller={this.props.controller} info={this.state.displayMenuInfo} changeColor={this.childHandleClick} visible={this.state.displayMenu} style={menuStyle} />
            </div>
        );
    }
}