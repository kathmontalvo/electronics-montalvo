import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const ItemConfirmation = (props) => {

    const { addToCart, cancelShop } = props;

    return (
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
        >
            <Button onClick={addToCart}>Finalizar compra</Button>
            <Button variant="outlined" onClick={cancelShop}>Cancelar</Button>
      </ButtonGroup>
    )
}

export default ItemConfirmation
