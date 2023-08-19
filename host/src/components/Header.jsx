import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
class Header extends React.Component {
  render() {
    const name = cookies.get('Name')
    return (
      <header>
        <h4>Welcome {name}!</h4>
      </header>
    )
  }
}

export default Header
