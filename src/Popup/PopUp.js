import React from 'react';

export class PopUp extends React.Component{
    render(){
        const popUpStyle = {
            display: this.props.visible ? 'block' : 'none',
            height: '100px',
            width: '300px',
            backgroundColor: '#BFBFBF',
            position: 'absolute',
            left: '20%'
        };
        const classes = ["Window"];
        return(
            <div style={popUpStyle} className={classes}>
                <div className="TopBar">
                    <div className="windowIcon"> </div>
                    <div className="Title">{this.props.instance.title}</div>
                    <div className="ActionButtons">
                        <div onClick={this.close} className="barButton" id="X">⨯</div>
                    </div>
                </div>
                <div className="WindowContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
