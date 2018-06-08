import React from 'react'
import  {Editor} from '@tinymce/tinymce-react'
import { Button, Input, Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class MEditor extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            content: "<p>This is the initial content of the editor</p>",
            title: "",
            subTitle: ""
        }
    }

    handleEditorChange = (e) => {
        this.setState({
            content: e.target.getContent()
        })
    }

    handleTitleChange = (e, {value}) => {
        this.setState({
            title: value
        })
    }

    handleSubTitleChange = (e, {value}) => {
        this.setState({
            subTitle: value
        })
    }

    handleSaveClick = (e) => {

    }

    render(){
        return (
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
            <br/>
            <div className="container">
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <Input value={this.state.title} onChange={this.handleTitleChange} placeholder='Title' />
                </Form.Field>
                <Form.Field>
                    <label>Sub Title</label>
                    <Input value={this.state.subTitle} onChange={this.handleSubTitleChange} placeholder='Sub Title' />
                </Form.Field>
            </Form>
            <br/>
            <Editor
              initialValue={this.state.content}
              init={{
                plugins: 'link image code',
                height: 500,
                menubar: false,
                plugins:[
                    'advlist autolink lists link image charmap print preview anchor textcolor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table contextmenu paste code help wordcount'
                ],
                toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | submitButton',
            }}
              onChange={this.handleEditorChange}
            />
            <br/>
            <Button color="green" onClick={this.handleSaveClick}>Save</Button>
            <Link to="/home"><Button color="red" >Cancel</Button></Link>
            </div>
            </React.Fragment>
        );
    }
}