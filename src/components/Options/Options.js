import React from 'react';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Options = ({sTopicQuestion,optionHandle, option }) => {
   
   
   
    return (
        <div className='option1'>
            <button onClick={()=>optionHandle(option)}  className='btn btn-dark'> {option}</button>
        </div>
    );
};

export default Options;