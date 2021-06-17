import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import itemDetailContainerStyles from './ItemDetailContainerStyles'
import ItemDetail from './components/ItemDetail/ItemDetail';

const itemData = {
    result: {
        id: "1",
        title: "Laptop",
        img: "../assets/laptop.png",
        description: "Laptop tamaño 15.6 pulgadas",
        price: "$450.00",
        stock: "8",
    }
}

const useStyles = makeStyles(theme => itemDetailContainerStyles(theme))

const ItemDetailContainer = () => {
    const classes = useStyles();
    const [itemInfo, setItemInfo] = useState(undefined);

    const getItem = () => {
        const itemsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemData)
            }, 2000);
        })

        itemsPromise.then((data)=> {
            setItemInfo(data.result)
        })
    }

    const addItemToCart = (qty) => {

        Number(qty) === 1 
        ? alert(`Se añadió ${qty} item al carrito!`)
        : alert(`Se añadieron ${qty} items al carrito!`);  

    }

    useEffect(()=> {

        getItem();
        
    }, [])

    return (
        <Container className={classes.root}>
            {
                itemInfo ?
                    <ItemDetail 
                        onAdd = {addItemToCart}    
                        {...itemInfo} 
                    /> :
                    <section className={classes.progressContainer}>
                        <CircularProgress />
                    </section>
            }
        </Container>
    )
}

export default ItemDetailContainer
