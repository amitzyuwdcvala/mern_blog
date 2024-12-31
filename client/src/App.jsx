import { useState } from 'react';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import ProfilePage from './pages/Profile.jsx';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
function App() {

  return (
    <div className='bg-dark'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
