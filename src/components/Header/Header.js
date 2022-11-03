import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="website-title">
                    <h1>Web Dev Quiz</h1>
                </div>
                <div className="navbar">
                        
                    <NavLink                    
                    className =
                    {`tab
                    
                    ${({isActive}) => isActive ? 'active' : 'inactive'}
                    
                    `} to='/home'><h3>Home</h3></NavLink>

                    <NavLink 
                    className={`tab ${({isActive}) => isActive ? 'active-tab' : undefined}`} to='/statistics'><h3>Statistics</h3></NavLink>
                    <NavLink
                    className={`tab ${({isActive}) => isActive ? 'active-tab' : undefined}`} to='/blogs'><h3>Blogs</h3></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;