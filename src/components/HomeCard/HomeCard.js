import React from 'react';
import './HomeCard.css';
import '../../AdobeStock_241083104-1400x934.jpg';

const HomeCard = () => {
    const img = '../../AdobeStock_241083104-1400x934.jpg';
    return (
        <div className='home-card'>
            <div className="card-text">
                <h1>Sharpen your web development knowledge through Quizzes</h1>
            </div>
            <div className="card-image">
                <img src='https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-1024x683.jpg?ezimgfmt=ngcb1/notWebP' alt="" />
            </div>
        </div>
    );
};

export default HomeCard;