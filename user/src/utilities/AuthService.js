import axios from 'axios'
const AUTH_API_URL = 'http://localhost:3000/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export async function login(name, password, email, username) {
  const data = {
    name: name,
    password: password,
    email: email,
    username: username,
  }
  console.log(name, password, email, username)
  try {
    const response = await axios.post(`${AUTH_API_URL}/register`, data)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
  localStorage.setItem('Token', response.data.access_token)
  cookies.set('Token', response.data.access_token, { path: '/' })
}
