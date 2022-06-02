import { combineReducers } from 'redux';
import { SET_MOVIES, SET_FILTER, LOGIN, SIGN_OUT, FETCH_USER, DELETE_ACCOUNT} from '../actions/actions';

const initialLoginState = {isAuth: false};
const initialUserState = null;

function login(state = initialLoginState, action) {
    switch (action.type) {
        case LOGIN:
            return { 
                ...state, 
                token: action.token,
                user: action.user,
                isAuth: true
            }

        case SIGN_OUT:
            return {
                ...state,
                user: null,
                isAuth: false 
            }
        
        default:
            return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        
        default:
            return state;
    }
}

function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;

        default:
            return state;
    }
}

function fetchUser(state = initialUserState, action) {
    switch(action.type) {
        case FETCH_USER: 
        return action.value;

        default:
            return state;
    }
}

function deleteAccount(state = {} , action) {
    switch (action.type) {
        case DELETE_ACCOUNT:
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false 
            }
        
        default:
            return state;
    }
}


const movieApp = combineReducers({
    visibilityFilter,
    movies,
    login,
    fetchUser,
    deleteAccount
});

export default movieApp;