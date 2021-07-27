/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import { Button, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import CartCardStyles from './CartCardStyles';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => CartCardStyles(theme))

const CartCard = (props) => {

    const { item, qty, onRemove } = props;
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

                    <Typography variant="body1">
                        ${item.price}
                    </Typography>
                <Typography variant="subtitle2" color="initial">
                    Cantidad: {qty}
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<Delete />}
                    className={classes.secondaryButton}
                    onClick={ () => onRemove(item.id) }
                >
                    Eliminar producto
                </Button>
                </CardContent>
            </div>
        </Card>
    )
}

export default CartCard
