import React from 'react'
import {Item} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class ArticleSummary extends React.Component{

    render(){
        return(
            <Item.Group>
                <Item.Header as={Link} to="/home">{this.props.title}</Item.Header>
                <Item.Description>
                    {this.props.content}
                </Item.Description>
            </Item.Group>
        )
    }
}