import { useState } from "react";
import data from './data.json'
import { Link } from "react-router-dom";

export default function Produits(){
    const [prod , setProd] = useState(data)
    function handelDelete(id){
        const result = prod.filter((p)=>p.id!==id)
        setProd(result)
    }
    return(
        <table>
            <tr>
                <th>image</th>
                <th>id</th>
                <th>titre</th>
                <th>action</th>
            </tr>
            {
                prod.map((p)=>(
                    <tr>
                        <td>
                            <img src={p.thumbnail} alt={p.title} />
                        </td>
                        <td>
                            {p.id}
                        </td>
                        <td>
                            {p.title}
                        </td>
                        <td>
                            <Link to={`/produit/${p.id}`} >plus de detail </Link>
                        </td>
                        <td>
                            <button onClick={()=>handelDelete(p.id)}>suprimer</button>
                        </td>
                        <td>
                            <Link to={`/modifier/${p.id}`} >modifier</Link>
                        </td>
                    </tr>
                ))
            }
        </table>
    )

}