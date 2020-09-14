import React, { Component } from 'react';
import Api from '../../services/api';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/index'


import './styles.css'


export default class Main extends Component{

//this is an object used to store information of the data read from Api
state = {
    products: [],
    productInfo: [],
    page: 1,
}
    componentDidMount(){
        this.loadProducts(); 
    }

    loadProducts = async (page = 1) => {

        const response = await Api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        //Inserting the documents from api inside the object products
        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        
        const { page, productInfo } = this.state;
        
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    loadClickedPage = pageNumber => {

        this.loadProducts(pageNumber);
    }

    generatePageArray = () => {

        const { productInfo } = this.state;

        let page = [];

        for(let i = 1; i <= productInfo.pages; i=i+1)
        {
            page.push(i);
        }
        return(page);

    }
    //This method keep listen the state object, every single change made on state it response to it

    render(){

        const { products, page, productInfo } = this.state;

        const pages  = this.generatePageArray();

        return (
            <>
                <Header/>
                <div className="product-list">
                    {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>

                            <Link to={`/products/${product._id}`}> Entry </Link>
                        </article>
                    ))}
                    <div className = 'actions'>
                        <button disabled={page === 1} onClick={this.prevPage}>Previous</button>
                        <div className = 'pages'>
                        {pages.map(item => (
                                <button disabled={page === item} onClick={() => this.loadClickedPage(item)}> {item} </button>

                            ))}
                        </div>
                        <button disabled={page === productInfo.pages} onClick={this.nextPage}>Next</button>
                    </div>      
                </div>
            </>
           
        )
    }
}   