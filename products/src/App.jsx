import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/products'
import SingleProduct from './pages/single-product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/product',
    element: <SingleProduct />,
  },
])
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
