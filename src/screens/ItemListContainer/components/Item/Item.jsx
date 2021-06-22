import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import itemSyles from './ItemStyles';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => itemSyles(theme))

const Item = (props) => {

    const history = useHistory();
    const classes = useStyles();

    const { id, title, description, img, price } = props;
    
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} onClick={ ()=> history.push(`/items/${id}`)}>
            <Card className={classes.card}>
                <CardMedia 
                    component="img"
                    title="laptop"
                    alt= { description }
                    image={ img }
                    className={classes.cardImg}
                />
                <CardContent>
                    <Typography variant="h5">
                        { title }
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        { description }
                    </Typography>
                    <Typography variant="h4">
                        { price }
                    </Typography>
                </CardContent>
            </Card>
        </Grid> 
    )
}

export default Item
