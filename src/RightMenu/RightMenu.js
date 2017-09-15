import React from 'react';
import './RightMenu.css'

export class RightMenu extends React.Component{

    shutDown(){

    }
    render(){
        let classes = ["RightMenu"];

        let ulStyle = {
          border: 'solid 1px black',
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          width: '160px',
        };

        let liStyle = {
            display: 'block'
        };

        if(!this.props.visible){
            classes.push('hideRM');
        }

        return (
          <div style={this.props.style} className={classes}>
              <ul style={ulStyle}className={classes[1]}>
                  <li onClick={this.props.changeColor} style={liStyle}>Change Desktop Color</li>
                  <li style={liStyle}>File Browser</li>
                  <li onClick={this.shutDown} style={liStyle}>Shut down</li>
              </ul>
          </div>
        );
    }
}