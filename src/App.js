import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
        },
        {
          path: '/:quizId',
          loader: async( {params} ) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Questions></Questions>,
        }
      ]
    },
    {
      path: '*', 
      element: <Home></Home>,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
