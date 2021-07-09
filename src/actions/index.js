import axios from 'axios';
import history from '../history'
import {FETCH_USER, SIGN_OUT, SIGN_IN, SIGN_IN_FAIL, RESET_FORM_AND_ERROR, EDIT_USER, FETCH_POSTS, FETCH_USER_POSTS, FETCH_POST_USERS, UPDATE_POST, CREATE_POST, DELETE_POST} from './types'
import { reset} from 'redux-form';
import _ from 'lodash'
axios.defaults.withCredentials = true
export const fetchUser = () => async (dispatch,getState) => {
    
    try {
        const res = await axios.get('https://cosmogeeks-api.herokuapp.com/users/me', {withCredentials : true})
        
     if(res.data){
        if(!getState().auth.isSignedIn)
        { sessionStorage.setItem('isSignedIn',true)
          dispatch({type : FETCH_USER, payload : { user : res.data, isSignedIn:true} })  
        }
         
        dispatch({type : FETCH_USER, payload : {user : res.data} })
     }
    } catch (error) {
        dispatch({type : FETCH_USER, payload : null})
    }
}

export const trySignOut = () => async (dispatch,getState) => {
        try {
            await axios.post('https://cosmogeeks-api.herokuapp.com/users/logout',{},{withCredentials : true})
            sessionStorage.setItem('isSignedIn',JSON.stringify(false))
            dispatch({type : SIGN_OUT, payload : {user : null, isSignedIn : false}})
            history.replace('/')
          
        } catch (error) {
            dispatch({type : SIGN_OUT, payload : { user : getState.auth.user, isSignedIn : getState().auth.isSignedIn}})
        }
}

export const trySignIn = (formValues) => async (dispatch) => {
    try {
        const res = await axios.post(
            "https://cosmogeeks-api.herokuapp.com/users/login",
            { ...formValues },
            { withCredentials: true }
          );
          if (res.data.user) {
            sessionStorage.setItem('isSignedIn',JSON.stringify(true))  
            dispatch({type:SIGN_IN, payload : {user : res.data.user, isSignedIn : true}})
            dispatch(reset('loginForm'))
            history.replace("/user");
          }

        } catch (err) {
          console.log(err)
          const errorMsg =  { ...err.response.data.errors };
          const errors = {};
          Object.entries(errorMsg).forEach((error) =>
            errorMsg[error[0]] !== "" ? (errors[error[0]] = "error") : null
          );
          dispatch({type: SIGN_IN_FAIL, payload : {errors,errorMsg}})
    }
}

export const resetErrorsAndForm = (formName)  => dispatch => {

    dispatch(reset(formName))
    dispatch({ type : RESET_FORM_AND_ERROR, payload: {errors : {}, errorMsg: {} } })
}

export const tryCreateUser = (formValues) => async (dispatch) => {
    if(formValues.password !== formValues.confirmPassword)
    { 
        dispatch({type:SIGN_IN_FAIL, payload : { errorMsg : { password :"password and confirm-password does not match"},
         errors : {password : "error"} } })
    }
else{
    try {
        const response = await axios.post('https://cosmogeeks-api.herokuapp.com/users/create', 
                          { ...formValues },
                          { withCredentials : true});
         if(response.data.userCreated){
            dispatch(reset('signUpForm'))                      
            history.push('/verifyEmail');
         }
          
      } catch (e) {
          const errorMsg = {  ...e.response.data.errors }
          
          if(errorMsg.custom === "Verification mail not send."){
             dispatch(reset("signUpForm"))
             dispatch({type : RESET_FORM_AND_ERROR, payload : {errors : {}, errorMsg : {} } })
             history.push("/verifyEmail")
          }
          const errors = {}
          Object.entries(errorMsg).forEach( error => errorMsg[error[0]] !== "" ? 
          errors[error[0]] = "error" : null) 
          dispatch({type: SIGN_IN_FAIL, payload : {errorMsg, errors }})
      }       
     }       
} 

export const tryEditProfile = (formValues) => async (dispatch) => {
    const { name, age, bio, avatar} = formValues
    if (name || age || bio || avatar) {
        const fd = new FormData();
        if (name) fd.append("name", `${name}`);
        if (age) fd.append("age", `${age}`);
        if (bio) fd.append("bio", `${bio}`);
        if (avatar){ fd.append("avatar", avatar)};
  
        try {
          const res = await axios.patch("https://cosmogeeks-api.herokuapp.com/users/me", fd, {
          withCredentials : true   
          });
          if (res.data) {
            dispatch({type:EDIT_USER,payload : {user : res.data}})
            history.replace('/profile')
          }
          
        } catch (error) {
          console.log(error);
        }
      }
      else
      alert("please provide some data to update")
}

//Post related actions handled below:

export const fetchPostAndUser = () => async (dispatch,getState) => {
  try {
     await dispatch(fetchPost())
     const userIds =  _.uniq(_.map(getState().blogs.posts,'owner'))
     userIds.forEach(id => dispatch(fetchUserById(id)));   
 
    }catch (error) {
    console.log("something goes wrong",error);
  }
}

export const fetchPost = () => async (dispatch) => {
  try {
    const postRes = await axios.get("https://cosmogeeks-api.herokuapp.com/posts", {withCredentials:true});
    if(postRes.data){
      dispatch({type:FETCH_POSTS, payload : postRes.data})
    } 
  } catch (error) {
      throw error
  }
}

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const user = await axios.get(`https://cosmogeeks-api.herokuapp.com/users/${id}/avatar`, {withCredentials : true})
    if(user.data){
      dispatch({type:FETCH_POST_USERS, payload : {[user.data.id] : user.data} })
    }
  } catch (error) {
    throw error
  }
}

export const fetchUserPosts = () => async (dispatch) => {
  try {
    const userPosts  = await axios.get("https://cosmogeeks-api.herokuapp.com/posts/me?sortBy:asc", {withCredentials:true});
    if(userPosts.data){
      dispatch({type : FETCH_USER_POSTS, payload : userPosts.data})
    }
  } catch (error) {
      console.log("ooops! unable to Fetching User", error)
  }
}

export const updatePost = (post) => {
  return {type:UPDATE_POST, payload : {[post._id] : post}}
}

export const createPost = (post) => {
  return {type:CREATE_POST, payload : {[post._id] : post}}
}

export const deletePost = (id) => async (dispatch) => {
   try {
        const res = await axios.delete(`https://cosmogeeks-api.herokuapp.com/posts/${id}`, {withCredentials:true})
        if (res.data.deleted){
          dispatch({type : DELETE_POST, payload:id})
          history.replace('/profile')
        }
    } catch (error) {
    
    }
}