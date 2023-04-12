import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//React router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/Error/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'jobdetails/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('/jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
