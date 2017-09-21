import React from 'react';
import './Icons.css';
import {Icon} from "../Icon/Icon";
import {Controller} from "../Controller/Contoroller"

export class Icons extends React.Component{
    render(){
        let con = new Controller();
        console.log(con.getOne("my computer"));
        return (
            <ul className="Icons">
                {con.getAll().map( (i, j) => {
                    return <Icon key={j} name={i.name} image={i.image}/>
                })}
            </ul>
        );
    }
}