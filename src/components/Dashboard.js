import React, { useState } from "react"
import NavbarDashboard from "./NavbarDashboard"
import UploadPicture from "./UploadPicture"
import Profile from "./Profile"
import ImageGrid from "./ImageGrid"
import Modal from "./Modal"

export default function Dashboard() {

    const [selectImg, setSelectImg] = useState(null)

    return (
        <>
            <div className="container">
                <NavbarDashboard />
                <Profile />
                <UploadPicture />
                <ImageGrid setSelectImg={setSelectImg} />
                { selectImg && <Modal selectImg={selectImg} setSelectImg={setSelectImg} /> }
            </div>
        </>
    )
}
