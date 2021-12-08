import db from "./firebase-init";
import { doc, deleteDoc } from "firebase/firestore";

    const deleteNote = async(id) =>{
        
        if(window.confirm('¿Estás seguro de querer eliminar esta nota?') === true){
            const noteDoc = doc(db,'notes',id);
            await deleteDoc(noteDoc)
            console.log('Successfully deleted note ' + id)
        }
    }

export default deleteNote;