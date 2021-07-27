import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import Item from '../Item/Item';
import ItemListStyles from './ItemListStyles';

const useStyles = makeStyles((theme) => ItemListStyles(theme));

const ItemList = (props) => {

    const classes = useStyles();
    const { itemsList } = props

    return (
        <div className={classes.itemsListContainer}>
            <section className={classes.sectionTitle}>
                <Typography variant="h5" component="h5">
                    Items disponibles:
                </Typography>
            </section>
            {
                itemsList.length > 0 ?
                    <Grid container spacing={3}>
                        {
                            itemsList.map((item, i)=> (
                                <Item
                                    key= { i }
                                    {...item}
                                />
                            ))
                        }
                    </Grid> :
                    <div>
                        No hay productos disponibles
                    </div>
            }
        </div>
    )
}

export default ItemList
