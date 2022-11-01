import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="website-title">
                    <h1>WebDev Test</h1>
                </div>
                <div className="navbar">
                        
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;