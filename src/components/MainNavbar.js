import React from "react"
import { Link } from "react-router-dom"
import {
    AppBar,
    CssBaseline,
    fade,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

export default function MainNavbar() {
    const useStyles = makeStyles((theme) => ({
        "@global": {
            ul: {
                margin: 0,
                padding: 0,
                listStyle: "none",
            },
        },
        appBar: {
            backgroundColor: "black",
        },
        toolbar: {
            flexWrap: "wrap",
        },
        toolbarTitle: {
            flexGrow: 1,
            color: "#fff",
            fontFamily: "Antic Slab",
        },
        link: {
            margin: theme.spacing(1, 1.5),
            fontFamily: "Antic Slab",
            textDecoration: "none",
            color: "#fff",
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.5),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 0.8),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
    }))

    const classes = useStyles()

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        to="/"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}>
                        Stargram
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <Link to="/login" className={classes.link}>
                        Login
                    </Link>
                    <Link to="/signup" className={classes.link}>
                        Sign Up
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
