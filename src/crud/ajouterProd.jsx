import { useState } from "react";
import data from './data.json'
import { Link } from "react-router-dom";

export default function Ajouter(){
    const [prod, setProd] = useState(data)
    const [titre,setTitre] = useState('')
    const [image, setImage] = useState(null)

    function ajouter (){
        const id =  prod.length+1
        const newProduit ={
            id,
            title : titre,
            thumbnail : image
        }
        setProd(...prod, prod.push(newProduit))
        alert('bien ajouter')
    }

    return(
        <div>
            <h1>ajouter produit</h1>
            <label htmlFor="">titre</label>
            <input type="text" onChange={(e)=>setTitre(e.target.value)} />
            <label htmlFor="">image</label>
            <input type="file" onChange={(e)=>setImage(e.target.files[0].name)} />
            <img src={image} alt="" />
            <button onClick={ajouter} > ajoure </button>
            <Link to={'/'} >aller vers la page d'acceuil</Link>
        </div>
    )
}