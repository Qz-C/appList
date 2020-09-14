import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'

import Product from "./pages/products"

import New from "./pages/new/index"

const Routes = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/products/:id' component={Product} />
                <Route path='/create' component={New}/>
            </Switch>
    </BrowserRouter>

);

export default Routes;

