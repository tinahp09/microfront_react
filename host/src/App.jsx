import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import { StoreProvider } from 'store/redux/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
ReactDOM.createRoot(document.getElementById('app')).render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StoreProvider>
)
