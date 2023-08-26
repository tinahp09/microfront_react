import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
export default function Loader(props) {
  return (
    <ThreeDots
      height='80'
      width='80'
      radius='9'
      color='#f47458'
      ariaLabel='three-dots-loading'
      wrapperStyle={{}}
      wrapperClassName=''
      visible={true}
    />
  )
}
