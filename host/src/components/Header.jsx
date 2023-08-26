import React, { useEffect } from 'react'
import Cookies from 'universal-cookie'
import styles from '../styles/Header.module.scss'

function Header() {
  const cookies = new Cookies()
  const name = cookies.get('Name')
  const token = cookies.get('Token')

  useEffect(() => {
    if (!token) {
      window.location.replace('http://localhost:8081/login')
    }
  }, [token])

  function logout() {
    cookies.remove('Token')
    window.location.replace('http://localhost:8081/login')
  }
  return (
    <header>
      <div className={styles.items}>
        <p>
          Welcome Dear <span className={styles.name}>{name}</span>
        </p>
        <div>
          <a className={styles.link} onClick={() => logout()}>
            Logout
          </a>
          {/* <a
            className={styles.link}
            onClick={() =>
              window.location.replace('http://localhost:8081/login')
            }
          >
            {' '}
            login
          </a> */}
        </div>
      </div>
    </header>
  )
}

export default Header
