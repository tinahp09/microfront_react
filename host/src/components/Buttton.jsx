import React from 'react'
import useStore from '../zustand/store'

export default function Button() {
  const { count, increment } = useStore()
  return (
    <div>
      <button onClick={increment}>Add</button>
      <p>count: {count}</p>
    </div>
  )
}
