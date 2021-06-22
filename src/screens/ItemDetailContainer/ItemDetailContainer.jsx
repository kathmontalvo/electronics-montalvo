import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import itemDetailContainerStyles from './ItemDetailContainerStyles'
import ItemDetail from './components/ItemDetail/ItemDetail';
import products from '../../services/service'

const useStyles = makeStyles(theme => itemDetailContainerStyles(theme))

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const classes = useStyles();
    const [itemInfo, setItemInfo] = useState(undefined);

    const getItem = () => {
        const itemsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productData = products.filter(product => product.id == itemId)
                const [ data ] = productData;
                resolve(data)
            }, 2000);
        })

        itemsPromise.then((data)=> {
            setItemInfo(data)
        })
    }

    useEffect(()=> {

        getItem();
        
    }, [])

    return (
        <Container className={classes.root}>
            {
                itemInfo 
                    ?
                    <ItemDetail {...itemInfo}/> 
                    :
                    <section className={classes.progressContainer}>
                        <CircularProgress />
                    </section>
            }
        </Container>
    )
}

export default ItemDetailContainer
