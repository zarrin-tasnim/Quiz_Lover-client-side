import React from 'react';
import './Home.css';
import Images from '../Images/quiz-2.jpg'
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
const Home = () => {
    const quizes = useLoaderData();
    // console.log(quizes);
    const quiz = quizes.data;
    console.log(quiz);
    return (
        <div>
            {/* Banner started */}
            <div className="row banner">
                    <div className="col-md-4 col-lg-6">
                        <div className="banner-text">
                            <h1>Welcome to Quiz Lover</h1>
                            <h2>Prepare With Confidence</h2>
                            <p>Prepare every exams with high yield MCQ's.</p>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <div className="banner-img">
                            <img src={Images} class="img-fluid" alt="..." />
                        </div>
                    </div>
            </div>
            {/* Banner ended */}
            {/* Topic name started */}
            <div className="topicsName name-container">
                {/* <h2>Length: {quiz.length}</h2> */}
                {
                    quiz.map(quizname => <QuizTopic key={quizname.id} quizname={quizname}></QuizTopic>)
                }
            </div>
            {/* Topic name ended */}
        </div>
    );
};

export default Home;