import {getFirestore,
        collection,
        doc,
        getDocs,
        getDoc,
        addDoc,
        query,
        where 
    } from "firebase/firestore"
import {app} from "./config"

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "pepe"))
    const productos = []

    querySnapshot.forEach((doc) => {
        productos.push({...doc.data(), id: doc.id})
    }) 

    return productos
}

export const getProductsCategory = async (category) => {
    const q = query(collection(db, "pepe"), where("categoria", "==", category));
    const documentos = await getDocs(q); 
    const productos = []

    documentos.forEach((doc) => {
        productos.push({...doc.data(), id: doc.id})
    })
    return productos
}

export const getAProduct = async (id) => {
    const docRef = doc(db, "pepe", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return {...docSnap.data(), id: docSnap.id}
    } else {
        console.log("No such document!")
        return null
    }
}

export const crearOrden = async (orden) => {
    await addDoc(collection(db, "ordenes"), orden);
}