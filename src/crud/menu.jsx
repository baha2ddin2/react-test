import { Link } from "react-router-dom"
export default function Menu (){
    return(
        <div className="container">
            <nav className="nav">
                <li className="nav-item" ><Link className="nav-link text-info" to={'/'}>lister produits</Link></li>
                <li className="nav-item" ><Link className="nav-link text-info" to={'/Ajouter'}>Ajouter</Link></li>
                <li className="nav-item" ><Link className="nav-link text-info" to={'/recherche'}>recherche</Link></li>
            </nav>
        </div>
    )
}