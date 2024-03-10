import { useState } from 'react'

import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home'
import DetailPage from './pages/detail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,

    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />

  )
}

export default App
