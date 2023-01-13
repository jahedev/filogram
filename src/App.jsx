import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import LoginSuccess from './components/login/LoginSuccess';
import Signup from './components/login/Signup';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/login-success' element={<LoginSuccess />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
