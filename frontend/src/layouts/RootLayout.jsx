import React from 'react';
import NavBar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
}

export default RootLayout