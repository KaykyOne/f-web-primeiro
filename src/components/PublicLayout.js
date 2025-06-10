import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footers from './Footers';

export default function PublicLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footers />
    </>
  );
}
