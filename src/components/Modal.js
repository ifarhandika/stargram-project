import React from "react"
import { motion } from "framer-motion"

export default function Modal({ selectImg, setSelectImg }) {
    function handleClick(e) {
        if (e.target.classList.contains("backdrop")) {
            setSelectImg(null)
        }
    }

    return (
        <>
            <motion.div
                className="backdrop"
                onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <motion.img
                    src={selectImg}
                    alt="large pic"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                />
            </motion.div>
        </>
    )
}
