import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produits from "./Produits.jsx";
import SeaulProd from "./seaulProd";

export default function Prod() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Produits />} />
                    <Route path="/produit/:id" element={<SeaulProd />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}