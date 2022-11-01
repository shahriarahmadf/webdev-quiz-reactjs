import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div>
            <h2>This is Home</h2>

            <div className="quiz-container">
            {
                quizzes.data.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
            </div>
            

        </div>
    );
};

export default Home;