import axios from 'axios'
const baseURL = 'https://fakestoreapi.com'

const Api = axios.create({
  baseURL: baseURL,
})

export { Api }
