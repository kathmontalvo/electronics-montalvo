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
            justifyContent: 'space-evenly',
            padding: '16px',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 230,
            height: 150,
        },
        secondaryButton: {
            backgroundColor: '#FFF',
            border: '1px solid #3D5A80',
            color: '#3D5A80',
            width: '100%',
            marginTop: '16px',
            transition: '0.25s all ease-in-out',
            '&:disabled': {
                border: '1px solid #CECECE',
            },
            '&:hover': {
                backgroundColor: '#3D5A80',
                color: '#FFF',
            }
        }
    })
}

export default CartCardStyles
