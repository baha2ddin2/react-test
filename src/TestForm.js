import { useState } from "react";

export default function TestForm() {
    const [A, setA] = useState(0)
    const [B, setB] = useState(0)
    const [R, setR] = useState()

    function Fcalculer() {
        setR(parseInt(A) + parseInt(B))
    }


    return (<div>
        <pre>
                <h2>Valeur1:</h2> <input type="text" onChange={(e) => setA(e.target.value)} />

                <h2>Valeur2:</h2> <input type="text" onChange={(e) => setB(e.target.value)} />

                <button type="submit"  onClick={Fcalculer} >Calculer</button>

                <h2>Résultat</h2> <input type="text" value={R} id="Res" />

                <div>Valeur1: {A}      et Valeur2: {B}</div>
        </pre>
    </div>)

}