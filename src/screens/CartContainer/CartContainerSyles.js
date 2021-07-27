const CartConainerSyles = (theme) => {
    return ({
        root: {
            display: 'flex',
            marginTop: '24px',
            padding: '24px 48px',
            [theme.breakpoints.up('md')]: {
                minHeight: 'calc(100vh - 100px)',
                padding: '0',
            }
        },
        gridCol: {
            [theme.breakpoints.up('md')]: {
                padding: '0 16px'
            },
        }
    })
}

export default CartConainerSyles
