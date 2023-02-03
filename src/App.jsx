import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import Send from './components/Send/Send'
import Sect3 from './components/Sect3/Sect3'
import Contacts from './components/Contact/Contact'
import Uslugi from './components/Uslug/Uslugi'
import Catalog from './components/Сatalog/MainCatalog/Catalog'
import User from './components/User/User'
import Erorr from './components/Erorr/Erorr'
import Practic from './components/Practic/Practic'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Доставка' element={<Send />} />
          <Route path='/Лизинг' element={<Sect3 />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/Услуги' element={<Uslugi />} />
          <Route path='/Catalog' element={<Catalog />} />
          <Route path='user/:id' element={<User />} />
        </Route>
        <Route path='*' element={<Erorr/>} />
      </Routes>
    </div >
  );
}

export default App;
