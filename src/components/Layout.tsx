import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Title from './Title';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Title />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
