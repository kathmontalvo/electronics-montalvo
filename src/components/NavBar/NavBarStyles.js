const NavBarStyles = (theme) => {
    return ({
    root: {
        background: '#3D5A80',
    },
    appBar: {
        backgroundColor: '#3D5A80',
    },
    toolBar: {
        padding: 0,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'inline-flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        display: 'block',
        color: '#fff',
        textDecoration: 'none'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    })
}

export default NavBarStyles
