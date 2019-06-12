import React from "react";
import './ToolTip.css';
export default class ToolTip extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visible: false
        };
    }

    handleClick = () => {
        this.setState({visible: false})
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({visible: true});
        }, 3000)
    }
    render() {
        let style = {};
        if (!this.state.visible) {
            style.display = "none";
        }
        return (
            <div onClick={this.handleClick} style={style} className="ToolTip">
                <p>Try Right Clicking Desktop and Icons!</p>
            </div>
        )
    }
}