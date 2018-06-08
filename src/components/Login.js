import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username: "",
            password: "",
            isLoggedIn: false
        }
    }

    onClickHandle = () => {
        
        axios.post("http://localhost:8080/login", 
            {"username": this.state.username, 
            "password": this.state.password}, 
            {"content-type": "application/json"}).then(response => {
                localStorage.setItem('blog-jwt', response.data)
                this.setState({
                    isLoggedIn: true
                })
            }).catch(err=>{
                console.log(err)
            })
    }

    onUsernameChange = (e, {value}) => {
        this.setState({
            username: value
        }, ()=>console.log("hello", this.state))
    }

    onPasswordChange = (e, {value}) => {
        this.setState({
            password: value
        }, ()=>console.log("hello", this.state))
    }

    render(){
        if(this.state.isLoggedIn){
            return (<Redirect to="/admin"/>)
        }else{
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
                        <Form onSubmit={this.onClickHandle}>
                            <Form.Field>
                                <label>Username</label>
                                <Input value={this.state.username} onChange={this.onUsernameChange} placeholder='Username' />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Input type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder='Password'/>
                            </Form.Field>
                            <Button type="submit">Log in</Button>
                        </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
        }
    }
}