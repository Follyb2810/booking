import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Shared/Layout.tsx'
import About from './components/Pages/About.tsx'
import BookingPage from './components/Pages/Booking.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
       <Route path='' element={<App />}/>

       <Route path='/booking' element={<BookingPage />}>
           <Route path=':service' element={<About />}/>
       </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
