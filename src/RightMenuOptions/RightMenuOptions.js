import React from 'react';
import './RightMenuOptions.css';

export class RightMenuOptions extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input: ''
        }
    }

    handleEvent = e => {
      this.setState({
          input: e.target.value
      })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.controller.rename(this.props.name, this.state.input);
        this.props.controller.Popups = [];
    };
    handleClick = e => {
        let input = e.target.textContent;
        switch(input){
            case 'Open':{
                this.props.controller.toggleVisible(this.props.name);
                this.props.controller.toggleMax(this.props.name);
                break;
            }

            case 'Rename':{
                this.props.controller.addPop('Change Name',
                    <div>
                        <form>
                            <label htmlFor="name">New Name</label>
                            <input onChange={this.handleEvent} type="text" name="name"/>
                            <button type="submit" onClick={this.handleSubmit} className="button">Submit</button>
                        </form>
                    </div>
                    );
                break;
            }

            case 'Delete':{
                this.props.controller.delete(this.props.name);
                break;
            }

            default: {
                this.props.controller.toggleVisible(input);
                this.props.controller.toggleMax(input);
            }
        }
    };

    render(){
        return (
            <li onClick={this.handleClick} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} className="RightMenuOptions">
                {this.props.title}
            </li>
        );
    }
}