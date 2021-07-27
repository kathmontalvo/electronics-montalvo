const CartItemStyles = (theme) => {
    return ({
        cardsContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        progressContainer: {
            display: 'flex',
            width: '100%',
            height: '350px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper: {
            margin: '24px 0',
            padding: '16px'
        }
    })
}

export default CartItemStyles
