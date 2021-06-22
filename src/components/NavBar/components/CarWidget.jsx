import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const CarWidget = () => {
    return (
        <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CarWidget
