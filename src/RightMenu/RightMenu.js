import React from 'react';
import './RightMenu.css'

export class RightMenu extends React.Component{
    render(){
        let classes = ["RightMenu"];

        let ulStyle = {
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          width: '150px',
        };

        let liStyle = {
            display: 'block',
            padding: '100px, 16px'
        };

        if(!this.props.visible){
            classes.push('hideRM');
        }

        return (
          <div style={this.props.style} className={classes}>
              <ul style={ulStyle}className={classes[1]}>
                  <li onClick={this.props.changeColor} style={liStyle}>Change Desktop Color</li>
                  <li style={liStyle}>File Browser</li>
                  <li style={liStyle}>Shut down</li>
              </ul>
          </div>
        );
    }
}