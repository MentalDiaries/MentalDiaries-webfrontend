import React from 'react';
import { useState } from 'react';
import './Navigation.css';
import profileImg from './Nav-Assets/user.png'
const Navigation = () => {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
  return (
    <div className="navigation">
    <div className = "action">
      <div onClick={ToggleClass} className="profile"  >
        <img src = {profileImg} />
      </div>
      <div className={isActive ? "menu" : "menu active"}>
      <h3 className='name'>Rohit Jaiswal<br /><span>Meta Data</span></h3>
          <ul>
             <li><img src = {profileImg} /><a href = "#">Profile</a></li>
             <li><img src = {profileImg} /><a href = "#">Profile</a></li>
             <li><img src = {profileImg} /><a href = "#">Profile</a></li>
             <li><img src = {profileImg} /><a href = "#">Profile</a></li>
             <li><img src = {profileImg} /><a href = "#">Profile</a></li>
             <li><img src = {profileImg} /><a href = "#">Profile</a></li>
          </ul>
      </div>
      </div>
    </div>
 
  );
};

export default Navigation;
