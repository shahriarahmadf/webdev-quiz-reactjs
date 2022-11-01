import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Options from '../Options/Options';
import './Question.css'


const Question = ({question, index}) => {
    const {options, correctAnswer} = question;
    //console.log(question);
    return (
        <div className='ques'>
            <p>{index}. {question.question.slice(3,-4)}</p>

            {
                options.map(option => 
                <Options
                    key={(options.indexOf(option)+1)}
                    index = {(options.indexOf(option)+1)}
                    option={option}
                ></Options>)
            }
        </div>
    );
};

export default Question;