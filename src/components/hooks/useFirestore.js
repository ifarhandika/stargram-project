import { useState, useEffect } from 'react'
import { firestore } from '../firebase/firebase'
import { useAuth } from '../contexts/AuthContext'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])
    const {currentUser} = useAuth()

    useEffect(() => {
        const unsub = firestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .where("userId", "==", currentUser.uid)
        .onSnapshot((snap) => {
            let documents = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
        return () => unsub()
    }, [collection, currentUser])

    return {docs}
}

export default useFirestore


