import React from 'react';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <SideBar />
      <main className="ml-20">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout