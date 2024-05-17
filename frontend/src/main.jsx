import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Register from './components/Register/Register.jsx';

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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
