import logo from './logo.svg';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
