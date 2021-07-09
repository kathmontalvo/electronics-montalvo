import React, { useContext, useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

import CartContainerStyles from './CartContainerSyles'
import { CartContext } from '../../Context/CartContext';
import CartItems from './components/CartItems/CartItems';
import OrderForm from './components/OrderForm/OrderForm';

import { database } from '../../Firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const useStyles = makeStyles(theme => CartContainerStyles(theme))

const CartContainer = () => {
    const classes = useStyles();

    const [products, setProducts] = useState([]);
    const [productsQty, setProductsQty] = useState(0)
    const [productsPrice, setProductsPrice] = useState(0)

    const { items, removeItem, clear } = useContext(CartContext);

    const updateData = (items, orderData) => {

        const products = items.sort((a,b) => {
            const prev = a.item.id;
            const next = b.item.id
            if(next>prev) return -1;
            if(prev>next) return 1;
            return 0;
        })
        console.log(products);
        const itemsToUpdate = database.collection("items")
        .where(firebase.firestore.FieldPath.documentId(), 'in', products.map(i => i.item.id))
        
        itemsToUpdate.get().then((querySnapshot) => {

            const batch = database.batch();
            const outOfStock = [];
    
            querySnapshot.docs.forEach((docSnapshot, idx) => {

                const docsData = docSnapshot.data()
                console.log(docsData, products[idx]);

                if(docsData.stock >= products[idx].qty) {
                    batch.update(docSnapshot.ref, { stock: docsData.stock - products[idx].qty});
                } else {
                    outOfStock.push({...docsData, id: docSnapshot.id});
                    console.log(outOfStock);
                }
            })
            if(outOfStock.length === 0) {
                const orders = database.collection("orders")

                orders.add(orderData).then(({id}) => {
                    console.log('nueva orden creada');
                    console.log(id);
                })
            }
        })

    }

    const newOrder = (e) => {
        e.preventDefault();

        const userInfo = {
            name: e.target.elements.name.value,
            phone: e.target.elements.phone.value,
            email: e.target.elements.email.value,
        }

        const newItems = products.map((product) => {
            const { item, qty } = product
            return {
                item: {
                    id: item.id,
                    title: item.title,
                    price: item.price
                },
                qty
            }
        })

        const orderData = {
            buyer: userInfo,
            items: newItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: productsPrice
        }

        updateData(products, orderData);

    }

    useEffect(() => {
        setProducts(items)
        console.log(items);
    }, [items])
    
    
    return (
        <Container className={classes.root}>
            {
                products.length >= 0 ? 
                <Grid container>
                    <Grid container item xs={12} lg={7}>
                        <CartItems 
                            products={products} 
                            onRemove={removeItem} 
                            clear={clear}
                            productsQty={productsQty}
                            setProductsQty={setProductsQty}
                            productsPrice={productsPrice}
                            setProductsPrice={setProductsPrice}
                        /> 
                    </Grid> 
                    <Grid container item xs={12} lg={5}>
                        <OrderForm newOrder={newOrder} />
                    </Grid>
                </Grid> :
                <section className={classes.progressContainer}>
                    <CircularProgress />
                </section>            
            }
        </Container>
    )
}

export default CartContainer
