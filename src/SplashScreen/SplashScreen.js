import React from 'react';
import './SplashScreen.css';

export class SplashScreen extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible : true
        };

        this.setTimer()
    }

    hide(){
        this.setState({
            visible: false
        });
    }

    setTimer(){
        setTimeout(this.hide.bind(this), 2000);
    }


    render(){

        let splashScreenClasses = ["SplashScreen"];

        if(!this.state.visible){
            splashScreenClasses.push('hide');
        }

        return(
            <div className={splashScreenClasses}>

            </div>
        );
    }
}