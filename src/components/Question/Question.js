import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Options from '../Options/Options';
import './Question.css'
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';


const Question = ({question, index}) => {
    const {options, correctAnswer} = question;
    //console.log(question);
    return (
        <div className='ques'>
            <p>{index}. {question.question.slice(3,-4)}</p>

            <EyeIcon 
                onClick={() => 
                    toast.info(`${correctAnswer}`, { 
                        position: toast.POSITION.TOP_CENTER
                        })} 
                className='eye'></EyeIcon>

            
            {
                options.map(option => 
                <Options
                    key={(options.indexOf(option)+1)}
                    index = {(options.indexOf(option)+1)}
                    option={option}
                    correctAnswer = {correctAnswer}
                ></Options>)
            }
        </div>
    );
};

export default Question;