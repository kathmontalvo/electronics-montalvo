import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';
import ItemCount from '../ItemCount/ItemCount'

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
    const classes = useStyles();

    const addItem = (qty) => {

        Number(qty) === 1 
        ? alert(`Se añadió ${qty} item al carrito!`)
        : alert(`Se añadieron ${qty} items al carrito!`);  

    }

    return (
        <div className={classes.container}>
            <ItemCount stock="8" initial="1" onAdd={addItem}/>
        </div>
    )
}

export default ItemListContainer
