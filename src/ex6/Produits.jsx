import { Link } from 'react-router-dom'
import produits from './produits.json'
export default function Produits(){
    return(
        <>
            <div>
                <table>
                    {
                        produits.map((pro,i)=>{
                            return(
                                <tr>
                                    <td><img src={"/"+pro.thumbnail} alt={pro.title} /></td>
                                    <td><h2>{pro.id}</h2></td>
                                    <td>{pro.title}</td>
                                    <td><Link to={`/produit/${pro.id}`} > plus de detail </Link></td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}