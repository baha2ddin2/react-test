import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserAction } from "./action";
import { Link } from "react-router-dom";

export default function AddUserRedux(){
    const users = useSelector((state)=>state.users)
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const dispatch = useDispatch()
    const handelDelete = (id)=>{
        dispatch(DeleteUserAction(id))
    }
    return(
        <div>
            <p>
                <Link to={'/add-user'}>
                    <button>add user</button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>prenom</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user ,key)=>{
                            return(
                                <tr key={key}>
                                    <td>{user.id}</td>
                                    <td>{user.nom}</td>
                                    <td>{user.prenom}</td>
                                    <td>
                                        <Link to={`/update-user/${user.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={()=>handelDelete(user.id)} >delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}