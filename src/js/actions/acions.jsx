import { ADD_USERS, GET_USERS } from "../contantes/contante";
import axios from "axios";


// affichage des donnees 
const getUsers = (data) => {
    return {
        type: GET_USERS,
        payload: data,
    }
}
export default getUsers;



// communiquer avec l'api de github et afficher lutilisateur saisir
export const addPosts = (data) => {
    return (dispatch) => {
        return axios 
            .post("https://api.github.com/users", data)
            .then((res) => {
                dispatch({
                    type: ADD_USERS,
                    payload : data,
                })
            })
            .catch((err) => console.log(err))
            
    }
}