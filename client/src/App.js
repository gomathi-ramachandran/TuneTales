import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Write from './Pages/Write';
import Single from './Pages/Single';



const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};



function App() {
  return (
    <div className='app'>
      <div className='container'>
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={<Write/>} />
          </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
        </Router>

        </div>
      </div>
  );
}


export default App;
