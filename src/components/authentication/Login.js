import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import {
    Avatar,
    Button,
    Container,
    CssBaseline,
    Grid,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core"
import { LockOutlined } from "@material-ui/icons"
import { Alert } from "@material-ui/lab"
import Navbar from "../MainNavbar"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(10),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // background: 'red'
        },
        // paper2: {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // },
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
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    {error && (
                        <Alert style={{ width: "100%" }} severity="error">
                            {error}
                        </Alert>
                    )}
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email Address"
                                    type="email"
                                    inputRef={emailRef}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type="password"
                                    inputRef={passwordRef}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}>
                            Log In
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                Need an account?{" "}
                                <Link to="/signup">Sign Up</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </>
    )
}
