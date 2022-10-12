import React from 'react';
import Options from '../Options/Options';
import './SingleTopicQuestion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const SingleTopicQuestion = ({ sTopicQuestion, quizNo }) => {
   
    const { correctAnswer } = sTopicQuestion;
    const option1 = sTopicQuestion.options;

    const optionHandle = (option) => {
        if (option === correctAnswer) {
            toast.success("Correct Answer");
        }
        else {
            toast.error("Wrong Answer"); 
        }
    }

    const notify = () => toast(`${correctAnswer}`, {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        
        <div className='topicQuestion-container'>
            <div className="topicQuestion">
                <div className="quizAndIcon">
                    <h3 className='question'>Quiz {quizNo}:{sTopicQuestion.question}</h3>
                    <FontAwesomeIcon onClick={notify} icon={faEye} />
                    <ToastContainer autoClose={1000} />
                </div>
                <div className="options">
                    
                        {
                        sTopicQuestion.options.map(option => <Options key={option.id} option={option} optionHandle={optionHandle}></Options>)
                        } 
                </div>
            </div>
           
        </div>
        
    );
};

export default SingleTopicQuestion;