import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./menu";
import Produits from "./produits";
import Produit from "./produit";
import Ajouter from "./ajouterProd";
import Recherche from "./recherche";
import Modifier from "./modifier";

export default function principal (){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Produits/>} />
                <Route path="/produit/:id" element={<Produit/>}/>
                <Route path="/ajouter" element={<Ajouter/>} />
                <Route path="/recherche" element={<Recherche/>}/>
                <Route path="/modifier/:id" element={<Modifier/> } />
            </Routes>
        </BrowserRouter>
    )
}