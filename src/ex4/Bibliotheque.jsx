import Header from "./Header"
import Titre from "./Titre"
import Prix from "./Prix"
import Image from "./Image"
import data from "./dataLivre.json"
import './style.css'
export default function Bibliotheque(){
    return(
        <>
        <Header/>
        <div className="bibli">
        {data.livres.map((livre) => (
            <div className="item">
                <Image image={livre.url} />
                <Titre titre={livre.titre} />
                <Prix prix={livre.prix} />
                <div className="read">read more ...</div>
            </div>
        ))}
        </div>
        </>
    )
}