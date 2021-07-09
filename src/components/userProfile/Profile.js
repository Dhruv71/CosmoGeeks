import React from 'react';
import { Link } from "react-router-dom";
import './profile.css';
import UserPost from '../userPosts/Userpost';
import UserHeader from './UserProfileHeader';
import Banner from './assets/banner.png';
import DP from './assets/dp.png';
import { fetchUser,fetchUserPosts } from '../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Profile extends React.Component {
   
 async componentDidMount(){
   await this.props.fetchUser()
   await this.props.fetchUserPosts()
 }
 onEditClick = id => {
  this.props.history.push(`/updatepost/${id}`);
}

onDeleteClick= async id => {
  let title = this.props.posts[id].title;
  title = title.replace(/ +/g,"-")
  this.props.history.push(`/deletePost/${id}/${title}`)
}
  render(){
    const { posts } = this.props  
  return( 
        <div className="Users-Profile">
          
        <div className="menu-container">
              
              <h3 className="user-menu-title">Menu</h3> <hr/>
              
              <div className="user-menu"> 

                <li className="menu-option">Account</li>
                <li className="menu-option">Privacy setting</li>
                <li className="menu-option">Share Profile</li>
                <li className="menu-option" onClick={() => this.props.history.push('/jobs')}>View Jobs</li>
                
              </div>

        </div>
                  
        <div>

        <UserHeader/>

        <div className="profile-box">
            <div className="profile-banner">
                 <img src={Banner} alt="Banner" height="220px" width="950px"/>
            </div>
            <div className="profile-info">
            <div className="profile-image">
             { this.props.user ?
                <img src={`data:image/png;base64,${this.props.user.avatar}`} alt="background img" /> :
                <img className="post-user-image" src={DP} alt="background-poster" />
             }
            </div>
            <div className="user-name">
                <h1>{this.props.user ? this.props.user.name : "Astro Nerds"}</h1>
                <h4>{this.props.user ? this.props.user.bio : "Always Curious to know Mysterious Cosmos."}</h4>
            </div>
            <Link to="/editUserProfile">Edit Profile</Link>
            </div>
        </div>

        <div className="act-btn">
            <button className="option1">POSTS</button>
            <button className="option2">LIKED</button>
            <Link to={"/createpost"}><button className="create-post">+ Create Post</button></Link>
        </div>

        <div className="UsersPosts">
        {!_.isEmpty(posts) ? Object.values(posts).map(post => <UserPost title={post.title} description={post.description} 
             bgImg={post.bgImg ? post.bgImg.data : null} postId={post._id} userProfile="profile" onEditClick={this.onEditClick} 
             onDeleteClick={this.onDeleteClick} key={post._id} uname={this.props.user.name}
             avatar = {this.props.user.avatar ? this.props.user.avatar : {} }/>)
             :   <h2>Fetching Your Data....</h2>} 
        </div>

        </div>  

      </div>
    );
};
}

const mapStateToProps = (state) => {
   return { user : state.auth.user, posts : state.blogs.userPosts }
}

export default connect(mapStateToProps,{fetchUser,fetchUserPosts})(Profile);