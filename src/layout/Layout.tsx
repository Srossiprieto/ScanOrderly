import React, { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className="top-0 max-w-screen-lg mx-auto">
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen  max-w-screen-lg mx-auto" >{children}</main>
      <footer className="max-w-screen-lg mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
