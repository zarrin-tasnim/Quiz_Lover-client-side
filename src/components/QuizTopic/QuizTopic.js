import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css';


const QuizTopic = ({ quizname }) => {
    const { id, name, logo, total } = quizname;
    console.log(id);
    return (
        <div>
            <div className="card quizTopicName" >
                <img  src={logo} className="card-img-top img-fluid img-bg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    <h5>Total: {total}</h5>
                    <Link to={`/quiz-topic/${id}`}><a className="btn btn-primary">Go somewhere</a></Link>
                    </div>
            </div>
        </div>
    );
};

export default QuizTopic;