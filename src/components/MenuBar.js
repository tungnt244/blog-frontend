import React from 'react';
import {Input, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class MenuBar extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            activeBar:"home"
        }
    }

    onClickHandle=(e, {name})=>{
        this.setState({
            activeBar: name
        })
    }

    render(){
        return(
            <Menu>
                <Menu.Item as={Link} to="/home" name="home" active={this.state.activeBar === "home"} onClick={this.onClickHandle}/>
                <Menu.Item as={Link} to="/blog" name="blog" active={this.state.activeBar === "blog"} onClick={this.onClickHandle}/>
            </Menu>
        )
    }
}