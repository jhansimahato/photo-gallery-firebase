import { useState, useEffect } from "react";
import { dataStorage, currentFirestore,timestamp } from "../firebase/config";


const useStorage = (file) => {
    const [setProgress, onSetProgress] = useState(0);
    const [setError,onSetError] = useState(null);
    const [setUrl,onSetUrl] = useState(null);

    useEffect(() =>{
      
        //we are creating a reference to the file inside default firebase storage bucket
        //i.e if we upload a file using this reference the file should have the name given
        const storageRef = dataStorage.ref(file.name);

        const collectionRef = currentFirestore.collection('images');


        //this will take a file and put it in the reference the location 
        //ref.put(file_name).on(eventname,eventfunction,erroehandler,geturl)
        //snap: gets the snap of the upload in real time
        storageRef.put(file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            onSetProgress(percentage);
        },(err)=>{
            onSetError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt});
            onSetUrl(url);
        });
    },[file]);

    return {setProgress, setError,setUrl};
}

export default useStorage;

