import React from 'react';
import './logout.css'
import { trySignOut } from '../../actions'
import { connect } from "react-redux";

const Logout = (props) => {
    const onLogOutClick = async () => {
        try {
          props.trySignOut()  
        } catch (error) {
            console.log(error);
        }
    }
    
    const onNotNowClick = () => {
        props.history.replace("/user")
    }

    return( 
    
            <div className="logout-page">

                <div className="logout-Container">

                <div className="logout-caption">Do you really want to logout from the CosmoGeeks?</div>
                <button className="logout-primary" onClick={onLogOutClick}>Yes, Logout</button><br></br>
                <button className="logout-secondary" onClick={onNotNowClick}>No, Not Now</button>
                
                </div>

          </div>
            
          );
}

export default connect(null,{trySignOut})(Logout);