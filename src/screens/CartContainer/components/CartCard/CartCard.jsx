import React from 'react'
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import CartCardStyles from './CartCardStyles';
import ItemCount from '../../../../components/ItemCount/ItemCount'


const useStyles = makeStyles((theme) => CartCardStyles(theme))

const CartCard = (props) => {

    const { item, qty } = props;
    const classes = useStyles();

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
                </CardContent>
            </div>
            <div className={classes.details}>
                <ItemCount 
                    stock={item.stock} 
                    initial={qty} 
                    currentCart={true} 
                    onAdd={() => console.log('agregar')} 
                    onRemove={() => console.log('delete')}     
                />
            </div>
        </Card>
    )
}

export default CartCard
