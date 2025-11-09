import { useState } from "react"

export default function Formulaire(){
    const [mat, setMat]= useState('')
    const [nom, setNom]=useState('')
    const [prenom, setPrenom]= useState('')
    const [info, setInfo]= useState(null)
    function handleSoumettre(){
        setInfo({mat, prenom, nom})
    }
    return(
        <div>
            <h1>Formulaire</h1>
            <label htmlFor="">matricule: </label>
            <input type="text" onChange={(e)=>setMat(e.target.value)} /> <br />
            <label htmlFor="">Nom</label>
            <input type="text" onChange={(e)=>setNom(e.target.value)}/> <br />
            <label htmlFor="">prenom</label>
            <input type="text" onChange={(e)=>setPrenom(e.target.value)} /> <br />
            <button onClick={handleSoumettre}>soumettre</button>
            {
                info && <div>
                    <h2>information saisies : </h2>
                    <b>Matricule </b>: {info.mat} <br />
                    <b>Nom  </b> : {info.nom} <br />
                    <b>prenom </b> : {info.prenom}
                </div>
            }
        </div>
    )
}