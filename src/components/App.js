import React from 'react';
import { Router, Redirect, Route, Switch} from 'react-router-dom';
import './app.css';
import { connect } from "react-redux";
import {fetchUser} from '../actions'

import HomePage from './homepage/Homepage';
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './login/Login';
import Signup from './login/Signup';
import Logout from './login/Logout';
import User from './userProfile/Users';
import VerifyEmailHandel from './verificationEmail/VerifyEmailHandel';
import ResendVerification from './verificationEmail/ResendVerification';
import Profile from './userProfile/Profile';
import CreatePost from './userProfile/CreatePost';
import UpdatePost from './userProfile/UpdatePost';
import EditProfile from './userProfile/EditProfile';
import JobList from './cardlist/JobList'
import history from '../history'
import DeletePost from './userProfile/DeletePost';
import About from './About/About';

class App extends React.Component {
    
    
    async componentDidMount(){
        if( this.props.auth.isSignedIn || !this.props.user)
        { 
        this.props.fetchUser()
      }
    }
     
    render()
    {  
         const { user,isSignedIn } = this.props.auth;
     return(
       <div>
           <Router history={history}>
            <Header user={user} />
            <Switch>

            <Route path="/" exact render = { (props) => !isSignedIn ? 
               <HomePage {...props}  /> : <Redirect to="/user" /> } 
            />
            <Route path="/user" render = {(props) => isSignedIn  ?
               <User {...props} /> : <Redirect to="/login" /> }   />

            <Route path="/profile" render = {(props) => isSignedIn  ?
                <Profile {...props} user={user} /> : <Redirect to="/login" /> }/>

            <Route path="/createpost" render = {(props) => isSignedIn  ?
                <CreatePost {...props} /> : <Redirect to="/login" /> }/>    
           
            <Route path="/updatepost/:id" render = {(props) => isSignedIn  ?
                <UpdatePost {...props} /> : <Redirect to="/login" /> }/>    

            <Route path="/login" render= { (props) => !isSignedIn  ?
                <Login {...props}  currentUser={user} /> :
                 <Redirect  to='/user'  />  }
            />
            <Route path="/signup" exact render={props => !isSignedIn  ? 
                   <Signup {...props} /> : <Redirect to="/user" />} 
            />
            <Route path="/logout" render={ (props) => isSignedIn  ?
                <Logout {...props}  /> :
                <Redirect to="/login" />}
             />
            <Route path="/verifyEmail" render={ props => !isSignedIn ? <VerifyEmailHandel {...props} /> : 
                   <Redirect to="/user" /> } 
            />
            <Route path="/resend-verification" render={ props => !isSignedIn ? 
                   <ResendVerification {...props} /> : 
                   <Redirect to="/user" /> } />

            <Route path="/editUserProfile" render={ props => isSignedIn ? 
                   <EditProfile {...props}  
                   user={user} /> : 
                   <Redirect to="/login" /> } />

            <Route path="/jobs" component={JobList} />

            <Route path="/about" component={About} />
            
            <Route path="/deletePost/:id/:title" render={props => isSignedIn ? <DeletePost {...props} /> :
                    <Redirect to="/login"></Redirect>}></Route>
                   
            <Route path="*" ><h1 style={{minHeight:"100vh"}}>No such Route</h1></Route>
            </Switch>
            <Footer />
            
           </Router>
       </div>
    );
   }
};

const mapStateToProps = (state) => {
    return {auth : state.auth}
}

export default connect(mapStateToProps,{fetchUser})(App);