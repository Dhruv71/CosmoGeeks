import {EDIT_USER, FETCH_USER, RESET_FORM_AND_ERROR, SIGN_IN, SIGN_IN_FAIL, SIGN_OUT} from '../actions/types'

const isSign = JSON.parse(sessionStorage.getItem('isSignedIn')) ? true : null

const INITIAL_VALUE = {
    isSignedIn : isSign,
    user : null,
    errors : {},
    errorMsg : {}
}

const authReducer = (state=INITIAL_VALUE, action) => {
    switch(action.type){

        case FETCH_USER : return { ...state, ...action.payload }

        case SIGN_OUT : return {...state, ...action.payload}

        case SIGN_IN : return {...state, ...action.payload }

        case SIGN_IN_FAIL : return {...state, ...action.payload}
        
        case RESET_FORM_AND_ERROR : return {...state, ...action.payload}

        case EDIT_USER : return {...state, user : action.payload}

        default : return {...state}
    }
}

export default authReducer;