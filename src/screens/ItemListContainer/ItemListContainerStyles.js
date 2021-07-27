const commonStyles = {
    fontSize: '16px',
}

export const itemListContainerStyles = (theme) => {
    return ({
        container: {
            backgroundColor: '#E0FBFC',
            display: 'flex',
            minHeight: 'calc(100vh - 64px)',
            padding: '24px 48px',
            '& p': {
                ...commonStyles,
            },
            [theme.breakpoints.up('md')]: {
                padding: '24px',
            },
        },
        progressContainer: {
            display: 'flex',
            width: '100%',
            height: '350px',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}
