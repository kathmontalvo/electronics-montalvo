/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';
import ItemList from './components/ItemList/ItemList';
import Container from '@material-ui/core/Container'
import { database } from '../../Firebase/firebase';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
    
    const { categoryId } = useParams();
    const classes = useStyles();

    const [itemsList, setItemsList] = useState([]);
    const [loader, setLoader] = useState(true)

    const filterData = (filter) => {
        const filteredData = database.collection("items").where("category", "==", categoryId)
        filter && filteredData.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                setItemsList([])
            }
            const data = querySnapshot.docs.map(doc => { 
                const item = {
                    id: doc.id, 
                    ...doc.data()
                }
                return item
            });
            setItemsList(data)
        })
    }

    const getList = () => {

        const itemsCollection = database.collection("items");
        itemsCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                setItemsList([])
            }
            const data = querySnapshot.docs.map(doc => { 
                const item = {
                    id: doc.id, 
                    ...doc.data()
                }
                return item
            });
            setItemsList(data)
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            setLoader(false)
        })
    }

    useEffect(()=> {
        getList();
    }, [])

    useEffect(()=> {
        categoryId ? filterData(categoryId) : getList()
    }, [categoryId])

    return (
        <Container className={classes.container}>
            {loader ?
                <section className={classes.progressContainer}>
                    <CircularProgress />
                </section>
            : 
                <ItemList itemsList={itemsList} /> 
            }
        </Container>
    )
}

export default ItemListContainer
