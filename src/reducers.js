import {CHANGE_IS_SIGN_IN , CHANGE_USERNAME, CHANGE_CATEGORY} from './constants.js';
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const intialState = {
    isSignedIn : "",
    username : '',
    category : '',
}

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["localStorage"] //name of the folder of persist storage
  };

export const isSignedInReducer  = (state = intialState , action = {} ) => {
    switch(action.type) {
        case CHANGE_IS_SIGN_IN:
           return Object.assign ({},state, {isSignedIn: action.payload});
        case CHANGE_USERNAME :
            return Object.assign ({},state, {username: action.payload});
        case CHANGE_CATEGORY :
            return  Object.assign ({},state, {category: action.payload});
    default :
        return state;
    }
}

const rootReducer = combineReducers({
    localStorage : isSignedInReducer});

export default persistReducer(persistConfig, rootReducer);