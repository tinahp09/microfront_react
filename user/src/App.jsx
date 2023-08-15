import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'host/components/Header'
import Login from './components/Login'
import './index.css'

const App = () => (
  <div className='container'>
    {/* <Header /> */}
    <Login />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
