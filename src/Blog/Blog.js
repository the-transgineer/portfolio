import React from 'react';
import './Blog.css';
import request from 'request';
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
        request.get('https://transgineering-blog.herokuapp.com/api/articles', (err,res,body) => {
            const data = JSON.parse(body);
            const articles = data.map(item => item);
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
                    {this.state.articles.map((item, index) => {
                        return <a key={index} target="_blank" href={`https://transgineering-blog.herokuapp.com/post/${item._id}`}><li>{item.title}</li></a>
                    })}
                </div>
            </div>
        );
    }
}