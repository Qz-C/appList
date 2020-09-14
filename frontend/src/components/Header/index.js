import React, { Component } from 'react';

import {FiSearch} from "react-icons/fi"

import {Link} from "react-router-dom";

import api from "../../services/api"
 
import './styles.css';

export default class Header extends Component {

    state = {
        searchResult: [],
        showResult: false
    }

    handleSearch = event => {

        if(event.target.value === "")
        {
            this.setState({showResult: false})
            return;
        }

        api.get(`/search/${event.target.value}`).then(response => {
            this.setState({searchResult : response.data, showResult: true})
        })
    }

    handleBlur = event => {
        this.setState({showResult: false})
    }

    render(){

        const { searchResult, showResult } = this.state;

        return(
            <header id= "main-header">
                <div class="left">
                    <Link id="title" to="/"> AppList </Link>
                    <div id="search-box">
                        <div id="box-preview">
                            <input id="search-input" onChange={this.handleSearch} type="search" placeholder="Search..."/>
                            <div id="results-container">
                                    {showResult ? <div className="content-container">
                                        {searchResult.map(app => (
                                            <Link to={`/products/${app._id}`}>
                                                {app.title}
                                            </Link>
                                        ))}
                                    </div> : null}
                            </div> 
                        </div>
                        <a> <FiSearch size={22}/> </a>
                    </div>
                </div>
                <Link to="/create"> New App </Link>
            </header>
        )
    }
}