import React from "react";
import {ListSubheader} from "@material-ui/core";
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
//import TestTable  from "./Components/testTable";
import {UserOutlined, NotificationOutlined} from '@ant-design/icons';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        backgroundColor: "white",
        height: '900px'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [openUniversal, setOpenUniversal] = React.useState(true);
    const [openBank, setOpenBank] = React.useState(true);


     const handleClick = () => {
         setOpen(!open);
     }
  /*  const handleClickUniversal = () => {
        setOpenUniversal(!openUniversal);
    }
    const handleClickBank = () => {
        setOpenBank(!openBank);
    }*/
    return (
        <List component="nav"
              aria-label="nested-list-suheader"
              subheader= {
            <ListSubheader component ='div' id="nested-list-subheader">
            </ListSubheader>
        }
        className = {classes.root}
        >
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                      <UserOutlined/>
                </ListItemIcon>
                <ListItemText primary="Пациенты" />
                {open ? <ExpandLess/> : <ExpandMore/> }
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
            
            <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/FirstPageAllNew">
                        <ListItemText primary="FirstPageAllNew !!!!!"/>
                        </Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/Kartochka">
                        <ListItemText primary="Карточка и Записка по пациенту"/>
                        </Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/TestTable">
                            <ListItemText primary="Список Пациентов+Создание"/>
                        </Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/ZapiskiTable">
                            <ListItemText primary="Список Записок+Роль Админ"/>
                        </Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/ZapiskiTableRole">
                            <ListItemText primary="Список Записок+Роль без удаления"/>
                        </Link>
                    </ListItem>
                </List>

            </Collapse>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                      <NotificationOutlined/>
                </ListItemIcon>
                <ListItemText primary="Новости" />
                {open ? <ExpandLess/> : <ExpandMore/> }
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/FirstList">
                        <ListItemText primary="FirstList"/>
                        </Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/Zapiski">
                            <ListItemText primary="Zapiski"/>
                        </Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to="/Clients">
                            <ListItemText primary="Clients"/>
                        </Link>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
};

