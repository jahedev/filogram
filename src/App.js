import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Login'
import LoginSuccess from './LoginSuccess'
import Profile from './Profile'
import Home from './Home'
import Signup from './Signup'

export default class App extends Component {
  render() {
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
    )
  }
}
