import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizTopicSingle from './components/QuizTopicSingle/QuizTopicSingle';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/quiz-topic/:quizID',
          loader: async ({ params }) => {
            //  console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`);
          },
          element: <QuizTopicSingle></QuizTopicSingle>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        { path: '*', element: <div> Page not foundddd</div> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
