export const addUserAction = (user)=>{
    return{
        type:"Add_user",
        payload:user
    }
}
export const DeleteUserAction = (user)=>{
    return{
        type:"Delete_user",
        payload:user
    }
}

export const UpdateUserAction = (user)=>{
    return{
        type:"Update_user",
        payload:user
    }
}