import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const CarWidget = (props) => {

    const history = useHistory();
    const { items } = props;
    const [productsQty, setProductsQty] = useState(0);

    const qty = (items) => items.reduce((prev, next) => prev.qty + next.qty);

    const setNewProducts = (products) => {
        products.length === 1 ?
        setProductsQty(products[0].qty) :
        setProductsQty(qty(products))
    }

    const goToCart = () => {
        history.push('/cart')
    }

    useEffect(() => {
        items.length > 0 && setNewProducts(items)
    }, [items])

    return (
        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => goToCart()}>
            <Badge badgeContent={productsQty} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CarWidget
