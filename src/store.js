import {createStore} from "redux";

const initialState = {
    isLoggedIn: false,
    login: "",
    password: ""
}

const reducer = (state = initialState, action) => {
    if (action.type === "submitLogin") {
        return {...state, isLoggedIn: true};
    }
    return state;
}

export const store = createStore(reducer);