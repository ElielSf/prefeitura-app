import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Control from './components/Control/Control.jsx';
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: < Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: '/cadastrar',
        element: <Register />,
        errorElement: <Error />
      },
      {
        path: '/controle',
        element: <Control />,
        errorElement: <Error />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
