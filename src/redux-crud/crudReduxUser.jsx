import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./addUser";
import UpdateUser from "./UpdateUser";
import UserRedux from './userRedux'

export default function Crud(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserRedux/>} />
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/update-user/:id" element={<UpdateUser/>}/>
            </Routes>
        </BrowserRouter>
    )
}