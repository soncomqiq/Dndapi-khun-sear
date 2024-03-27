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
      path: "/detail/:index",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className='bg-[url("/image/back1.jpg")] min-h-[100vh] w-full '>
      <RouterProvider router={router} />
    </div>


  )
}

export default App
