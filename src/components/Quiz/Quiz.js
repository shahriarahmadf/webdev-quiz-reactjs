import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {id,name,logo,total} = quiz;

    return (
        <div className='quiz'>
            <h2>{name}</h2>
            <img src={logo} alt="" />
            <h4>Total Questions: {total}</h4>

            <Link to={`/quiz/${id}`}>
            <button className="start-quiz">
                <b>Start Quiz</b>
            </button>
            </Link>
        </div>
    );
};

export default Quiz;