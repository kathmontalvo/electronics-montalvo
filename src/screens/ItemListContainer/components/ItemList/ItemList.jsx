import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'

import Item from '../Item/Item';
import ItemListStyles from './ItemListStyles';

const items = [
    {
        id: "1",
        title: "Laptop",
        img: "../assets/laptop.png",
        description: "Laptop tamaño 15.6 pulgadas",
        price: "$450.00"
    }, 
    {
        id: "2",
        title: "Celular",
        img: "../assets/celular.png",
        description: "Smartphone año 2020",
        price: "$250.00"
    }, 
    {
        id: "3",
        title: "Cargador",
        img: "../assets/cargador.png",
        description: "Cargador tipo C",
        price: "$20.00"
    }, 
    {
        id: "4",
        title: "Audífonos",
        img: "../assets/audifonos.png",
        description: "Audífonos por bluetooth",
        price: "$50.00"
    }
]

const useStyles = makeStyles((theme) => ItemListStyles(theme))

const ItemList = () => {

    const classes = useStyles();

    const [itemsList, setItemsList] = useState([]);

    const getList = () => {
        const itemsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000);
        })

        itemsPromise.then((items)=> {
            setItemsList(items)
        })
    }

    useEffect(()=> {
        getList();
    }, [])

    return (
        <div className={classes.itemsListContainer}>
            <section className={classes.sectionTitle}>
                <Typography variant="h5" component="h5">
                    Items disponibles:
                </Typography>
            </section>
            {
                itemsList.length ?
                    <Grid container spacing={3}>
                        {
                            itemsList.map((item)=> (
                                <Item
                                    key= { item.id }
                                    title= { item.title }
                                    description={ item.description }
                                    image={ item.img }
                                    price={ item.price }
                                />
                            ))
                        }
                    </Grid> :
                    <section className={classes.progressContainer}>
                        <CircularProgress />
                    </section>
            }
        </div>
    )
}

export default ItemList
