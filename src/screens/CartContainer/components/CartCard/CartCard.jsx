import React from 'react'
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import CartCardStyles from './CartCardStyles';
import ItemCount from '../../../../components/ItemCount/ItemCount'
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => CartCardStyles(theme))

const CartCard = (props) => {

    const { item, qty, onRemove } = props;
    const classes = useStyles();

    useEffect(() => {
        console.log(item, qty);
    }, [])

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={item.img}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {item.description}
                    </Typography>
                    <Typography variant="body1">
                        ${item.price}
                    </Typography>
                </CardContent>
            </div>
            <div className={classes.details}>
                <ItemCount 
                    stock={item.stock} 
                    initial={qty} 
                    currentCart={true} 
                    onRemove={() => onRemove(item.id)}     
                />
            </div>
        </Card>
    )
}

export default CartCard
