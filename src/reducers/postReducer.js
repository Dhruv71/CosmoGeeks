import { CREATE_POST, DELETE_POST, FETCH_POSTS, FETCH_POST_USERS, FETCH_USER_POSTS, UPDATE_POST} from '../actions/types'
import _ from 'lodash'

const initialState = {
    posts : {},
    users : {},
    userPosts : {}
}

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_POSTS:
        return { ...state, posts : _.mapKeys(payload,'_id')} 

    case FETCH_POST_USERS: 
        return {...state, users : {...state.users, ...payload }  }

    case FETCH_USER_POSTS:
        return {...state, userPosts : _.mapKeys(payload,'_id')}

    case UPDATE_POST:
        return {...state, userPosts : {...state.userPosts, ...payload}, posts : {...state.posts, ...payload}}
    
    case CREATE_POST:
        return {...state, userPosts : { ...payload,...state.userPosts}, posts : {...payload,...state.userPosts}}
    
    case DELETE_POST:
        return {...state, userPosts: _.omit(state.userPosts,payload), posts : _.omit(state.posts,payload)}
    default:
        return state
    }
}

export default postReducer;
