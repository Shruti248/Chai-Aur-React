import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header/>

            {/* Outlet makes it dynamic -- the base header & footer remains same throuyghout the application & outlet cahnges teh pages dynamically acc to needs  */}

           <main> <Outlet/></main>

            <Footer/>
        </>
    )
}

export default Layout
