import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'host/components/Header'
import Register from './components/Register'
import './index.css'

const App = () => (
  <div>
    {/* <Header /> */}
    <Register />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
