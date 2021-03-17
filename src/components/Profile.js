import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from './contexts/AuthContext'

export default function Profile() {

    const { currentUser } = useAuth()

    return (
        <>
            <div className="profile grid">
                <div className="flex flex-jc-c flex-ai-c">
                    <FontAwesomeIcon icon={faUserCircle} className="fa-8x" />
                </div>
                <div>
                    <span>{currentUser.email}</span>
                </div>
            </div>
        </>
    )
}
