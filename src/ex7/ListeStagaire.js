import React from "react";
import { useState } from "react";
import data from './Data.json';

export default function ListeStagaire() {
        const [Stag, setStag] = useState(data)
        return (
        <>
                {Stag.map((p) =>
                <div >
                        <img src={p.image}></img>
                        <h3>{p.nom}</h3>
                </div>)}
        </>
)}