import Produit from './produit'
import data from '../data.json'
import '../style.css'
export default function Produits(){
    return <div className='f'>
        {
            data.prod.map(p=>{
                return <Produit produit={p}/>
            })
        }
    </div>
}