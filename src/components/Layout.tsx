import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  setCurrentPage: React.Dispatch<React.SetStateAction<"projects" | "about" | "contact">>;
  currentPage: "projects" | "about" | "contact";
}


const Layout: React.FC<LayoutProps> = ({ children, setCurrentPage, currentPage }) => {

  const textColor = "text-white";

  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  let width;

  if (isMobile) {
    width = "w-full";
  } else {
    width = "w-3/4";
  }

  return (
<div className={`fixed inset-0 overflow-auto hide-scrollbar border m-7 border-white-400 ${textColor}`} id="scroll">
      <div className="container ml-auto p-1 m-1">
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="flex justify-end">
          <main className={`${width} text-right`}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
