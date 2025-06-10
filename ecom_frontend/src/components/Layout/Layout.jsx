import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SubscribeNL from '../subscribeNL/SubscribeNL'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
       <SubscribeNL/>
      <Footer />
    </div>
  )
}

export default Layout
