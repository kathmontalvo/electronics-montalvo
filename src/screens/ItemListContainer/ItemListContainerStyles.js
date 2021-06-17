const commonStyles = {
    fontSize: '16px',
}

export const itemListContainerStyles = (theme) => {
    return ({
        container: {
            backgroundColor: '#E0FBFC',
            display: 'flex',
            minHeight: 'calc(100vh - 64px)',
            padding: '24px',
            '& p': {
                ...commonStyles,
            },
        }

    })
}
