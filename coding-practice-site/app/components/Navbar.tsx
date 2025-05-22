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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-gray-900/80 shadow-2xl backdrop-blur-lg py-3' // Darker bg, more blur, stronger shadow, adjusted padding
          : 'bg-transparent py-5' // Increased initial padding
      }`}
    >
      <div className="container mx-auto px-6 md:px-8"> {/* Consistent padding with footer */}
        <div className="flex justify-between items-center">
          {/* Logo and site name */}
          <Link href="/" className="flex items-center group"> {/* Added group for hover effects */}
            <Image
              src="/logo.png" // Ensure this logo is suitable for dark backgrounds
              alt="CS 9618 Logo"
              width={42} // Slightly larger logo
              height={42}
              className="mr-3 transition-transform duration-300 group-hover:scale-110" // Hover effect on logo
            />
            <div>
              <div className="font-bold text-gray-100 text-xl group-hover:text-accent-400 transition-colors duration-200">CS 9618</div> {/* Brighter, larger, hover effect on title */}
              <div className="text-xs text-gray-400 group-hover:text-accent-500 transition-colors duration-200">Coding Practice</div> {/* Subtler text, hover effect */}
            </div>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7"> {/* Adjusted spacing for links */}
            <Link href="/" className="text-gray-300 hover:text-accent-400 font-medium transition-colors duration-200">Home</Link>
            <Link href="/exercises" className="text-gray-300 hover:text-accent-400 font-medium transition-colors duration-200">Exercises</Link>
            <Link href="/topics" className="text-gray-300 hover:text-accent-400 font-medium transition-colors duration-200">Topics</Link>
            <Link href="/rapid-fire" className="text-gray-300 hover:text-accent-400 font-medium transition-colors duration-200">Rapid Fire</Link>
            <Link href="/about" className="text-gray-300 hover:text-accent-400 font-medium transition-colors duration-200">About</Link>
            <Link 
              href="/account" 
              className="btn-secondary text-sm px-4 py-2" // Used btn-secondary, adjusted padding for navbar
            >
              My Progress
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-200 hover:text-accent-400 transition-colors duration-200" // Consistent hover color
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7" // Slightly larger icon
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> // Alternative hamburger icon
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-gray-800/95 backdrop-blur-md rounded-lg p-5 shadow-xl animate-fade-in"> {/* Darker bg, more padding, stronger shadow */}
            <div className="flex flex-col space-y-2"> {/* Reduced space-y for tighter mobile menu */}
              {[ // Array for cleaner link mapping
                { href: "/", label: "Home" },
                { href: "/exercises", label: "Exercises" },
                { href: "/topics", label: "Topics" },
                { href: "/rapid-fire", label: "Rapid Fire" },
                { href: "/about", label: "About" },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-200 hover:bg-accent-700/30 hover:text-accent-300 block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200" // Larger clickable area, hover bg and text color
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/account"
                className="btn-secondary w-full mt-3 text-center py-2.5" // Full width button, ensure padding matches btn-secondary
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