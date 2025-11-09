import axios from "axios";
import { useEffect, useState } from "react";

export default function Api2(){
    const [id , setId]= useState(1)
    const [utilisateur, setUtilisateur]= useState({})
    const [address, setAddress]= useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            setUtilisateur(res.data)
            setAddress(res.data.address)
        })
    },[id])
    return(
        <div>
            <h1>details utilisateur</h1>
            <div>
                <label htmlFor="">donner le id</label>
                <input type="text" onChange={(e)=>setId(e.target.value)} />
            </div>
            {
                utilisateur && address ? <div>
                    <div className="child" key={utilisateur.id}>
                        <h3 style={{color:"green"}}>
                            id : {utilisateur.id}
                            nom : {utilisateur.name} {utilisateur.username}
                        </h3>
                        <p>email : {utilisateur.email}</p>
                        <p>telephone  : {utilisateur.phone}</p>
                        <p>site web : {utilisateur.website}</p>
                        <p>rue : {address.street}</p>
                        <p>ville : {address.city}</p>

                    </div>
                </div>
            :"svp choisir un id valide "}
        </div>)
}