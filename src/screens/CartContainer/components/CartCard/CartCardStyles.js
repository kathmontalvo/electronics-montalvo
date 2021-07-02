const CartCardStyles = (theme) => {
    return ({
        root: {
            display: 'flex',
            maxHeight: '200px',
            marginBottom: '16px',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
            height: 151,
        },
    })
}

export default CartCardStyles
