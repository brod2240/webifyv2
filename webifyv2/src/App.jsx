import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home, Landing, Web} from './pages';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/web' element={<Web/>}/>
        </Routes>
      </div>
  );
}

export default App;
