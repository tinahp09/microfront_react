import React from 'react'
import Default from '../layouts/Default'
import Products from 'products/components/Products'

export default function Home() {
  return (
    <Default>
      <div>
        <Products />
      </div>
    </Default>
  )
}
