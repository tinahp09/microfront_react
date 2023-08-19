import React, { useState } from 'react'
import styles from '../styles/Auth.module.scss'
import { login } from '../utilities/AuthService'
import { Link } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const data = {
    password: password,
    username: username,
  }

  const loginUser = () => {
    login(data)
  }
  return (
    <div className={styles.Login}>
      <div className={styles.Left}>
        <div className={styles.Form}>
          <label htmlFor='username'>Username: </label>
          <input
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            type='text'
          />

          <label htmlFor='password'>Password: </label>
          <input
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            type='password'
          />
          <button onClick={() => loginUser()}>Sign In</button>

          <p>
            Dont have an account?
            <Link className={styles.link} to={'/'}>
              register
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.Right}></div>
    </div>
  )
}
