import data from './data.json'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Modifier (){
    const [prod, setProd] = useState(data)
    const [titre,setTitre] = useState('')
    const [image, setImage] = useState(null)
    const {id}= useParams()
    const produit = prod.filter((p)=>p.id===Number(id))
    function ajouter (){
        produit.titre =titre
        produit.humbnail = image
        alert("bien modifier ")
    }

    return(
        <div>
            <h1>ajouter produit</h1>
            <label htmlFor="">titre</label>
            <input type="text" onChange={(e)=>setTitre(e.target.value)} />
            <label htmlFor="">image</label>
            <input type="file" onChange={(e)=>setImage(e.target.files[0].name)} />
            <img src={image} alt="" />
            <button onClick={ajouter} >modifier</button>
            <Link to={'/'} >aller vers la page d'acceuil</Link>
        </div>)
}