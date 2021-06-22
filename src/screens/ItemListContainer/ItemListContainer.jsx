import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';
import ItemList from './components/ItemList/ItemList';
import Container from '@material-ui/core/Container'
import products from '../../services/service'

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
    
    const { categoryId } = useParams();
    const classes = useStyles();

    const [itemsList, setItemsList] = useState([]);
    const [filter, setFilter] = useState(undefined);

    const filterData = (allItems) => {
        const filteredData = allItems.filter(item => item.category == categoryId);
        const data = filter !== undefined ? filteredData : allItems;
        return data
    }

    const getList = () => {
        const itemsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })

        
        itemsPromise.then((items)=> {
            setItemsList(items)
        })
    }

    useEffect(()=> {
        getList();
    }, [])

    useEffect(()=> {
        setFilter(categoryId);
    }, [categoryId])

    return (
        <Container className={classes.container}>
            <ItemList itemsList={filterData(itemsList)} />
        </Container>
    )
}

export default ItemListContainer
