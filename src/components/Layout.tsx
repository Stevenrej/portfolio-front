import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  setCurrentPage: React.Dispatch<React.SetStateAction<"projects" | "about" | "contact">>;
  currentPage: "projects" | "about" | "contact";
}


const Layout: React.FC<LayoutProps> = ({ children, setCurrentPage, currentPage }) => {

  const textColor = "text-white";

  return (
    <div className={`fixed inset-0 overflow-y-auto border m-6 border-white-400 ${textColor}`} id="scroll">
      <div className="container ml-auto p-1 m-1">
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="flex justify-end">
          <main className="w-3/4 text-right">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
