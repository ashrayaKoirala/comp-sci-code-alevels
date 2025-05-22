'use client'

import { useState } from 'react'

// Mock exercise data - in a real app, this would be fetched from a database
const exerciseData = {
  id: 1,
  title: 'Binary Search Implementation',
  difficulty: 'Medium',
  topic: 'Searching Algorithms',
  description: `
    Implement a binary search algorithm that searches for a target value in a sorted array.
    Return the index of the target if found, otherwise return -1.
    
    Binary search works by repeatedly dividing the search interval in half.
    If the value of the search key is less than the item in the middle of the interval,
    narrow the interval to the lower half. Otherwise, narrow it to the upper half.
    
    Example:
    Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 7
    Output: 6 (index of target in the array)
  `,
  starterCode: `def binary_search(arr, target):
    # Your implementation here
    pass

# Test cases
test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(binary_search(test_array, 7))  # Should return 6
print(binary_search(test_array, 11)) # Should return -1`,
  
  solutionCode: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Test cases
test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(binary_search(test_array, 7))  # Should return 6
print(binary_search(test_array, 11)) # Should return -1`,
  
  testCases: [
    {
      input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7',
      expectedOutput: '6'
    },
    {
      input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11',
      expectedOutput: '-1'
    },
    {
      input: '[1, 3, 5, 7, 9, 11, 13], 7',
      expectedOutput: '3'
    }
  ],
  hints: [
    'Start by setting left and right pointers to the beginning and end of the array',
    'Calculate the middle index in each iteration',
    'Compare the middle element with the target value',
    'If target is found, return the index',
    'If target is smaller, search the left half',
    'If target is larger, search the right half',
    'Return -1 if the target is not found'
  ]
}

export default function ExercisePage({ params }: { params: { id: string } }) {
  const [code, setCode] = useState(exerciseData.starterCode)
  const [output, setOutput] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [currentHint, setCurrentHint] = useState(0)
  
  // In a real application, this would send the code to a server for execution
  const runCode = () => {
    setOutput("Code execution simulated. In a complete implementation, your Python code would run on the server and return results here.")
  }
  
  const showNextHint = () => {
    if (currentHint < exerciseData.hints.length - 1) {
      setCurrentHint(currentHint + 1)
    }
    setShowHint(true)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{exerciseData.title}</h1>
          <div className="flex gap-3 mb-4">
            <span className="bg-blue-700 text-xs font-bold py-1 px-3 rounded-full">
              {exerciseData.topic}
            </span>
            <span className="bg-yellow-500 text-xs font-bold py-1 px-3 rounded-full">
              {exerciseData.difficulty}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Description and Test Cases */}
          <div>
            <div className="bg-indigo-800 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <div className="whitespace-pre-line">
                {exerciseData.description}
              </div>
            </div>
            
            <div className="bg-indigo-800 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Test Cases</h2>
              <div className="space-y-4">
                {exerciseData.testCases.map((testCase, index) => (
                  <div key={index} className="bg-indigo-700 p-4 rounded">
                    <div>
                      <span className="font-bold">Input:</span> {testCase.input}
                    </div>
                    <div>
                      <span className="font-bold">Expected Output:</span> {testCase.expectedOutput}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hints Section */}
            <div className="bg-indigo-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Hints</h2>
                <button 
                  onClick={showNextHint}
                  className="bg-blue-600 hover:bg-blue-500 py-1 px-3 rounded text-sm"
                >
                  {showHint ? "Next Hint" : "Show Hint"}
                </button>
              </div>
              
              {showHint && (
                <div className="bg-indigo-700 p-4 rounded">
                  {exerciseData.hints[currentHint]}
                  <div className="text-right mt-2 text-xs">
                    Hint {currentHint + 1}/{exerciseData.hints.length}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Code Editor and Output */}
          <div>
            <div className="bg-indigo-800 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Code Editor</h2>
                <div className="space-x-2">
                  <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="bg-purple-600 hover:bg-purple-500 py-1 px-3 rounded text-sm"
                  >
                    {showSolution ? "Hide Solution" : "Show Solution"}
                  </button>
                  <button 
                    onClick={runCode}
                    className="bg-green-600 hover:bg-green-500 py-1 px-3 rounded text-sm"
                  >
                    Run Code
                  </button>
                </div>
              </div>
              
              <textarea 
                className="w-full h-80 bg-gray-900 text-white p-4 font-mono text-sm rounded"
                value={showSolution ? exerciseData.solutionCode : code}
                onChange={(e) => setCode(e.target.value)}
                readOnly={showSolution}
              />
            </div>
            
            <div className="bg-indigo-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Output</h2>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm min-h-16">
                {output || "Run your code to see the output here"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}