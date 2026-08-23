import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, HomeLogo } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <HomeLogo setSidebarOpen={setSidebarOpen} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
