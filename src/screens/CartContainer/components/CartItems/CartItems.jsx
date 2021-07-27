/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { DeleteForever } from '@material-ui/icons';
import CartCard from '../CartCard/CartCard';
import CartItemStyles from './CartItemStyles';

const useStyles = makeStyles(theme => CartItemStyles(theme))

const CartItem = (props) => {

    const { products, onRemove, clear, productsQty, setProductsQty, productsPrice, setProductsPrice } = props;
    const [productsList, setProductsList] = useState(undefined)

    const classes = useStyles()

    const getNewProductsQty = (items) => {
        const totalQty = items.map(item => item.qty).reduce((prev, next) => prev + next);
        setProductsQty(totalQty)
    }

    const getNewProductsPrice = (items) => {
        const totalPrice = items.map(item => item.item.price * item.qty).reduce((prev, next) => prev + next);
        setProductsPrice(totalPrice)
    }

    const setNewData = (products) => {
        products.length === 0 ? setProductsQty(0) : getNewProductsQty(products)
        products.length === 0 ? setProductsPrice(0) : getNewProductsPrice(products)
        setProductsList(products)
    }

    useEffect(() => {
        products.length >= 0 && setNewData(products)
    }, [products])

    return (
        productsList ?
        <div className={classes.cardsContainer}>
           { productsList.map((product) => <CartCard 
                        {...product} 
                        onRemove = {onRemove}
                    />
            ) }
            <Button
                variant="outlined"
                startIcon={<DeleteForever />}
                onClick={() => clear() }
            >
                Eliminar todos los productos
            </Button>
            Total de items: { productsQty }
            Precio total: { productsPrice }
        </div> :
        <section className={classes.progressContainer}>
            <CircularProgress />
        </section>
    )
}

export default CartItem
