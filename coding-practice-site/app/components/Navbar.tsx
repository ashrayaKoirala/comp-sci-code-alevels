'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-950/90 shadow-lg backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and site name */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CS 9618 Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <div>
              <div className="font-bold text-white text-lg">CS 9618</div>
              <div className="text-xs text-blue-300">Coding Practice</div>
            </div>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">Home</Link>
            <Link href="/exercises" className="text-white hover:text-blue-300 transition-colors">Exercises</Link>
            <Link href="/topics" className="text-white hover:text-blue-300 transition-colors">Topics</Link>
            <Link href="/rapid-fire" className="text-white hover:text-blue-300 transition-colors">Rapid Fire</Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors">About</Link>
            <Link 
              href="/account" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              My Progress
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-900/95 backdrop-blur-md rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-white hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/exercises" 
                className="text-white hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Exercises
              </Link>
              <Link 
                href="/topics" 
                className="text-white hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Topics
              </Link>
              <Link 
                href="/rapid-fire" 
                className="text-white hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Rapid Fire
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/account" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                My Progress
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}