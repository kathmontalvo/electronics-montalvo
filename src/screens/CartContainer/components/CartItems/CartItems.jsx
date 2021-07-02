import React, { useEffect, useState } from 'react'
import CartCard from '../CartCard/CartCard';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import CartItemStyles from './CartItemStyles';

const useStyles = makeStyles(theme => CartItemStyles(theme))

const CartItem = (props) => {

    const { products } = props;
    const [productsList, setProductsList] = useState(undefined)
    const [productsQty, setProductsQty] = useState(0)
    const [productsPrice, setProductsPrice] = useState(0)

    const classes = useStyles()

    const totalQty = (items) => items.reduce((prev, next) => prev.qty + next.qty);
    const totalPrice = (items) => items.reduce((prev, next) => +prev.item.price*prev.qty + +next.item.price*next.qty);
    
    const getNewProductsQty = (products) => {
        products.length === 1 ?
        setProductsQty(products[0].qty) :
        setProductsQty(totalQty(products))
    }

    const getNewProductsPrice = (products) => {
        products.length === 1 ?
        setProductsPrice(products[0].item.price) :
        setProductsPrice(totalPrice(products))
    }

    const setNewData = (products) => {
        getNewProductsQty(products)
        getNewProductsPrice(products)
        setProductsList(products)
    }

    useEffect(() => {
        products.length > 0 && setNewData(products)
    }, [products])

    return (
        productsList ?
        <div className={classes.cardsContainer}>
           { productsList.map((product) => 
                    <CartCard {...product} />
            ) }
            Total de items: { productsQty }
            Precio total: { productsPrice }
        </div> :
        <div>
            No has agregado productos al carrito.
            <Link to="/">
                Regresar a Inicio
            </Link>
        </div>
    )
}

export default CartItem
