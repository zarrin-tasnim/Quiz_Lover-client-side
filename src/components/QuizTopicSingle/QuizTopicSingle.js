import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopicQuestion from '../SingleTopicQuestion/SingleTopicQuestion';
import './QuizTopicSingle.css';

const QuizTopicSingle = () => {
    const singleTopics = useLoaderData();
    console.log(singleTopics);
    const singleTopic = singleTopics.data.questions;
    console.log(singleTopic);
    return (
        <div className='quizTopicMainDetails'>
            <h1 className='questionTopicName'>{singleTopics.data.name}</h1>
            
            <div className="question-container">
                {
                    singleTopic.map(sTopicQuestion => <SingleTopicQuestion key={sTopicQuestion.id} sTopicQuestion={sTopicQuestion}></SingleTopicQuestion>)
            }
            </div>
        </div>
    );
};

export default QuizTopicSingle;