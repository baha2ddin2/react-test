import Header from "./Header";
import Context from "./Context";
import Menu from "./Menu"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produits from "../ex6/Produits.jsx";
import SeaulProd from "../ex6/seaulProd";

export default function Principal() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/Context" element={<Context />} />
                    <Route path="/produits"element={<Produits/>}/>
                    <Route path="/produit/:id" element={<SeaulProd/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}

