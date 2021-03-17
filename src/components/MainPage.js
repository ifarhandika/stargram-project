import React from "react"
import { Container, makeStyles, Typography } from "@material-ui/core"
import MainNavbar from "./MainNavbar"

export default function MainPage() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(10),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // background: 'red'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }))
    const classes = useStyles()
    return (
        <>
            <MainNavbar />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        WELCOME TO STARGRAM
                    </Typography>
                </div>

            </Container>
        </>
    )
}
