import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAction } from "./action";

export default function AddUser(){
    const count = useSelector((data)=>data.user.length)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelClick = ()=>{
        dispatch(addUserAction({
            id:count+1,
            nom :name,
            prenom :email
        }))
        navigate('/')
    }
    return(
        <div>
            <label htmlFor="">name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={handelClick}>enregistrer</button>
        </div>
    )
}