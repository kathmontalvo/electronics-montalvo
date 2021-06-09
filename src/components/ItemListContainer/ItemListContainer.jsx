import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
    const classes = useStyles();
    const { greeting } = props;

    return (
        <div className={classes.container}>
            <section>
                <p>{greeting}</p>
                <button>Click!</button>
            </section>
        </div>
    )
}

export default ItemListContainer
