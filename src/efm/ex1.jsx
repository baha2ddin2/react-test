import axios from "axios";
import { Suspense, useEffect, useState } from "react";

export default function Users(){
    const [users , setUsers]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setUsers(res.data)
        })
    },[])
    return(
        <div>
            <Suspense fallback={ <div> loanding .....</div> }>

            </Suspense>
            <h1>lister des utilisateurs</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li><b>name:</b> { user.name} <b>username : </b> {user.username} <b> city : </b> {user.address.city} </li>
                    ))
                }
            </ul>
        </div>
    )

}