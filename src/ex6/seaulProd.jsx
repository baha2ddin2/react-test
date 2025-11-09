import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import produits from './produits.json'

export default function SeaulProd(){
    const [prod,setProd]=useState(produits)
    const {id}= useParams()
    const produit=produits.find(p=>p.id==id)
    console.log(produit)
    return(
        <table>
            <tr>
                <td><img src={"/"+produit.thumbnail} alt={produit.title}/></td>
                <td><h2>{produit.id}</h2></td>
                <td>{produit.title}</td>
                <td><Link to="/"> aller vers la page d'accueil </Link></td>
            </tr>
        </table>
    )

}