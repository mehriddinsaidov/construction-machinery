import { Route, Routes } from 'react-router-dom';
import './App.css';
import errorimg from './components/img/github.png'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>} >
        
      </Route>
      <Route path='*' element={<div className='m bg-[#a7e9e9] h-[100vh]'>
        <h1 style={{ fontSize: '3em', textAlign: 'center' }}>ERROR 404</h1>
        <img className='m-auto my-[5vh]' src={errorimg} alt="" /></div>} />
    </Routes>
    </div >
  );
}

export default App;
