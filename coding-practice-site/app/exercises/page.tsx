import Link from 'next/link'

// Mock data for exercises
const exercises = [
  {
    id: 1,
    title: 'Binary Search Implementation',
    difficulty: 'Medium',
    topic: 'Searching Algorithms',
    description: 'Implement a binary search algorithm for a sorted array'
  },
  {
    id: 2,
    title: 'Bubble Sort',
    difficulty: 'Easy',
    topic: 'Sorting Algorithms',
    description: 'Implement the bubble sort algorithm'
  },
  {
    id: 3,
    title: 'Bank Account OOP',
    difficulty: 'Medium',
    topic: 'Object-Oriented Programming',
    description: 'Create a BankAccount class with methods for deposit and withdrawal'
  },
  {
    id: 4,
    title: 'Stack Implementation',
    difficulty: 'Medium',
    topic: 'Data Structures',
    description: 'Implement a Stack data structure with push, pop, and peek methods'
  },
  {
    id: 5,
    title: 'Recursive Factorial',
    difficulty: 'Easy',
    topic: 'Recursion',
    description: 'Implement a recursive function to calculate factorial'
  },
  {
    id: 6,
    title: 'Linked List Implementation',
    difficulty: 'Hard',
    topic: 'Data Structures',
    description: 'Create a linked list with insertion, deletion, and traversal methods'
  }
]

// Helper function to get the color for difficulty badge
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy': return 'bg-green-500';
    case 'medium': return 'bg-yellow-500';
    case 'hard': return 'bg-red-500';
    default: return 'bg-blue-500';
  }
}

export default function ExercisesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Coding Exercises</h1>
        
        {/* Filters */}
        <div className="bg-blue-800 p-4 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-2">Topic</label>
              <select className="w-full bg-blue-700 text-white p-2 rounded border border-blue-600">
                <option>All Topics</option>
                <option>Sorting Algorithms</option>
                <option>Searching Algorithms</option>
                <option>Data Structures</option>
                <option>Object-Oriented Programming</option>
                <option>Recursion</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2">Difficulty</label>
              <select className="w-full bg-blue-700 text-white p-2 rounded border border-blue-600">
                <option>All Difficulties</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2">Status</label>
              <select className="w-full bg-blue-700 text-white p-2 rounded border border-blue-600">
                <option>All</option>
                <option>Completed</option>
                <option>Not Started</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Exercise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-indigo-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{exercise.title}</h2>
                  <span className={`${getDifficultyColor(exercise.difficulty)} text-xs font-bold py-1 px-2 rounded-full`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <div className="text-blue-300 text-sm mb-4">{exercise.topic}</div>
                <p className="mb-6">{exercise.description}</p>
                <Link href={`/exercises/${exercise.id}`}
                      className="block text-center bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded transition-colors">
                  Start Exercise
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}