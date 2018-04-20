import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuBar.js';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Blog from './components/Blog.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tung's blog</h1>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/blog" component={Blog}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
