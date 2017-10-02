import React from 'react';
import './Blog.css';
import axios from 'axios';

export class Blog extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            articles : [],
            display : null,
            back: null,
            forward: null
        }

    }

    componentDidMount() {
        axios.get('http://transgineering-blog.herokuapp.com/api/articles')
            .then(res => {
                const articles = res.data.map(item => item.title);
                this.setState({
                    articles: articles
                });
            })
    }


    render(){
        return (
            <div className="Blog">
                <div className="toolBar">
                    <div className="Tool">←</div>
                    <div className="Tool">→</div>
                    <div className="addressBar">http://wwww.transgineer.com</div>
                </div>
                <div className="content">
                    <div className="blogTitle">The Transgineer</div>
                </div>
            </div>
        );
    }
}