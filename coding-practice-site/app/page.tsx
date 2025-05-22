import Link from 'next/link'
import Image from 'next/image'
import { topics } from './data/exercises'

export default function Home() {
  return (
    <div className="min-h-screen text-gray-200"> {/* Removed local background, text-gray-200 (default from globals.css) */}
      {/* Hero Section */}
      <section className="pt-24 md:pt-32"> {/* Increased top padding */}
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-20"> {/* Consistent padding, adjusted py */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in"> {/* Increased mb */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-300 via-primary-300 to-secondary-300 text-transparent bg-clip-text"> {/* Updated gradient to use theme colors */}
                Cambridge A Level Computer Science
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300"> {/* text-gray-300 */}
                Python Coding Practice for Specification 9618
              </h2>
              <p className="text-lg md:text-xl mb-12 text-gray-400"> {/* text-gray-400, adjusted size */}
                Master Paper 4 programming skills through interactive exercises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"> {/* Added justify for mobile */}
                <Link href="/exercises" 
                      className="btn-primary text-lg md:text-xl px-8 py-3.5"> {/* Used btn-primary, adjusted padding/text size */}
                  Start Coding
                </Link>
                <Link href="/rapid-fire" 
                      className="btn-secondary text-lg md:text-xl px-8 py-3.5"> {/* Used btn-secondary */}
                  Rapid Fire Mode
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in animate-delay-200 mt-8 md:mt-0"> {/* Added mt for mobile */}
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <Image
                    src="/hero-image.png"
                    alt="Python code and computer science concepts"
                    width={1536}
                    height={1024}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section className="py-20 md:py-28"> {/* Consistent padding */}
        <div className="container mx-auto px-6 md:px-8"> {/* Consistent padding */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-100">Why Practice Here?</h2> {/* Brighter title, adjusted margin */}
          <p className="text-gray-400 text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto"> {/* text-gray-400, adjusted margin/size */}
            A comprehensive platform designed specifically for Cambridge A Level CS students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"> {/* Increased gap */}
            {/* Feature Card 1 */}
            <div className="glass-dark p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover flex flex-col"> {/* glass-dark, flex for icon alignment */}
              <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center mb-6 shrink-0"> {/* primary color for icon bg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Exam-Focused</h3>
              <p className="text-gray-400 text-sm"> {/* text-gray-400, text-sm */}
                Exercises are meticulously aligned with the Cambridge 9618 specification for Paper 4, covering every required programming concept and technique.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="glass-dark p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover flex flex-col">
              <div className="w-14 h-14 bg-secondary-600 rounded-full flex items-center justify-center mb-6 shrink-0"> {/* secondary color */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Interactive Python</h3>
              <p className="text-gray-400 text-sm">
                Write, run, and test your Python code directly in the browser with instant feedback, detailed error messages, and helpful hints to guide your learning.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="glass-dark p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover flex flex-col">
              <div className="w-14 h-14 bg-accent-600 rounded-full flex items-center justify-center mb-6 shrink-0"> {/* accent color */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Track Progress</h3>
              <p className="text-gray-400 text-sm">
                Monitor your improvement across different topic areas, identify strengths and weaknesses, and focus your practice where it matters most.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 md:gap-10"> {/* Increased mt and gap */}
            <div className="glass p-8 rounded-xl shadow-xl"> {/* Used regular glass, more padding */}
              <h3 className="text-2xl font-bold mb-5 flex items-center text-gray-100"> {/* Increased font size, mb */}
                <span className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mr-4 shrink-0"> {/* secondary color, increased size/mr */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Rapid Fire Mode
              </h3>
              <p className="text-gray-400 mb-6 text-sm"> {/* text-gray-400, increased mb, text-sm */}
                Challenge yourself with our timed Rapid Fire mode. Solve problems against the clock, perfect for intensive practice sessions and exam preparation.
              </p>
              <Link href="/rapid-fire" 
                    className="btn-outline border-secondary-500 text-secondary-400 hover:bg-secondary-500 hover:text-white"> {/* btn-outline with secondary color */}
                Try Rapid Fire
              </Link>
            </div>
            
            <div className="glass p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-5 flex items-center text-gray-100">
                <span className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 shrink-0"> {/* primary color */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Complete Resource
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Our comprehensive collection covers every topic in the Cambridge specification. No need to look elsewhere - everything you need for Paper 4 is right here.
              </p>
              <Link href="/topics" 
                    className="btn-outline border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white"> {/* btn-outline with primary color */}
                Explore Topics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20 md:py-28 bg-gray-900"> {/* Consistent padding, explicit bg matching footer/navbar scrolled */}
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-100">Topic Areas</h2>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto">
            Comprehensive coverage of all Cambridge A Level CS Paper 4 topics.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"> {/* Adjusted gap */}
            {topics.map((topic) => (
              <Link 
                href={`/topics/${topic.id}`} 
                key={topic.id}
                className="glass-dark hover:border-accent-500/50 p-6 transition-all duration-300 card-hover flex flex-col" /* glass-dark, hover border, flex */
              >
                <div className="flex items-center gap-4 mb-4"> {/* Increased gap, mb */}
                  <div className="text-4xl opacity-80 group-hover:opacity-100 transition-opacity">{topic.icon}</div> {/* Larger icon */}
                  <h3 className="font-semibold text-lg text-gray-100">{topic.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{topic.description}</p> {/* flex-grow */}
                <div className="text-xs text-accent-400 mt-auto">Spec: {topic.specReference}</div> {/* accent color, mt-auto */}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16"> {/* Increased mt */}
            <Link 
              href="/topics" 
              className="btn-primary text-lg px-8 py-3.5" /* btn-primary */
            >
              View All Topics
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="glass rounded-2xl p-10 md:p-16 shadow-2xl bg-gradient-to-br from-primary-700/30 via-accent-700/30 to-secondary-700/30"> {/* Gradient glass */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Ready to Ace Your Paper 4 Exam?</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10"> {/* text-gray-300, increased mb */}
                Start coding now and build the skills you need for success in the Cambridge A Level Computer Science exam.
              </p>
              <Link 
                href="/exercises" 
                className="btn-primary text-xl px-10 py-4" /* btn-primary, larger padding/text */
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}