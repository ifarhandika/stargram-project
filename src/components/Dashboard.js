import React from "react"
import NavbarDashboard from "./NavbarDashboard"
import UploadPicture from "./UploadPicture"
import Profile from "./Profile"
import ImageGrid from "./ImageGrid"

export default function Dashboard() {
    return (
        <>
            <div className="container">
                <NavbarDashboard />
                <Profile />
                <UploadPicture />
                <ImageGrid />
            </div>
        </>
    )
}
