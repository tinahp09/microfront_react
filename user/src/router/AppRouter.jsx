// AppRouter.jsx

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import components for routing
import Register from '../components/Register'
import Login from '../components/Login'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' component={Register} />
        <Route path='/login' component={Login} />
      </Routes>
    </Router>
  )
}

export default AppRouter
