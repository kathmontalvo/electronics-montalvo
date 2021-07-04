import React, { useContext, useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

import CartContainerStyles from './CartContainerSyles'
import { CartContext } from '../../Context/CartContext';
import CartItems from './components/CartItems/CartItems';

const useStyles = makeStyles(theme => CartContainerStyles(theme))

const CartContainer = () => {
    const classes = useStyles();

    const [products, setProducts] = useState([]);
    const { items, removeItem, clear } = useContext(CartContext);

    useEffect(() => {
        setProducts(items)
        console.log(items);
    }, [items])
    
    
    return (
        <Container className={classes.root}>
            {
                products.length >= 0 ? 
                <CartItems 
                    products={products} 
                    onRemove={removeItem} 
                    clear={clear}
                /> :
                <section className={classes.progressContainer}>
                    <CircularProgress />
                </section>            
            }
        </Container>
    )
}

export default CartContainer
