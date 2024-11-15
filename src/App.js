import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  let router=useRoutes(routes)
  
  return (
    <div className='App'>
    <Topbar/>
    <main>
    <Sidebar/>
    {router}
    </main>
    </div>
    
  );
}

export default App;
