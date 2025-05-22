import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16"> {/* Use Tailwind gray-900 (similar to --background-end-rgb), increased padding py-16 */}
      <div className="container mx-auto px-6 md:px-8"> {/* Increased horizontal padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"> {/* Increased gap */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">CS 9618 Coding Practice</h3> {/* Brighter title text */}
            <p className="text-gray-400 mb-4 text-sm"> {/* Adjusted text color and size */}
              Interactive Python coding practice for Cambridge A Level Computer Science (9618) Paper 4.
            </p>
            <p className="text-gray-500 text-xs"> {/* Adjusted text color and size for copyright */}
              &copy; {new Date().getFullYear()} CS 9618 Practice. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">Quick Links</h4> {/* Brighter text, increased mb */}
            <ul className="space-y-3"> {/* Increased space between links */}
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent-400 transition-colors duration-200"> {/* Updated link colors */}
                  Home
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  Exercises
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  Topics
                </Link>
              </li>
              <li>
                <Link href="/rapid-fire" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  Rapid Fire
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                >
                  Cambridge Spec (9618)
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.python.org/3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                >
                  Python Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://www.python.org/community/forums/" // Changed from realpython to official community forums
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                >
                  Python Community
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/features/copilot" // Example relevant tool
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                >
                  Developer Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">Key Topics</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/topics/4" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  Data Structures
                </Link>
              </li>
              <li>
                <Link href="/topics/5" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  OOP
                </Link>
              </li>
              <li>
                <Link href="/topics/6" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  Sorting & Searching
                </Link>
              </li>
              <li>
                <Link href="/topics/8" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                  Recursion
                </Link>
              </li>
              <li>
                <Link href="/topics/2" className="text-gray-400 hover:text-accent-400 transition-colors duration-200"> {/* Changed link from /7 to /2 for Algorithms */}
                  Algorithms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-700 text-center text-gray-500 text-sm"> {/* Increased mt, pt, new border color */}
          <p>
            This website is an independent project and is not affiliated with Cambridge Assessment International Education.
          </p>
          <p className="mt-2">Built with Next.js and Tailwind CSS. Hosted on Vercel.</p>
        </div>
      </div>
    </footer>
  );
}