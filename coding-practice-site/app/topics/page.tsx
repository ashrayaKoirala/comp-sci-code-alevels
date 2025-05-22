import Link from 'next/link'

// Mock data for topics
const topics = [
  {
    id: 1,
    name: 'Sorting Algorithms',
    description: 'Implementation and analysis of various sorting algorithms',
    exerciseCount: 4,
    icon: '🔄'
  },
  {
    id: 2,
    name: 'Searching Algorithms',
    description: 'Linear, binary, and other search algorithms',
    exerciseCount: 3,
    icon: '🔍'
  },
  {
    id: 3,
    name: 'Data Structures',
    description: 'Implementation of arrays, linked lists, stacks, queues, trees, and more',
    exerciseCount: 8,
    icon: '📊'
  },
  {
    id: 4,
    name: 'Object-Oriented Programming',
    description: 'Classes, objects, inheritance, polymorphism, and encapsulation',
    exerciseCount: 5,
    icon: '🧩'
  },
  {
    id: 5,
    name: 'Recursion',
    description: 'Solving problems using recursive algorithms',
    exerciseCount: 3,
    icon: '↩️'
  },
  {
    id: 6,
    name: 'File Handling',
    description: 'Reading from and writing to files in Python',
    exerciseCount: 2,
    icon: '📁'
  },
  {
    id: 7,
    name: 'Error Handling',
    description: 'Using try-except blocks for exception handling',
    exerciseCount: 2,
    icon: '⚠️'
  },
  {
    id: 8,
    name: 'Algorithm Efficiency',
    description: 'Analyzing and improving the efficiency of algorithms',
    exerciseCount: 3,
    icon: '⏱️'
  }
]

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Topic Areas</h1>
        <p className="text-xl text-center mb-12">
          Explore Cambridge A Level Computer Science (9618) Paper 4 topics and practice with interactive coding exercises
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link href={`/topics/${topic.id}`} key={topic.id}
                  className="bg-indigo-800 rounded-lg p-6 hover:bg-indigo-700 transition-colors shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{topic.icon}</div>
                <h2 className="text-xl font-bold">{topic.name}</h2>
              </div>
              <p className="mb-4 text-blue-200">{topic.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span>{topic.exerciseCount} exercises</span>
                <span className="bg-blue-700 py-1 px-3 rounded-full">Explore</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cambridge A Level Computer Science 9618 - Paper 4</h2>
          <p className="mb-4">
            Paper 4 is the practical assessment component of the Cambridge International A Level Computer Science course.
            It tests your ability to write, adapt, and develop programs to solve computational problems.
          </p>
          <p className="mb-4">
            The exercises on this site are designed to help you practice the programming skills needed for Paper 4,
            with a focus on algorithmic thinking, problem-solving, and efficient code implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/"
               target="_blank" rel="noopener noreferrer"
               className="bg-white text-blue-900 py-2 px-4 rounded text-center hover:bg-gray-200 transition-colors">
              Official Cambridge Specification
            </a>
            <a href="/resources"
               className="bg-transparent border border-white text-white py-2 px-4 rounded text-center hover:bg-white hover:text-blue-900 transition-colors">
              Additional Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}