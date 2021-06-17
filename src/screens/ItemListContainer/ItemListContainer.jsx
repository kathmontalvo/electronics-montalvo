import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';
import ItemList from './components/ItemList/ItemList';
import Container from '@material-ui/core/Container'

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

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
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
        <Container className={classes.container}>
            <ItemList itemsList={itemsList} />
        </Container>
    )
}

export default ItemListContainer
