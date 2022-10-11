import React from 'react';
import './Home.css';
import Images from '../Images/quiz-2.jpg'
const Home = () => {
    return (
        <div>
            
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
            <div className="topicsName">
                
            </div>

        </div>
    );
};

export default Home;