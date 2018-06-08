import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Post from './components/Post.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';
import Menu from './components/MenuBar.js';
import Footer from './components/Footer.js';
import Admin from './components/Admin.js';
import MEditor from './components/Editor.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/post/:id" component={Post}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/admin" component={Admin}/>
          <Route path="/admin/editor" component={MEditor}/>
          <Route component={Home}/>
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
