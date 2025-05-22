import Link from 'next/link'
import Image from 'next/image'
import { topics } from './data/exercises'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
                Cambridge A Level Computer Science
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300">
                Python Coding Practice for Specification 9618
              </h2>
              <p className="text-xl md:text-2xl mb-12">
                Master Paper 4 programming skills through interactive exercises
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/exercises" 
                      className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Start Coding
                </Link>
                <Link href="/rapid-fire" 
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Rapid Fire Mode
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in animate-delay-200">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Practice Here?</h2>
          <p className="text-blue-300 text-xl text-center mb-12 max-w-3xl mx-auto">
            A comprehensive platform designed specifically for Cambridge A Level CS students
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-800/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 glass card-hover">
              <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Exam-Focused</h3>
              <p className="text-gray-300">
                Exercises are meticulously aligned with the Cambridge 9618 specification for Paper 4, covering every required programming concept and technique.
              </p>
            </div>
            
            <div className="bg-indigo-800/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 glass card-hover">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Interactive Python</h3>
              <p className="text-gray-300">
                Write, run, and test your Python code directly in the browser with instant feedback, detailed error messages, and helpful hints to guide your learning.
              </p>
            </div>
            
            <div className="bg-indigo-800/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 glass card-hover">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Track Progress</h3>
              <p className="text-gray-300">
                Monitor your improvement across different topic areas, identify strengths and weaknesses, and focus your practice where it matters most.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
            <div className="bg-gradient-to-br from-blue-800/80 to-indigo-900/80 p-8 rounded-xl shadow-lg glass">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Rapid Fire Mode
              </h3>
              <p className="text-gray-300 mb-4">
                Challenge yourself with our timed Rapid Fire mode. Solve problems against the clock, perfect for intensive practice sessions and exam preparation.
              </p>
              <Link href="/rapid-fire" 
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded transition-colors">
                Try Rapid Fire
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/80 to-indigo-900/80 p-8 rounded-xl shadow-lg glass">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Complete Resource
              </h3>
              <p className="text-gray-300 mb-4">
                Our comprehensive collection covers every topic in the Cambridge specification. No need to look elsewhere - everything you need for Paper 4 is right here.
              </p>
              <Link href="/topics" 
                    className="inline-block bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded transition-colors">
                Explore Topics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Topic Areas</h2>
          <p className="text-blue-300 text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive coverage of all Cambridge A Level CS Paper 4 topics
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {topics.map((topic) => (
              <Link 
                href={`/topics/${topic.id}`} 
                key={topic.id}
                className="bg-indigo-800/60 hover:bg-indigo-700/80 rounded-lg p-6 transition-colors glass card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{topic.icon}</div>
                  <h3 className="font-semibold text-lg">{topic.name}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-3">{topic.description}</p>
                <div className="text-xs text-blue-300">Spec: {topic.specReference}</div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/topics" 
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View All Topics
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-800/90 to-purple-800/90 rounded-2xl p-12 shadow-2xl glass">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your Paper 4 Exam?</h2>
              <p className="text-xl text-blue-300 mb-8">
                Start coding now and build the skills you need for success in the Cambridge A Level Computer Science exam.
              </p>
              <Link 
                href="/exercises" 
                className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
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