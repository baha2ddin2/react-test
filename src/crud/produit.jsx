import { Link, useParams } from "react-router-dom";
import data from './data.json'

export default function Produit(){
    const {id}=useParams()
    const [produit] = data.filter((p)=>p.id===Number(id))
    return(
        <>
            <h1>{id}</h1>
            <img src={produit.thumbnail} alt={produit.title} />
            <h2>{produit.title}</h2>
            <h2>{produit.price}</h2>
            <Link to={'/'} >aller vers la page d'acceuil</Link>
        </>
    )
}