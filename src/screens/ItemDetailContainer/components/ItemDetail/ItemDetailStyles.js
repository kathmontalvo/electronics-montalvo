const ItemDetailStyles = (theme) => {
    return ({
        productImg: {
            maxWidth: '300px',
            [theme.breakpoints.up('md')]: {
                maxWidth: '100%',
            },
        },
        productContainer: {
            minHeight: '75%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        productInfo: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        textContainer: {
            marginBottom: '24px'
        }
    })
}

export default ItemDetailStyles
