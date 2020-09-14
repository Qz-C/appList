import React, { Component } from 'react';
import Header from '../../components/Header/index';
import api from '../../services/api';
import {Redirect} from "react-router-dom"
import './styles.css';

export default class New extends Component {
    state = {
        title: "",
        description: "",
        url: "",
        redirect: false,
        id: "" 
    };

    handleSubmit = event => {

        event.preventDefault();
        api.post('/products',{
            title:this.state.title,
            description:this.state.description,
            url:this.state.url
        }).then(response => {
            console.log(response.data);
            this.setState({ redirect : true, id: response.data._id });
            console.log(this.state);
        })
    }

    handleName = event => {
        this.setState({title: event.target.value})
    }

    handleDescription = event => {
        this.setState({description: event.target.value})
    }

    handleUrl = event => {
        this.setState({url: event.target.value})
    }

    render(){
        return(
            <>
                {this.state.redirect ? <Redirect push to={`/products/${this.state.id}`}/> : null}
                <Header/>
                <form className='product-info' onSubmit={this.handleSubmit}>
                    
                    <h1>Registrate new App</h1>

                    <label for="name">Name: </label>
                    <input id="name"type="text" onChange={this.handleName}></input>
                    
                    <label for="name">Description: </label>
                    <textarea id="Description" onChange={this.handleDescription}></textarea>
                    
                    <label for="url">Url: </label>
                    <input id="url" type="text" onChange={this.handleUrl}></input>
                    
                    <input type="submit"></input>
                
                </form>
            </>
        )
    }
}
