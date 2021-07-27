const CartConainerSyles = (theme) => {
    return ({
        root: {
            display: 'flex',
            marginTop: '24px',
            [theme.breakpoints.up('md')]: {
                minHeight: 'calc(100vh - 100px)',
            }
        },
    })
}

export default CartConainerSyles
