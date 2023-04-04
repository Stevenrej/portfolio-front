import React, { useEffect } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const textColor = "text-white";

  return (
    <div className={`fixed inset-0 overflow-y-auto border m-10 border-white-400 ${textColor}`}>
      <div className="container ml-auto p-4 m-4">
        <Navigation/>
        <div className="flex justify-end">
          <main className="w-2/3 text-right">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
