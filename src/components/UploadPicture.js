import React, { useState } from "react"
import UploadProgress from "./UploadProgress"


export default function UploadPicture() {
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)

    const types = ["image/png", "image/jpeg"]

    const handleUpload = (e) => {
        let file = e.target.files[0]

        if (file && types.includes(file.type)) {
            setImage(file)
            setError("")
        } else {
            setImage(null) //reset file value
            setError("Please select an image file (png or jpeg)")
        }
    }

    return (
        <>
            <div className="hero">
                <h2>Your Gallery</h2>
                <p>Collection of your images</p>
            </div>
            <form className="upload-picture">
                <label>
                    <input type="file" onChange={handleUpload} />
                    <span>+ </span>
                </label>
                {/* <span>+</span> */}
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {image && <div>{image.name}</div>}
                    {image && <UploadProgress image={image} setImage={setImage} /> }
                </div>
            </form>
        </>
    )
}
