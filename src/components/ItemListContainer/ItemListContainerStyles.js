const commonStyles = {
    fontSize: '16px',
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
        }

    })
}
