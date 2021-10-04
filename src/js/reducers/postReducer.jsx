import { ADD_USERS, GET_USERS } from "../contantes/contante";

const initialState = {
    users: [
        {
            id: new Date().getTime(),
            login: "jeanElossy",
            bio: "Devellopeur full-stack js (react / node)",
            avatar_url: "https://avatars.githubusercontent.com/u/85369788?v=4",
            followers: 1,
            following: 1,
            public_repos: 48,
        },
        {
            id: new Date().getTime(),
            login: "devvamoussa",
            bio: "Futur developpeur (front-end, back-end), je suis ici pour apprendre.",
            avatar_url: "https://avatars.githubusercontent.com/u/84201629?v=4",
            followers: 0,
            following: 0,
            public_repos: 37,
        }
    ]
}


const userVerificated = ( state = initialState, action ) => {

    switch(action.payload) {

        case GET_USERS:
            return [...state.users];
        
        case ADD_USERS:
            return [action.payload, ...state]
    
        default:
            return state;

    }

}

export default userVerificated;