import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import itemCountSyles from './ItemCountStyles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Typography from '@material-ui/core/Typography';
import { AddShoppingCart, Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => itemCountSyles(theme))

const ItemCount = (props) => {

    const classes = useStyles();

    const { stock, initial, onAdd, onRemove, currentCart=false } = props;
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        counter < stock && setCounter(counter + 1);
    };
    const decrement = () => {
        counter > 0 && setCounter(counter - 1);
    };

    useEffect(() => {
        counter <= 0 && onRemove()
    }, [counter])

    useEffect(() => {
        currentCart && setCounter(initial)
    }, [initial])

    return (
        <Card className={classes.card} variant="outlined">
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
            {
                !currentCart ?
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
                </CardActions> :
                <CardActions className={classes.cardButtons}>
                    <Button
                        variant="outlined"
                        startIcon={<Delete />}
                        className={classes.secondaryButton}
                        disabled={ counter === 0 ? true : false}
                        onClick={ onRemove }
                    >
                        Eliminar producto
                    </Button>
                </CardActions> 
            }
        </Card>
    )
}

export default ItemCount
