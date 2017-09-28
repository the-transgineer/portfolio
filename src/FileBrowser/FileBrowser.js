import React from 'react';
import './FileBrowser.css';
import {Icon} from "../Icon/Icon";
import {Icons} from "../Icons/Icons";

export class  FileBrowser extends React.Component {
    constructor(props){
        super(props);

        let Programs = this.props.controller.Programs.filter((item) =>{
            if(item.parent === this.props.name){
                return item;
            }
        });

        let newArray  = [];

        for(let x = 0; x < Programs.length;x+=2){
            newArray.push(Programs.slice(x,x+2))
        }

        this.state = {
            Programs: newArray
        }

    }

    onHover = () =>{
        this.setState(this.state)
    };
    render(){
        return(
            <div onMouseEnter={this.onHover} className="Browser">
                    {this.state.Programs.map((i, index) =>{
                        return (
                            <Icons row={index}>
                                {    i.map((item,j)=>{
                                    if(item.parent === this.props.name){
                                        return (<Icon color="black" key={`${index} + ${j}`} controller={this.props.controller} name={item.name} imgae={item.image} />);
                                    }
                                })}
                            </Icons>
                            );
                    })}
            </div>
        );
    }
}

