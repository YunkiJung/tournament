import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar.js';

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<div>home page</div>}></Route>
        <Route path='/login' element={<div>login page</div>}></Route>
        <Route path='/register' element={<div>register page</div>}></Route>
        <Route path='/activelist' element={<div>active tournaments page</div>}></Route>
        <Route path='/pastlist' element={<div>past tournaments page</div>}></Route>
        <Route path='/create' element={<div>create new tournament page</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
