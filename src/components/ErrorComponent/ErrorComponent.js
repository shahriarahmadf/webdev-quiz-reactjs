import React from 'react';
import Header from '../Header/Header';
import './ErrorComponent.css'

const ErrorComponent = () => {
    return (
        <div>
            <Header></Header>

            <div className="error">
                <h2>Wrong Direction</h2>
                <h3>Error 404</h3>
            </div>
        </div>
    );
};

export default ErrorComponent;