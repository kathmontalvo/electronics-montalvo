import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles, Typography } from '@material-ui/core';

import OrderSuccessfulStyles from './OrderSuccessfulStyles';

const useStyles = makeStyles(theme => OrderSuccessfulStyles(theme))

const OrderSuccessful = () => {
    const { orderId } = useParams();
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" color="initial">
                Orden de compra creada
            </Typography>
            {/* <HomeIcon fontSize="large" /> */}
            <CheckCircleIcon className={classes.checkIcon} />
            <Typography variant="subtitle2" color="initial">
                Hemos enviado la información de compra al correo que nos indicaste. 
            </Typography>
            <Typography variant="subtitle1" color="initial">

                Código de la orden: {orderId}
            </Typography>

            <Button 
                color="primary" 
                component={Link} 
                to={'/'}
                className={classes.btn}
            >
                Regresar a inicio
            </Button>


        </Container>
    )
}

export default OrderSuccessful
