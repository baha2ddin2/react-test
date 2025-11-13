const initialState = {
    users: [
        { id: 1, nom: "Allaoui", prenom: "Moahemd" },
        { id: 2, nom: "Benani", prenom: "Hind" }
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_user":
            // return { ... state, users:[ ... state.users, action.payload]}
            return { ...state, ...state.users.push(action.payload) }
        case "Update_user":
            const user = state.users.find((u) => u.id === parseInt(action.payload.id))
            if (user) {
                user.nom = action.payload.nom
                user.prenom = action.payload.prenom
            }
            return state
        case "Delete_user":
            return { ...state, users: [...state.users.filter((u) => u.id !== - parseInt(action.payload))] }
        default:
            return state
    }
}

export default reducer