import { useState } from "react";
import data from './data.json'

export default function Recherche(){

    const [prod, setProd] = useState(data)
    const [recherche, setRecherche] =useState(null)
    const [cherche , setCherche] = useState(data)

    function handelCherche(){
        setCherche(prod.filter((p)=>p.id === Number(recherche)))
        console.log(recherche)
        console.log(cherche)
    }
    return(
        <div>
            <input type="search" onChange={(e)=>setRecherche(e.target.value)} />
            <button onClick={handelCherche}>rechercher</button>
            <table >
                {
                    cherche.map((p)=>(
                        <tr>
                            <td><img src={p.thumbnail} alt={p.title} /></td>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}