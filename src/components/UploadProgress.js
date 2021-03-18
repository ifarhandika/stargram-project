import React, { useEffect } from "react"
import useStorage from "./hooks/useStorage"
import { motion } from "framer-motion"

export default function UploadProgress({ image, setImage }) {
    const { progress, url } = useStorage(image)

    useEffect(() => {
        if (url) {
            setImage(null)
        }
    }, [url, setImage])

    return (
        <>
            <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + "%" }}></motion.div>
        </>
    )
}
