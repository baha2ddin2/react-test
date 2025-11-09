export default function Produit ({produit,color}){
    return <div className="p">
        <img src={produit.thumbnail} alt={produit.title} />
        <h2>{produit.title}</h2>
        <h2>{produit.price}</h2>
        <button>ajouter au panier</button>
    </div>
}