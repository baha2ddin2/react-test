import Menu from "./Menu";
import ListeStagaire from "./ListeStagaire 1";
import AjouterS from "./AjouterS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'

export default function Principal() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<ListeStagaire />}></Route>
                <Route path="/add" element={<AjouterS />}></Route>
            </Routes>
        </BrowserRouter>
    )
}