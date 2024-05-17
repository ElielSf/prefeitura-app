import Header from './components/Header/Header.jsx';

import { Outlet } from 'react-router-dom';

import './css/App.css';

export default function App() {
  return (
      <div>
        <Header />
        <Outlet />
      </div>
  )
}

//<Routes path='/' element={}/>
