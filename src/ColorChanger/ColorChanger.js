import  React from 'react';
import { ChromePicker } from "react-color"
import './ColorChanger.css'


export class ColorChanger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: ""
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
      };
    handleClick = e => {
        this.props.controller.changeColor(this.state.color)
    };


    render(){
        console.log(this.state.color);
        return (
            <div className="colorPicker">
                <div className="colorContainer">
                <ChromePicker
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeComplete }
                />
                <input onClick={this.handleClick} type="submit"/>
                </div>
            </div>
        )
    }
}