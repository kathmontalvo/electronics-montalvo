import React from 'react';

import { Link } from 'react-router-dom'

import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import CarWidget from './components/CarWidget';
import NavBarStyles from './NavBarStyles';
import NavBarMobile from './components/NavBarMobile';

const categories = [
    {
        id: "1",
        name: "Computadoras",
    },
    {
        id: "2",
        name: "Celulares",
    }
]

const useStyles = makeStyles((theme) => NavBarStyles(theme));

const NavBar = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };


    return (
        <div className={classes.root}>
            <AppBar 
                position="sticky"
                className={classes.appBar}
            >
                <Container>
                    <Toolbar className={classes.toolBar}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title} 
                            variant="h6" 
                            noWrap
                            component={Link} 
                            to="/"
                        >
                            Electronics
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                        {categories.map((category, i) => (
                            <Button 
                                key={i}
                                color="inherit" 
                                component={Link} 
                                to={`/categorias/${category.id}`}
                            >
                                {category.name}
                            </Button>
                        ))}
                        </div>
                        <CarWidget />  
                    </Toolbar>
                </Container>
            </AppBar>
            <NavBarMobile 
                open={open} 
                handleDrawerClose={handleDrawerClose} 
                categories={categories}
            />
        </div>
    )
}

export default NavBar;