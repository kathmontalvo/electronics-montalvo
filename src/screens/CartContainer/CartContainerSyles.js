const CartConainerSyles = (theme) => {
    return ({
        root: {
            display: 'flex',
            marginTop: '24px',
            [theme.breakpoints.up('md')]: {
                minHeight: 'calc(100vh - 100px)',
            }
        },
        progressContainer: {
            display: 'flex',
            width: '100%',
            height: '350px',
            justifyContent: 'center',
            alignItems: 'center'
        },
    })
}

export default CartConainerSyles
