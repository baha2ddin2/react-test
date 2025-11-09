import { useState } from "react";
import data from './Data.json';
import Stagiaire from "./Stagiaire";


export default function ListeStagaire() {

        const [Stag, setStag] = useState(data)

        function all(){
                setStag(data)
        }
        function zaid (){
                setStag( Stag.filter((s)=>s.nom === "Zaid"))
        }
        function clear (){
                setStag([])
        }
        return (
                <>
                        <button onClick={all}> tout </button>
                        <button onClick={zaid}> zaid </button>
                        <button onClick={clear}> clear </button>
                        <div className="stagiers">
                                {Stag.map((p) =><Stagiaire S={p} />)}
                        </div>
                </>
        )
}