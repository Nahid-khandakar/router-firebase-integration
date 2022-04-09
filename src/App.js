
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Navbar from './component/Navbar/Navbar';
import Register from './component/Register/Register'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

      </Routes>
    </div>
  );
}

export default App;
