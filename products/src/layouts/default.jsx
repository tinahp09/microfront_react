import React from 'react'
import Header from 'host/components/Header'

export default function Default({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
