import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';
import ItemList from './components/ItemList/ItemList';
import Container from '@material-ui/core/Container'
import { database } from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
    
    const { categoryId } = useParams();
    const classes = useStyles();

    const [itemsList, setItemsList] = useState([]);

    const filterData = (filter) => {
        console.log(filter);
        const filteredData = database.collection("items").where("category", "==", categoryId)
        filter && filteredData.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No hay resultados.');
            }
            const data = querySnapshot.docs.map(doc => { 
                const item = {
                    id: doc.id, 
                    ...doc.data()
                }
                console.log(item);
                return item
            });
            setItemsList(data)
        })
    }

    const getList = () => {

        const itemsCollection = database.collection("items");
        itemsCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No hay resultados.');
            }
            const data = querySnapshot.docs.map(doc => { 
                const item = {
                    id: doc.id, 
                    ...doc.data()
                }
                console.log(item);
                return item
            });
            setItemsList(data)
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            // podría setear el loading a false, iniciando en true
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
            { itemsList.length > 0 ?
                <ItemList itemsList={itemsList} /> :
                <div>
                    No hay productos disponibles
                </div>
            }
        </Container>
    )
}

export default ItemListContainer
