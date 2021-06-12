import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemListContainerStyles } from './ItemListContainerStyles';
import ItemList from './components/ItemList/ItemList';

const useStyles = makeStyles((theme) => itemListContainerStyles(theme))

const ItemListContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
