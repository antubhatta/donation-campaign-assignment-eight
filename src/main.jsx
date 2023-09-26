import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import CardDetails from './Component/CardDetails/CardDetails';
import ErrorPage from './Component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader:()=>fetch('../donate.json')
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/details/:id",
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('../donate.json')
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
