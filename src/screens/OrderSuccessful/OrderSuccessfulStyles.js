const OrderSuccessfulStyles = (theme) => {
    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '24px',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                minHeight: 'calc(100vh - 100px)',
                marginTop: '72px',
            },
        },
        btn: {
            backgroundColor: '#3d5a80',
            color: '#FFFFFF',
            margin: '16px auto',
            '&:hover': {
                backgroundColor: '#3d5a8090',
                transition: '0.25s all ease-in-out',
            },
        },
        checkIcon: {
            margin: '16px auto',
            fontSize: '72px',
            color: '#59b259'
        }
    })
}

export default OrderSuccessfulStyles
