import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import errorimg from './components/img/github.png'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import Send from './components/Send/Send'
import Sect3 from './components/Sect3/Sect3'
import Contacts from './components/Contact/Contact'
import Uslugi from './components/Uslug/Uslugi'
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/Доставка' element={<Send/>} />
          <Route path='/Лизинг' element={<Sect3/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/Услуги' element={<Uslugi/>} />
        </Route>
        <Route path='*' element={<div className='m bg-[#a7e9e9] h-[100vh]'>
          <h1 style={{ fontSize: '3em', textAlign: 'center' }}>ERROR 404</h1>
          <img className='m-auto my-[5vh]' src={errorimg} alt="" /></div>} />
      </Routes>
    </div >
  );
}

export default App;
