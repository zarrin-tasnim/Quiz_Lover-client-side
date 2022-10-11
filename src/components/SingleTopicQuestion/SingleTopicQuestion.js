import React from 'react';
import Options from '../Options/Options';
import './SingleTopicQuestion.css';

const SingleTopicQuestion = ({ sTopicQuestion, quizNo }) => {

    return (
        
        <div className='topicQuestion-container'>
            <div className="topicQuestion">
                <h3 className='question'>Quiz {quizNo}:{sTopicQuestion.question}</h3>
                
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