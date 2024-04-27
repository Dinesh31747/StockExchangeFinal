import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Stocks from './components/Stocks';


/** auth middleware */
import NavBar from './components/Navbar';
import Price from './components/Price';
import About from './components/About';
import TradePage from './components/TradingViewWidget';
import Heatmap from './components/Heatmap';
import ChangePassword from './components/ChangePassword';
import Success from './components/Success'
import NavAfterLogin from './components/NavAfterLogin';
import AfterHome from './components/AfterHome';


/** root routes */
const router = createBrowserRouter([
    {
        path:'/trade',
        element:<TradePage/>
    },
    {
        path:'/after',
        element:<AfterHome/>
    },
    {
        path:'/Registersuccess',
        element:<Success/>
    },
    {
        path:'/navafter',
        element:<NavAfterLogin/>
    },
    {
        path: '/',
        element : <Homepage/>
    },
    {
        path: '/nav',
        element: <NavBar/>
    },
    {
        path: '/stocks',
        element: <Stocks/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/price',
        element: <Price/>
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/changepassword',
        element : <ChangePassword />
    },
    {
        path : '/heatmap',
        element : <Heatmap/>
    },

])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
