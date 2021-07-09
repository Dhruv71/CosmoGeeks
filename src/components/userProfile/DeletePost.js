import React from 'react';
import '../login/logout.css';
import { deletePost } from '../../actions'
import { connect } from "react-redux";

const DeletePost = (props) => {
    const scrollToTop = () =>{
        window.scroll(0,0)
    }
    
    const onLogOutClick = async () => {
        const id = props.match.params.id
        try {
          props.deletePost(id)  
        } catch (error) {
            console.log(error);
        }
    }
    
    const onNotNowClick = () => {
        props.history.replace("/profile")
    }
    return( 
        <div className="logout-page">
                {scrollToTop()}
                <div className="logout-Container">
                <div className="logout-caption">Do you want to delete <b>"{props.match.params.title.replace(/-/g," ")}"</b> permenanty from your account?</div>
                <button className="logout-primary" style={{backgroundColor:"#d31736"}} onClick={onLogOutClick}>Yes, Delete</button><br></br>
                <button className="logout-secondary" onClick={onNotNowClick}>No, Not Now</button>
                </div>
        </div>
            
          );
}

export default connect(null,{deletePost})(DeletePost);