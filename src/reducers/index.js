import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import authReducer from './authReducer'
import postReducer from './postReducer';

export default combineReducers({
    form : formReducer,
    auth : authReducer,
    blogs: postReducer
})