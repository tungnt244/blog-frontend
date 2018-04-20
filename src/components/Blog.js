import React from 'react';
import axios from 'axios';
import {GET_LIST_ARTICALS_AT_PAGE} from '../configs/apiConfig';
import ArticleSummary from './ArticleSummary.js';
import {Pagination} from 'semantic-ui-react';

export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state={
            articleList :[],
            activePage: 2,
        }
    }

    getListArticle(){
        axios.get(GET_LIST_ARTICALS_AT_PAGE, {
            params: {
                page: this.state.activePage
            }
        }
        ).then(response => {
            let resultArticles = [];
            let articalList = response.data.data
            for (let indArticle in articalList){
                let {title, content} = articalList[indArticle]
                resultArticles.push({"title": title, "content": content})
            }
            this.setState({
                articleList: resultArticles
            })
        })
    }

    componentDidMount(){
        this.getListArticle()
    }

    renderSummary = () => {
        let listArticle = this.state.articleList;
        let listSummary = []
        for (let indArticle in listArticle){
            let tempArticle = listArticle[indArticle]
            listSummary.push(<ArticleSummary key={indArticle} title={tempArticle.title} content={tempArticle.content}/>)
        } 
        return listSummary
    }

    onHandlePageChange = (e,{activePage}) => {
        this.setState({
            activePage: activePage
        },()=>this.getListArticle())
    }

    render(){
        return(
            <div>
                <Pagination totalPages={10} activePage={this.state.activePage} onPageChange={this.onHandlePageChange} />
                {this.renderSummary()}
            </div>
        )
    }
}