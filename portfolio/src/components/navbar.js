import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MobileRightMenuSLider from "@material-ui/core/Drawer"
import {
    AppBar,
    ToolBar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Toolbar
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    Block
} from '@material-ui/icons';
import avatar from "../avatar.png"
import {makeStyles} from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        heigth: theme.spacing(20)
    },
    listItem:{
        color: "tan"
    }
})
);

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const NavBar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }
    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Parth Thumar"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=> (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>Protfolio</Typography>
                    <MobileRightMenuSLider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                    </MobileRightMenuSLider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar