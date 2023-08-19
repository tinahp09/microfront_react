import React, { useState } from 'react'
import styles from '../styles/Auth.module.scss'
import { register } from '../utilities/AuthService'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import AuthLayout from '../layouts/AuthLayout'

export default function Login() {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const data = {
    name: name,
    password: password,
    email: email,
    username: username,
  }

  const registerUser = () => {
    register(data)
  }
  return (
    // <AuthLayout>
    <div className={styles.Login}>
      <div className={styles.Left}>
        <div className={styles.Form}>
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
          <button onClick={() => registerUser()}>Sign Up</button>

          <p>
            Already have an account?
            <Link className={styles.link} to={'/login'}>
              login
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.Right}></div>
    </div>
    // </AuthLayout>
  )
}
