import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const quizQuestions = useLoaderData();
    console.log(quizQuestions.data);
    const {logo,name,questions, total} = quizQuestions.data;
    return (
        <div>
            <div className="test-heading">
                <h2>Test Topic: {name}</h2>
            </div>
        </div>
    );
};

export default Questions;