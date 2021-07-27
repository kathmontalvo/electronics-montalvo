import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
import OrderFormStyles from './OrderFormStyles';

const useStyles = makeStyles(theme => OrderFormStyles(theme))

const OrderForm = (props) => {

    const classes = useStyles();
    const { newOrder } = props;

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailAlt, setEmailAlt] = useState('')

    return (
        <div>
            <form onSubmit={newOrder} className={classes.form}>
                <Typography variant="h5" color="initial">Datos de contacto</Typography>
                <TextField 
                    id="name" 
                    label="Nombre completo" 
                    variant="outlined"
                    value={name}
                    margin="normal"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    id="phone" 
                    label="Celular" 
                    variant="outlined"
                    value={phone}
                    margin="normal"
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    value={email}
                    margin="normal"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                />
                                <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    value={emailAlt}
                    margin="normal"
                    fullWidth
                    onChange={(e) => setEmailAlt(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    disabled={name === '' || email === '' || phone === '' || email !== emailAlt}
                    type="submit"
                    margin="normal"
                >
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default OrderForm
