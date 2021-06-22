const ItemCountStyles = (theme) => {
    return ({
        card: {
            maxWidth: '300px',
            marginBottom: '24px',
        },
        cardButtons: {
            justifyContent: 'space-between',
            padding: '16px',
        },
        buttonIcon: {
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#EE6C4D',
            color: '#FFF',
            border: 'none',
            borderRadius: '5px',
            padding: '6px 12px',
            transition: '0.25s all ease-in-out',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#3D5A80',
                transition: '0.25s all ease-in-out'
            },
            '&:disabled': {
                backgroundColor: '#CECECE',
                cursor: 'auto'
            }
        },
        mainButton: {
            width: '100%',
            backgroundColor: '#FFF',
            color: '#EE6C4D',
            border: '1px solid #EE6C4D',
            transition: '0.25s all ease-in-out',
            '&:hover': {
                backgroundColor: '#EE6C4D',
                color: '#FFF',
                transition: '0.25s all ease-in-out',
            },
            '&:disabled': {
                border: '1px solid #CECECE',
            }
        }
    })
}

export default ItemCountStyles
