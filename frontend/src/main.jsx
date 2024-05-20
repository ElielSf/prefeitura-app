import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css';

import App from './App.jsx';
import Register from './components/Register/Register.jsx';
import Control from './components/Control/Control.jsx';
import Modification from './components/Modification/Modification.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //componente de erro
    //errorElement: < />
    children: [
      {
        path: '/cadastrar',
        element: <Register />
      },
      {
        path: '/controle',
        element: <Control />
      },
      {
        path: '/modificar',
        element: <Modification />      
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
