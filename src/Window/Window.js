import React from 'react';
import './Window.css';

export class Window extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible  : true,
            maximised: false,
            position: '25%'
        };

    }

    close = () => {
        this.setState({
           visble: !this.state.visible
        });
    };

    changeSize = () => {
        this.setState({
            position: this.state.maximised ? '25%' : '0%',
            maximised: !this.state.maximised
        })
    };



    render(){
        let size = this.state.maximised ? '900px' : '400px';
        let windowStyle = {
            width: size,
            height: size,
            left: this.state.position,
            top: this.state.position,
            display: this.state.visible ? 'block' : 'none'
        };

        const classes = ['Window'];
        return (
            <div style={windowStyle} className={classes}>
                <div className="TopBar">
                    <div className="Title">{this.props.instance.title}</div>
                    <div className="ActionButtons">
                        <div onClick={this.close} className="barButton" id="X"> </div>
                        <div className="barButton" id="M"> </div>
                        <div onClick={this.changeSize} className="barButton"id="FS"> </div>
                    </div>
                </div>
                <div className="WindowContent">
                    {this.props.instance.content}
                </div>
            </div>
        );
    }
}