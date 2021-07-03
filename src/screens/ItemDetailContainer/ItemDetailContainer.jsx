import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import itemDetailContainerStyles from './ItemDetailContainerStyles'
import ItemDetail from './components/ItemDetail/ItemDetail';
import { database } from '../../Firebase/firebase';

const useStyles = makeStyles(theme => itemDetailContainerStyles(theme))

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const classes = useStyles();
    const [itemInfo, setItemInfo] = useState(undefined);

    const getItem = () => {
        const itemDoc = database.collection("items").doc(itemId);

        itemDoc.get().then((doc)=> {
            if(!doc.exists) {
                console.log('Item no existe.');
            }
            setItemInfo({
                id: doc.id,
                ...doc.data()
            })
        }).catch((error) => {
            console.log(`Error: ${error}`);
        }).finally(() => {
            // setear loader a false
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
