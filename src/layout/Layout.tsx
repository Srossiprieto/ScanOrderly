import React, { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (

      <div className="relative min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
};

export default Layout;