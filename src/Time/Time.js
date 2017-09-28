import React from 'react';
import './Time.css';

export class Time extends React.Component {
    constructor(props){
        super(props);

        const currentTime = new Date();
        this.state = {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            ampm : currentTime.getHours() >= 12 ? 'pm' : 'am'
        };
        this.setTimer();
    }

    setTimer(){
        setTimeout(this.updateClock.bind(this), 10000)
    }

    updateClock(){
        const currentTime = new Date();
        this.setState({
            hours: currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            ampm : currentTime.getHours() >= 12 ? 'pm' : 'am'
        }, this.setTimer);
    }

    render() {
        return (
            <div  className="Time">
                <p>{`${this.state.hours}:${this.state.minutes <= 9 ? '0' : ''}${this.state.minutes}${this.state.ampm}`}</p>
            </div>
        );
    }

}
