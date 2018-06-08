import React from 'react';
import { Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class MenuBar extends React.Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/home">Tungnt</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="navbar-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}