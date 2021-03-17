import React, { useState } from "react"
import UpdateProfile from './authentication/UpdateProfile'
import {
    Button,
    Dialog,
    DialogActions,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import ExploreIcon from "@material-ui/icons/Explore"
import NotificationsIcon from "@material-ui/icons/Notifications"
import InboxIcon from "@material-ui/icons/Inbox"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import SettingsIcon from "@material-ui/icons/Settings"
import ListIcon from "@material-ui/icons/List"
import Logout from "./authentication/Logout"



export default function LeftDrawer() {
    const drawerWidth = 240

    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
        marginTop: {
            marginTop: "50px",
        },
    }))

    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    function UpdateProfileDialog(){
        return (
            <Dialog open={open} onClose={handleClose}>
                <UpdateProfile />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
                
            </Dialog>
        )
    }

    return (
        <>
            <Drawer variant="permanent" className={classes.drawer}>
                <List className={classes.marginTop}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ExploreIcon />
                        </ListItemIcon>
                        <ListItemText>Explore</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText>Notification</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>Inbox</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BookmarkBorderIcon />
                        </ListItemIcon>
                        <ListItemText>Bookmark</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText>List</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonOutlineIcon />
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={handleOpen}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>Setting</ListItemText>
                        <UpdateProfileDialog open={open} onClose={handleClose} />
                    </ListItem>
                    <ListItem className={classes.marginTop}>
                        <Logout />
                    </ListItem>
                </List>
            </Drawer>
            
            
        </>
    )
}
