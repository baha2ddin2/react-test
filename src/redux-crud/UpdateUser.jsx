import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUserAction } from "./action";

export default function UpdateUser(){
    const {id}= useParams()
    const user = useSelector(data=>data.users.find((u)=>u.id===Number(id)))
    const [nom, setNom]=useState(user.nom)
    const [prenom, setPrenom]=useState(user.prenom)
    const dipatch =useDispatch()
    const navigate = useNavigate()
    const handelClick =()=>{
        dipatch(UpdateUserAction({
            id,
            nom,
            prenom
        }))
        navigate('/')
    }
    return  (
        <div>
            <label htmlFor="">nom</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            <label htmlFor="">prenom</label>
            <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
            <button onClick={handelClick} >Enregistrer</button>
        </div>
    )
}