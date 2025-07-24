// src/Layout.js
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-green-800">
          ClubTrace
        </Link>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
        </nav>
      </header>
      {children}
    </>
  );
}