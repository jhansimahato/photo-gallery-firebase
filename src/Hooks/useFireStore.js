import { useEffect, useState } from "react";
import {currentFirestore} from '../firebase/config';


const useFireStore = (collection) => {

    const [setDocs,onSetDocs] = useState([]);

    //onSnapshot fires a callback function anytime a change occurs inside this callback function
    //the whole query to retrive the data will at the end return a function to unsubscribe from the collection
    useEffect(()=>{
        const unsub = currentFirestore.collection(collection).orderBy('createdAt','desc').onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(element => {
                documents.push({...element.data(),id: element.id})
            });
            onSetDocs(documents);
        })
    },[collection]);

    return {setDocs};
}

export default useFireStore;