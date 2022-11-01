import React from 'react';
import './Options.css'

const Options = ({index, option}) => {
    //console.log(index);
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

    return (
        <p className='options'>
            ({index}) {option}
        </p>
    );
};

export default Options;