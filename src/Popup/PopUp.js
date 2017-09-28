import React from 'react';

export class PopUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible: true
        }
    }

    close = () => {
        this.setState({
            visible: false
        })
    };

    render(){
        const popUpStyle = {
            display: this.state.visible ? 'block' : 'none',
            height: '100px',
            width: '300px',
            backgroundColor: '#BFBFBF',
            position: 'absolute',
            left: '35%',
            top: '25%',
            textAlign: 'center'
        };
        const classes = ["Window"];
        return(
            <div style={popUpStyle} className={classes}>
                <div className="TopBar">
                    <div className="windowIcon"> </div>
                    <div className="Title">{this.props.name}</div>
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
