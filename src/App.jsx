import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

function App() {

  return (
    <>  <RouterProvider router={router} >
        <Home />
        </RouterProvider>
    </>
  )
}

export default App
