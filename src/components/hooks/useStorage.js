import { useState, useEffect } from "react"
import { storage, database } from "../firebase/firebase"
import { useAuth } from "../contexts/AuthContext"

const useStorage = (image) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    const { currentUser } = useAuth()

    useEffect(() => {
        const uploadImage = storage
            .ref(`/files/${currentUser.uid}/${image.name}`)
            

        uploadImage.put(image).on(
            "state_changed",
            (snapshot) => {
                //progress upload
                const percentageUpload =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(percentageUpload)
            },
            (error) => {
                //error upload
                setError(error)
            },
            async () => {
                //after finishing upload
                // uploadImage.snapshot.ref.getDownloadURL().then((url) => {
                //     database.files
                //         .where("userId", "==", currentUser.uid)
                //         .get()
                //         .then(() => {
                //             database.files.add({
                //                 url,
                //                 createdAt: database.getCurrentTimestamp(),
                //             })
                //         })
                // })
                // .where("userId", "==", currentUser.uid)
                const url = await uploadImage.getDownloadURL()
                console.log(url)
                database.files
                    .where("userId", "==", currentUser.uid)
                    .get()
                    .then(() => {
                        database.files.add({
                            userId: currentUser.uid,
                            name: image.name,
                            url,
                            createdAt: database.getCurrentTimestamp(),
                        })
                    })
                setUrl(url)
            }
        )
    }, [image])
    return { progress, url, error }
}

export default useStorage
