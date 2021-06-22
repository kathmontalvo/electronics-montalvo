import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


import NavBarStyles from '../NavBarStyles';

const useStyles = makeStyles((theme) => NavBarStyles(theme));

const NavBarMobile = (props) => {

    const classes = useStyles();

    const { open, handleDrawerClose, categories } = props;

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
                {categories.map((category, i) => (
                    <ListItem button key={category.id}>
                        <Button 
                            key={i}
                            color="inherit" 
                            component={Link} 
                            to={`/categorias/${category.id}`}
                        >
                            {category.name}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default NavBarMobile
