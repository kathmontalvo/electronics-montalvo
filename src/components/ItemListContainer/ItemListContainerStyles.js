const commonStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
}

export const itemListContainerStyles = (theme) => {
    return ({
        container: {
            backgroundColor: '#E0FBFC',
            display: 'flex',
            minHeight: '100vh',
            padding: '24px',
            '& p': {
                ...commonStyles,
            },
            '& button': {
                ...commonStyles,
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
                }
            }
        }

    })
}
