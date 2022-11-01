import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Options.css';

const Options = ({index, option, correctAnswer}) => {
    //console.log(correctAnswer);
    if(index == 1){
        index = 'a';
    }
    else if(index == 2){
        index = 'b';
    }
    else if(index == 3){
        index = 'c';
    }
    else if(index == 4){
        index = 'd';
    }
    const inputAnswer = (ans) => {
        //console.log(option);
        if (ans === correctAnswer){
            //console.log('correct answer');
            toast.success('Correct Answer', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
            toast.error('Wrong Answer', {
                position: toast.POSITION.TOP_CENTER
            });        
        }
    }
    
    return (
        <button onClick={() => inputAnswer(option)} className='options'>
            <p>
                ({index}) {option}
            </p>
            <ToastContainer></ToastContainer>
        </button>
    
    );
};

export default Options;