import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {GET_LIST_POST_SUMMARY, GET_TOTAL_NUMBER_POST} from '../configs/apiConfig';
import {Pagination} from 'semantic-ui-react';

export default class Home extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            totalPost: 0,
            posts: [{"postTitle": "", "postSubTitle": "", "createdDate": ""}]
        }
    }

    getPostSummaryByPage = () => {
        axios.get(GET_LIST_POST_SUMMARY+"/"+this.state.page).then(reponse=>{
            this.setState({
                posts: reponse.data
            })}).catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getPostSummaryByPage()
        axios.get(GET_TOTAL_NUMBER_POST).then(response=>{
            this.setState({
                totalPost: response.data
            })
        })
    }

    renderSingleSummaryPost = (id, postTitle, postSubTitle, createdDate) => {
        return (
            <React.Fragment>
                <div className="post-preview" >
                    <Link to={`/post/${id}`}>
                    <h2 className="post-title">
                        {postTitle}
                    </h2>
                    <h3 className="post-subtitle">
                        {postSubTitle}
                    </h3>
                    </Link>
                    <p className="post-meta">{createdDate}</p>
                </div>
                <hr/>
            </React.Fragment>
        )
    }

    renderCurrentPost = ()=>{
        let list = this.state.posts.map((post) => {
            return this.renderSingleSummaryPost(post.id, post.postTitle, post.postSubTitle, post.createdDate)
        })
        return(
            <React.Fragment>
                {list}
            </React.Fragment>
        )
    }

    changePage = (e, {activePage}) => {
        this.setState({
            page: activePage
        }, ()=>{
            console.log(this.state)
            this.getPostSummaryByPage()})
    }

    render(){
        return(
            <React.Fragment>
                <header className="masthead" style={{backgroundImage: "url(/img/home-bg.jpg)"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                            <h1>Tungnt blog</h1>
                            <span className="subheading">A Traditional Way To Express</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {this.renderCurrentPost()}
                            <div className="clearfix">
                                <Pagination
                                    activePage={this.state.page}
                                    pointing
                                    secondary
                                    totalPages={parseInt((this.state.totalPost/4)+1)}
                                    onPageChange={this.changePage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}