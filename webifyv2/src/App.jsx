import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home, Landing } from './pages';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
