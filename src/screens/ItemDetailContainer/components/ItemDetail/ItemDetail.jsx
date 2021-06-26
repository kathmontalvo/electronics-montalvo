import React,  { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ItemCount from '../../../../components/ItemCount/ItemCount'
import itemDetailStyles from './ItemDetailStyles';
import ItemConfirmation from '../ItemConfirmation/ItemConfirmation';
import { CartContext } from '../../../../context/CartContext';

const useStyles = makeStyles(theme => itemDetailStyles(theme))

const ItemDetail = (props) => {

    const classes = useStyles();
    const history = useHistory();
    const { items, addItem, removeItem, isInCart } = useContext(CartContext);

    const { id: itemId, img, price, title, description, stock } = props;
    
    const [confirmation, setConfirmation] = useState(false)
    const [initialValue, setInitialValue] = useState("1")


    const addItemToCart = (qty) => {
        alert('Se añadió tu producto al carrito.');
        history.push('/cart')
    }

    const showConfirmation = (qty) => {
        setConfirmation(true);
        setInitialValue(qty);
        
        addItem(props, qty)

    }

    const cancelConfirmation = () => {
        removeItem(itemId);
        setConfirmation(false)
    }

    useEffect(() => {
        console.log('items:', items);
    }, [items])

    return (
        <Grid container spacing={3} className={classes.productContainer}>
            <Grid 
                container
                item 
                xs={12}
                md={6}
                justify="center"
                alignItems="center"
            >
                <img src={img} alt={description} className={classes.productImg} />
            </Grid>
            <Grid container item xs={12} md={6} className={classes.productInfo}>
                <Box className={classes.textContainer}>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                    <Typography variant="h6">
                        {price}
                    </Typography>
                </Box>
                { !confirmation ? 
                    <ItemCount stock={stock} initial={initialValue} onAdd={showConfirmation}/> :
                    <ItemConfirmation addToCart={() => addItemToCart(stock)} cancelShop={cancelConfirmation} />}
            </Grid>
        </Grid>
    )
}

export default ItemDetail
