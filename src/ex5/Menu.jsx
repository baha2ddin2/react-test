import { Link } from "react-router-dom";
export default function Menu (){
    return (<>
    <div className="container">
        <nav className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link text-dark">header</Link>
            </li>
            <li className="nav-item">
                <Link to="/context" className="nav-link text-dark">context</Link>
            </li>
            <li className="nav-item">
                <Link to="/produits" className="nav-link text-dark">produits</Link>
            </li>
        </nav>
    </div>
    
    </>)

}