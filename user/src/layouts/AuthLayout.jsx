import React from 'react'
import Header from 'host/components/Header'

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
