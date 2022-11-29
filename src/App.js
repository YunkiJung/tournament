import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ActiveList from './pages/ActiveList';
import PastList from './pages/PastList';
import Create from './pages/Create';
import Detail from './pages/Detail';
import MyCarousel from './layout/Carousel';

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={ 
          <>
            <MyCarousel></MyCarousel>
            <Home></Home>
          </> 
        }></Route>
        <Route path='/home' element={ 
          <>
            <MyCarousel></MyCarousel>
            <Home></Home>
          </> 
        }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/register' element={ <Register></Register> }></Route>
        <Route path='/activelist' element={ <ActiveList></ActiveList> }></Route>
        <Route path='/pastlist' element={ <PastList></PastList> }></Route>
        <Route path='/create' element={ <Create></Create> }></Route>
        <Route path='/detail/:id' element={ <Detail></Detail> }></Route>
      </Routes>
    </>
  );
}

export default App;
