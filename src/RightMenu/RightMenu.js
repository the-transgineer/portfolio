import React from 'react';
import './RightMenu.css';
import {RightMenuOptions} from "../RightMenuOptions/RightMenuOptions";


export class RightMenu extends React.Component{


    render(){
        let classes = ["RightMenu"];

        let ulStyle = {
          border: 'solid 1px black',
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          width: '160px',
        };



        if(!this.props.visible){
            classes.push('hideRM');
        }


        return (
          <div style={this.props.style} className={classes}>
              <ul style={ulStyle} className={classes[1]}>
                  {this.props.content.map( (item,index) =>  <RightMenuOptions key={index} controller={this.props.controller} name={this.props.info} title={item}/>)}
              </ul>
          </div>
        );
    }
}