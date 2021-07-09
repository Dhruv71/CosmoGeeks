import React from 'react';
import './users.css';
import _ from 'lodash';
import UserPost from '../userPosts/Userpost';
import UserHeader from './UserProfileHeader';
import { fetchPostAndUser } from '../../actions';
import {connect} from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Users extends React.Component {


  async componentDidMount(){
        
     await this.props.fetchPostAndUser()
    }

  render(){
    const {posts,users} = this.props
    
  return( 
          <div className="Users-home">
          
          <div className="menu-container">
                
                <h3 className="user-menu-title">Menu</h3> <hr/>
                
                <div className="user-menu"> 

                  <li className="menu-option">Latest</li>
                  <li className="menu-option">Recommanded</li>
                  <li className="menu-option">Filter</li>
                  <li className="menu-option" onClick={() => this.props.history.replace('/jobs')}>View Jobs</li>
                </div>

          </div>

          <div>

          <UserHeader/>
            
          <div className="UsersPosts">
             {!_.isEmpty(posts) ? Object.values(posts).map(post =>  <UserPost title={post.title} description={post.description} 
                bgImg={post.bgImg ? post.bgImg.data : null} postId={post._id} avatar={users[post.owner] ?  users[post.owner].avatar ? users[post.owner].avatar : {} : {} } uname={users[post.owner] ? users[post.owner].name : null}
               key={post._id}/> ) : 
               <Loader
               type="Puff"
               color="#00BFFF"
               height={100}
               width={100}
               timeout={3000} //3 secs
             />

               }
          </div>
          
          </div>
          
        </div>
    );
}
}
const mapStateToProps = (state) => {
   return {posts : state.blogs.posts,users : state.blogs.users} 
}
export default connect(mapStateToProps,{fetchPostAndUser})(Users);  