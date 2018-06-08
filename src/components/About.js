import React from 'react'

export default class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="masthead" style={{backgroundImage: 'url(/static/img/about-bg.jpg)'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                        <h1>About Me</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </header>

                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <p>Name: Nguyễn Thanh Tùng</p>
                    <p>Birth: 24/04/1996</p>
                    <p>Job: Developer</p>
                    <p>Key Skills:</p>
                    <p>· Language: Strong knowledge of Java and ReactJs, knowledge of Golang</p>
                    <p>· Database: MySQL, PostgreSQL, MongoDB</p>
                    <p>· Knowledge of fundamental Algorithm and Data Structure</p>
                    <p>· Amazon S3</p>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}