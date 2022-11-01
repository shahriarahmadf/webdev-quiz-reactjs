import React from 'react';
import './Questions.css'
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const quizQuestions = useLoaderData();
    const {logo,name,questions, total} = quizQuestions.data;

    
    return (
        <div className='test'>
            <div className="test-heading">
                <img src={logo} alt="" />
                <h2>Test Topic: {name}</h2>
                <h4>Total Number of Questions: {total}</h4>
            </div>
            <div className="questions">
                {
                    questions.map(question => 
                        <Question
                            key={question.id}
                            question={question}
                            index = {(questions.indexOf(question)+1)}
                        ></Question>
                        )
                }
            </div>
        </div>
    );
};

export default Questions;