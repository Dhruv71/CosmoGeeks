import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = ({user}) => {

    return(
       <div className="header">
           
           <div className="logo">
            <Link to="/" >CosmoGeeks</Link>
           </div>

           <div className="menu-list">
               <Link to="/about" className="menu">About</Link>
               <div className="menu">Blogs</div>

               { 
               !user ? <Link to="/signup" className="menu">Signup</Link> : null
               }
               
               { 
               !user ? <Link to="/login" className="menu">Login</Link>  :
                <Link to="/logout" className="menu" >Logout</Link>
               }

           </div>
       </div>
    );
}
//
export default Header;