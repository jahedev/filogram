import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Login'
import LoginSuccess from './LoginSuccess'
import Home from './Home'
import SignUp from './SignUp'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/login-success' element={<LoginSuccess />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
