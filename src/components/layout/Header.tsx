import React from 'react';
import { Menu, Moon, Sun, User } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Astro Insights
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <button onClick={() => setIsDark(!isDark)} className="p-2 hover:bg-gray-100 rounded-full">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="/login" className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/blog" className="block py-2">Blog</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
            <Link href="/login" className="block py-2">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
}