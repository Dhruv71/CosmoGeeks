import React from 'react';
import { Link } from "react-router-dom";
import './userHeader.css';

import Feeds from './icons/feeds.svg';
import Explore from './icons/explore.svg';
import Groups from './icons/groups.svg';
import Profile from './icons/profile.svg';


export const UserHeader = (props) =>{
        return(
        <div className="options-container">

        <Link to={"/user"}>
        <div className="feeds">
        <img src={Feeds} alt="feeds"></img>
        </div>
        </Link>

        <div className="user-line"></div>

        <Link to={"/explore"}>
        <div className="explore">
        <img src={Explore} alt="explore"></img>
        </div>
        </Link>

        <div className="user-line"></div>

        <Link to={"/groups"}>
        <div className="groups">
        <img src={Groups} alt="groups"></img>
        </div>
        </Link>

        <div className="user-line"></div>
        
        <Link to={"/profile"}>
        <div className="profile">
        <img src={Profile} alt="profile"></img>
        </div>
        </Link>

        </div>
        );
};

export default UserHeader;