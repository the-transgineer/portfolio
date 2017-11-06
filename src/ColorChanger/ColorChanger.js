import  React from 'react';

export class ColorChanger extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick = e => {
        this.props.controller.changeColor(e.target)
    };


    render(){
        return (
            <div>Color Changer</div>
        )
    }
}