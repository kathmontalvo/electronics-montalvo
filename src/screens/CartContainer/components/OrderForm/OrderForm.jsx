import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

const OrderForm = (props) => {

    const { newOrder } = props;

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Paper>
            <form onSubmit={newOrder} style={{padding: '16px'}}>
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
                <Button
                    variant="contained"
                    color="primary"
                    disabled={name === '' || email === '' || phone === ''}
                    type="submit"
                    margin="normal"
                >
                    Enviar
                </Button>
            </form>
        </Paper>
    )
}

export default OrderForm
