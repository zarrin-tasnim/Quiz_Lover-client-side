import React from 'react';
import Options from '../Options/Options';
import './SingleTopicQuestion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
const SingleTopicQuestion = ({ sTopicQuestion, quizNo }) => {

    return (
        
        <div className='topicQuestion-container'>
            <div className="topicQuestion">
                <div className="quizAndIcon">
                    <h3 className='question'>Quiz {quizNo}:{sTopicQuestion.question}</h3>
                    <FontAwesomeIcon  icon={faEye} />
                </div>
                <div className="options">
                    
                        {
                            sTopicQuestion.options.map(option => <Options key={option.id} option={option}></Options>)
                        } 
                </div>
            </div>
        </div>
    );
};

export default SingleTopicQuestion;