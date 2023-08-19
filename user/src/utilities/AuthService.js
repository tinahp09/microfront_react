import axios from 'axios'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const cookies = new Cookies()
const AUTH_API_URL = 'http://localhost:3000/auth'
export async function register(data) {
  try {
    const response = await axios.post(`${AUTH_API_URL}/register`, data)
    localStorage.setItem('Token', response.data.result.token)
    cookies.set('Token', response.data.result.token, { path: '/' })
    console.log(response.status)

    if (response.status === 200) {
      Swal.fire({
        title: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok',
      })

      setTimeout(() => {
        window.location.replace('/login')
      }, 1000)
    }
  } catch (err) {
    if (err.response.status === 500) {
      Swal.fire({
        title: 'Please Enter the correct data',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }
}
export async function login(data) {
  try {
    const response = await axios.post(`${AUTH_API_URL}/login`, data)
    localStorage.setItem('Token', response.data.result.token)
    cookies.set('Token', response.data.result.token, { path: '/' })

    if (response.status === 200) {
      Swal.fire({
        title: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok',
      })
      cookies.set('Name', response.data.result.name, { path: '/' })
      setTimeout(() => {
        window.location.replace('http://localhost:8080/')
      }, 1000)
    }
  } catch (err) {
    if (err.response.status === 500) {
      Swal.fire({
        title: 'Please Enter the correct data',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }
}
