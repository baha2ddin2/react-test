import { useState } from 'react'
import data from './ex7/Data.json'
export default function Exam(){
    const [stagiare, setStagiare] =useState(data)
    function all() {
        setStagiare(data)
    }
    function clear() {
        setStagiare([])
    }
    function tdi() {
        setStagiare(data.filter((s)=>s.filiere==="tdi"))
    }
    function tri() {
        setStagiare(data.filter((s)=>s.filiere==="tri"))
    }
    return(<>
        nombre des stagiare {stagiare.length()}
        {stagiare.map((s)=>{
            return(
                <div>
                    <img src={s.image} alt="" />
                    <h2>{s.nom}-{s.filiere}</h2>
                    <p>{s.age}</p>
                </div>
            )
        })}
        <button onClick={all}>all</button>
        <button onClick={tdi}>tdi</button>
        <button onClick={tri}>tri</button>
        <button onClick={clear}>clear</button>
    </>
    )
}