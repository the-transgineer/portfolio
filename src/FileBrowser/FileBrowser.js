import React from 'react';
import './FileBrowser.css';
import {Icon} from "../Icon/Icon";
import {Icons} from "../Icons/Icons";

export class  FileBrowser extends React.Component {
    constructor(props){
        super(props);

    }


    render(){
        console.log('rendered');
        return(
            <div className="Browser">
                <Icons>
                    {this.props.controller.Programs.map((item, index) =>{
                        if(item.parent === this.props.name){
                            return (<Icon color="black" key={index} controller={this.props.controller} name={item.name} imgae={item.image} />);
                        }
                    })}
                </Icons>
            </div>
        );
    }
}