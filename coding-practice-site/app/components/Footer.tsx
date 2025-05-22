import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CS 9618 Coding Practice</h3>
            <p className="text-blue-300 mb-4">
              Interactive Python coding practice for Cambridge A Level Computer Science (9618) Paper 4
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Cambridge A Level CS Coding Practice
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="text-blue-300 hover:text-white transition-colors">
                  Exercises
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-blue-300 hover:text-white transition-colors">
                  Topics
                </Link>
              </li>
              <li>
                <Link href="/rapid-fire" className="text-blue-300 hover:text-white transition-colors">
                  Rapid Fire Mode
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  Cambridge Specification
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.python.org/3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  Python Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://realpython.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  Real Python Tutorials
                </a>
              </li>
              <li>
                <a 
                  href="https://stackoverflow.com/questions/tagged/python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  Stack Overflow - Python
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Paper 4 Topics</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/topics/4" className="text-blue-300 hover:text-white transition-colors">
                  Data Structures
                </Link>
              </li>
              <li>
                <Link href="/topics/5" className="text-blue-300 hover:text-white transition-colors">
                  Object-Oriented Programming
                </Link>
              </li>
              <li>
                <Link href="/topics/6" className="text-blue-300 hover:text-white transition-colors">
                  Sorting and Searching
                </Link>
              </li>
              <li>
                <Link href="/topics/8" className="text-blue-300 hover:text-white transition-colors">
                  Recursion
                </Link>
              </li>
              <li>
                <Link href="/topics/7" className="text-blue-300 hover:text-white transition-colors">
                  File Processing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-900 text-center text-gray-400">
          <p>
            Designed to help students excel in Paper 4 programming challenges.
          </p>
        </div>
      </div>
    </footer>
  );
}