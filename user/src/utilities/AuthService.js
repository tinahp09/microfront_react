import axios from 'axios'
const AUTH_API_URL = 'http://localhost:3000/auth'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
const cookies = new Cookies()

export async function login(data) {
  console.log(data)
  try {
    const response = await axios.post(`${AUTH_API_URL}/register`, data)
    localStorage.setItem('Token', response.data.result.token)
    cookies.set('Token', response.data.result.token, { path: '/' })

    if (response.status === 200) {
      Swal.fire({
        title: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok',
      })
    }
  } catch (err) {
    console.log(err)
  }
}
