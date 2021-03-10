import {CHANGE_IS_SIGN_IN, CHANGE_USERNAME, CHANGE_CATEGORY} from './constants.js'

export const setIsSignedIn = (text) => ({
    type : CHANGE_IS_SIGN_IN,
    payload : text
});
export const setUserName = (username) => ({
    type : CHANGE_USERNAME,
    payload : username 
});
export const setCategory = (category) => ({
    type : CHANGE_CATEGORY,
    payload : category
})