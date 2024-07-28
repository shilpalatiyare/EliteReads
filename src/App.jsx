import React from 'react';
import Home from './home/Home';
import {Route,Routes} from 'react-router-dom';
import Genres from './Genres/Genres';
import SignUp from './components/SignUp';
       

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white' >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Genre" element={<Genres/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </div>
        
    </>
  )
};

export default App
