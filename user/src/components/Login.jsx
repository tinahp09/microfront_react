import React, { useState } from 'react'
import styles from '../styles/Auth.module.scss'
import { login } from '../utilities/AuthService'

export default function Login() {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className={styles.Login}>
      <h5 className='text-center'>Welcome Tina</h5>
      <form className={styles.Form}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <label htmlFor='username'>Username: </label>
        <input
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          type='text'
        />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <label htmlFor='password'>Password: </label>
        <input
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          type='password'
        />
        <button onClick={() => login(name, password, email, username)}>
          Sign In
        </button>
      </form>
    </div>
  )
}
