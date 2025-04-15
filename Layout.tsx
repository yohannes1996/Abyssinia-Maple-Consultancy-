
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <header className="bg-gradient-to-r from-green-600 to-red-500 text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xl">🇪🇹</span>
          <h1 className="text-xl font-bold">Abyssinia Maple Consultancy</h1>
          <span className="text-xl">🇨🇦</span>
        </div>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home / መነሻ</Link>
          <Link to="/about" className="hover:underline">About / ስለእኛ</Link>
          <Link to="/services" className="hover:underline">Services / አገልግሎቶች</Link>
          <Link to="/contact" className="hover:underline">Contact / አግኙን</Link>
        </nav>
      </header>

      <main className="flex-1 p-6">{children}</main>

      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        &copy; 2025 Abyssinia Maple Consultancy | 🇪🇹 ኢትዮጵያ & 🇨🇦 ካናዳ
      </footer>
    </div>
  );
}
