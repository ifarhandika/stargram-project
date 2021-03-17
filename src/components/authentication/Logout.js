import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Logout() {

    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()


    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
        <Button onClick={handleLogout}>
            {error}
            Log Out
        </Button>
            
        </>
    )
}
