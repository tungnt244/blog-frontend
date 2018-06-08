import React from 'react'
import axios from 'axios'
import {GET_POST_BY_ID} from '../configs/apiConfig.js'
import ReactHtmlParser from 'react-html-parser'

export default class Post extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            post:{
                id:this.props.match.params.id || 34,
                title: "",
                subTitle: "",
                content: "",
                createdDate: ""
            }
        }
    }

    componentDidMount(){
        axios.get(GET_POST_BY_ID+"/"+this.state.post.id).then(response=>{
            this.setState(
                {
                    "post":response.data
                }
            ,()=>console.log(response))
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <React.Fragment>
                <header className="masthead" style={{backgroundImage: 'url(/static/img/post-bg.jpg)'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-heading">
                        <h1>{this.state.post.title}</h1>
                        <h2 className="subheading">{this.state.post.subTitle}</h2>
                        <span className="meta">
                            on {this.state.post.createdDate}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </header>

                <article>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {ReactHtmlParser(this.state.post.content)}
                    </div>
                    </div>
                </div>
                </article>
            </React.Fragment>
        )
    }
}