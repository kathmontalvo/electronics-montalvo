import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemListContainer from '../screens/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../screens/ItemDetailContainer/ItemDetailContainer'
import CartContainer from '../screens/CartContainer/CartContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <ItemListContainer />
            </Route>
            <Route path="/categorias/:categoryId">
                <ItemListContainer />
            </Route>
            <Route path="/items/:itemId">
                <ItemDetailContainer />
            </Route>
            <Route path="/cart">
                <CartContainer />
            </Route>
        </Switch>
    )
}

export default Router
