const ItemCountStyles = (theme) => {

    const buttonsStyles = {
        width: '100%',
        transition: '0.25s all ease-in-out',
        '&:disabled': {
            border: '1px solid #CECECE',
        }
    }

    return ({
        card: {
            maxWidth: '300px',
            marginBottom: '24px',
        },
        cardButtons: {
            justifyContent: 'space-between',
            padding: '6px 16px',
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
            backgroundColor: '#FFF',
            border: '1px solid #EE6C4D',
            color: '#EE6C4D',
            ...buttonsStyles,
            '&:hover': {
                backgroundColor: '#EE6C4D',
                color: '#FFF',
                transition: '0.25s all ease-in-out',
            },
        },
        secondaryButton: {
            backgroundColor: '#FFF',
            border: '1px solid #3D5A80',
            color: '#3D5A80',
            ...buttonsStyles,
            '&:hover': {
                backgroundColor: '#3D5A80',
                color: '#FFF',
            }
        }
    })
}

export default ItemCountStyles
