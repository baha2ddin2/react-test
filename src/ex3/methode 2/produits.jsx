import data from  '../data.json'
import Image from './image'
import Title from './title'
import Price from './price'
import '../style.css'
export default function Produits() {
    return <div className='f'>
        {
            data.prod.map((p)=>{
                return <div className='p'>
                    <Image image={p.thumbnail} title={p.title} />
                    <Title title={p.title}/>
                    <Price price={p.price}/>
                    <button>ajouter au panier</button>
                </div>
            })
        }
    </div>
}