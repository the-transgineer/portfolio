import React from 'react';
import './Window.css';


export class Window extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            maximised: false,
            position: '25%'
        };

    }

    minimize = () => {
        this.props.controller.toggleMax(this.props.name);
    };

    close = () => {
        this.props.controller.toggleVisible(this.props.name);
          
        this.props.controller.toggleMax(this.props.name);
    };

    changeSize = () => {
        this.setState({
            position: this.state.maximised ? '25%' : '0%',
            maximised: !this.state.maximised
        })
    };




    render(){
        let Program = this.props.controller.getOne(this.props.name);
        let size = this.state.maximised ? '900px' : '400px';
        let windowStyle = {
            width: size,
            height: this.state.maximised ? '92.5%' : '400px',
            left: this.state.position,
            top: this.state.position,
            display: Program.maximised ? 'block' : 'none',
            backgroundColor: !this.props.controller.getOne(this.props.name).fileBrowser ? '#BEBEBE' : 'aliceblue'
        };

        let image = {
            backgroundImage: `url(/Icons/${this.props.controller.getOne(this.props.name).image}.ico)`
        };
        const classes = ['Window'];
        return (
            <div style={windowStyle} className={classes}>
                <div className="TopBar">
                    <div style={image} className="windowIcon"> </div>
                    <div className="Title">{this.props.name}</div>
                    <div className="ActionButtons">
                        <div onClick={this.minimize} className="barButton" id="M">_</div>
                        <div onClick={this.changeSize} className="barButton"id="FS">□</div>
                        <div onClick={this.close} className="barButton" id="X">⨯</div>
                    </div>
                </div>
                <div className="toolBar">
                    <div className="Tool">File</div>
                    <div className="Tool">Edit</div>
                    <div className="Tool">View</div>
                    <div className="Tool">Help</div>
                </div>
                <div className="WindowContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}