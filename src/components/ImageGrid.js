import React from "react"
import useFirestore from "./hooks/useFirestore"
import { motion } from "framer-motion"

export default function ImageGrid({ setSelectImg }) {
    const { docs } = useFirestore("images")

    return (
        <>
            <div className="img-grid">
                {docs &&
                    docs.map((doc) => (
                        <motion.div
                            className="img-wrap"
                            layout
                            key={doc.id}
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelectImg(doc.url)}>
                            <motion.img
                                src={doc.url}
                                alt="pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                        </motion.div>
                    ))}
            </div>
        </>
    )
}
