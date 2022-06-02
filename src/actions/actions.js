//  action Types
export const LOGIN = 'LOGIN';
export const SIGN_OUT = 'SIGNOUT';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const FETCH_USER = 'FETCH_USER';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'


// action creators
export function login(token,user) {
    return {
        type: LOGIN,
        token,
        user
    }
}

export function signout() {
    return {
        type: SIGN_OUT
    }
}

export function setMovies(value) {
    return {
        type: SET_MOVIES,
        value
    }
}

export function setFilter(value) {
    return {
        type: SET_FILTER,
        value
    }
}

export function fetchUser(value) {
    return {
        type: FETCH_USER, 
        value
    }

}
export function deleteAccount() {
    return {
        type: DELETE_ACCOUNT
    }
}


