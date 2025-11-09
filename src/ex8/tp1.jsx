import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'
export default function Api1() {
    const [utilisateurs, setUtilisateurs] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUtilisateurs(res.data)
            })
    }, [])
    return (
        <div>
            <h3>lister utilisateurs</h3>
            <div>
                <h1>nombre d'utilisateurs : {utilisateurs.length}</h1>
                {
                    utilisateurs.map(user=>{
                        return(
                            <div className='child' key={user.id}>
                                <h3 style={{color:"rgb(92,62,3)"}}>
                                    nom :{user.name} {user.username}
                                </h3>
                                <p>email : {user.email}</p>
                                <p>ville : {user.address.city} 
                                    rue :{user.address.street}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}