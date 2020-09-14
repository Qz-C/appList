import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import Header from '../../components/Header/index';
import { FiTrash2 } from 'react-icons/fi'
import {Redirect} from "react-router-dom"


export default class Product extends Component {
    state = {
        product: {},
        redirect: false
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data});
    }

    handleDelete = () => {
        api.delete(`products/${this.props.match.params.id}`)
            .then(response => {
                this.setState({redirect : true})
            })
    }
    render(){
        const { product } = this.state;

        return(
            <>
                {this.state.redirect ? <Redirect to='/'/> : null} 
                <Header/>
                <div className='product-info'>
                    <div id="tittle">
                        <h1>{product.title}</h1>
                        <FiTrash2 onClick={this.handleDelete} id="trash" size={32} color={"#999"}/>
                    </div>
                    
                    <p>{product.description}</p>
                    <p>
                        <a href={product.url}>{product.url}</a>
                    </p>
                </div>
            </>
        )
    }
}
