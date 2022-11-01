import React from 'react';
import './Options.css'

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
            console.log('correct answer');
        }
        else{
            console.log('wrong answer');
        }
    }
    
    return (
        <button onClick={() => inputAnswer(option)} className='options'>
            <p>
                ({index}) {option}
            </p>
        </button>
    );
};

export default Options;