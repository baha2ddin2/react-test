import { useState } from "react";

import data from './Data.json';
import { toast, ToastContainer } from "react-toastify";


export default function AjouterS() {

    const [sta,setSta]= useState(data)

    const [images, setImages] = useState('')

    const [nom, setNom] = useState('')

    const [prenom, setPrenom] = useState('')

    const [filiere, setFiliere] = useState('')



    function Afficher() {
            const stagiere ={
            "id": sta.length + 1,
            "image": images,
            "nom": nom,
            "prenom": prenom,
            "filiere": filiere
        }
        setSta(...sta, sta.push(stagiere))
        toast.success("Stagiaire ajouté avec succès !");
    }
    return (<>

        <br />
        <input type="text" placeholder="nom" onChange={(e) =>  setNom(e.target.value)} />
        <br />
        <input type="text"  placeholder="prenom" onChange={(e) => setPrenom(e.target.value)} />
        <br />
        <input type="text"  placeholder="filiere" onChange={(e) => setFiliere(e.target.value)} />
        <br />
        <input type="file" onChange={(e) => setImages(e.target.files[0].name)} />
        <br />
        <img src={images} alt="" />
        <br />
        <button onClick={Afficher}>Ajouter</button>
        <ToastContainer/>
    </>
    )


}