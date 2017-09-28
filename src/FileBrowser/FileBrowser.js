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

        this.state = {
            Programs: Programs
        }

    }

    onHover = () =>{
        this.setState(this.state)
    };
    render(){
        return(
            <div onMouseEnter={this.onHover} className="Browser">
                <Icons>
                    {this.state.Programs.map((item, index) =>{
                        if(item.parent === this.props.name){
                            return (<Icon color="black" key={index} controller={this.props.controller} name={item.name} imgae={item.image} />);
                        }
                    })}
                </Icons>
            </div>
        );
    }
}