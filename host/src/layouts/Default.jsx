import React from 'react'
import Header from '../components/Header'

export default function Default({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
