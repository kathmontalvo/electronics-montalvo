import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ItemCount from '../../../../components/ItemCount/ItemCount'
import itemDetailStyles from './ItemDetailStyles';

const useStyles = makeStyles(theme => itemDetailStyles(theme))

const ItemDetail = (props) => {

    const classes = useStyles();
    const { img, price, title, description, stock, onAdd } = props;

    return (
        <Grid container spacing={3} className={classes.productContainer}>
            <Grid item xs={12} md={6}>
                <img src={img} alt={description} className={classes.productImg} />
            </Grid>
            <Grid item xs={12} md={6} className={classes.productInfo}>
                <Box className={classes.textContainer}>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                    <Typography variant="h6">
                        {price}
                    </Typography>
                </Box>
                <ItemCount stock={stock} initial="1" onAdd={onAdd}/>
            </Grid>
        </Grid>
    )
}

export default ItemDetail
