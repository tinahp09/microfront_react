import useSWR from 'swr'
import axios from 'axios'
import { Api } from '../../api'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export function useFetchAllProducts() {
  const { data, error } = useSWR(
    `${Api.defaults.baseURL}/products/category/electronics`,
    fetcher
  )
  return {
    allProducts: data,
    isLoading: !error && !data,
    isError: error,
  }
}
