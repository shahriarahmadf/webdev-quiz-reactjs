import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="website-title">
                    <h1>WebDev Test</h1>
                </div>
                <div className="navbar">
                        
                    <NavLink className ={`tab ${({isActive}) => isActive ? 'active-tab' : undefined}`} to='/'><h3>Home</h3></NavLink>
                    <NavLink className={`tab ${({isActive}) => isActive ? 'active-tab' : undefined}`} to='/statistics'><h3>Statistics</h3></NavLink>
                    <NavLink className={`tab ${({isActive}) => isActive ? 'active-tab' : undefined}`} to='/blogs'><h3>Statistics</h3></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;