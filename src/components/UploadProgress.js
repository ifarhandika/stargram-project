import React, { useEffect } from "react"
import useStorage from "./hooks/useStorage"

export default function UploadProgress({ image, setImage }) {

    const { progress, url } = useStorage(image)

    useEffect(() => {
        if(url){
            setImage(null)
        }
    }, [url, setImage])


    return (
        <>
            <div className="progress-bar" style={{ width: progress + '%' }}></div>
        </>
    )
}
