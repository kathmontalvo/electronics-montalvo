import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import itemCountSyles from './ItemCountStyles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardMedia } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import laptopImg from '../../assets/laptop.png'

const useStyles = makeStyles(theme => itemCountSyles(theme))

const ItemCount = (props) => {

    const classes = useStyles();

    const { stock, initial, onAdd } = props;
    const [counter, setCounter] = useState(Number(initial));

    const increment = () => {
        counter < stock && setCounter(counter + 1);
    };
    const decrement = () => {
        counter > 0 && setCounter(counter - 1);
    };

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia 
                    component="img"
                    title="laptop"
                    alt="laptop 15.6 pulgadas"
                    image={laptopImg}
                />
                <CardContent>
                    <Typography variant="h5">
                        Laptop 15.6"
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Este producto no tiene descripción.
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButtons}>
                    <IconButton 
                        onClick={ decrement } 
                        disabled={ counter === 0 ? true : false}
                        className={classes.buttonIcon}
                    >
                        <RemoveCircleIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        {counter}
                    </Typography>
                    <IconButton 
                        onClick={ increment } 
                        disabled={ counter >= stock ? true : false}
                        className={classes.buttonIcon}
                    >
                        <AddCircleIcon/>
                    </IconButton>
                </CardActions>
                <CardActions className={classes.cardButtons}>
                    <Button
                        variant="contained"
                        startIcon={<AddShoppingCart />}
                        className={classes.mainButton}
                        disabled={ counter === 0 ? true : false}
                        onClick={ () => onAdd(counter) }
                    >
                        Agregar al carrito
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ItemCount
