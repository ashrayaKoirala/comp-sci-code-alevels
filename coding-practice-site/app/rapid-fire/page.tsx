'use client'

import { useState, useEffect } from 'react'
import { Exercise } from '../data/exercises'
import { exercises } from '../data/exercises'
import { additionalExercises } from '../data/more-exercises'
import CodeEditor from '../components/CodeEditor'
import CodeOutput from '../components/CodeOutput'

// Combine all exercises
const allExercises = [...exercises, ...additionalExercises];

export default function RapidFirePage() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [shuffledExercises, setShuffledExercises] = useState<Exercise[]>([]);
  
  // Initialize the session
  useEffect(() => {
    // Try to load completed exercises from localStorage
    const savedCompletedExercises = localStorage.getItem('rapidFireCompletedExercises');
    if (savedCompletedExercises) {
      setCompletedExercises(JSON.parse(savedCompletedExercises));
    }
    
    // Initialize with shuffled exercises
    const shuffled = [...allExercises].sort(() => Math.random() - 0.5);
    setShuffledExercises(shuffled);
    
    // Set initial code for the first exercise
    setUserCode(shuffled[0]?.starterCode || '');
  }, []);
  
  // Update localStorage when completed exercises change
  useEffect(() => {
    localStorage.setItem('rapidFireCompletedExercises', JSON.stringify(completedExercises));
  }, [completedExercises]);
  
  // Timer effect
  useEffect(() => {
    if (timer !== null && timeLeft !== null) {
      if (timeLeft > 0) {
        const interval = setInterval(() => {
          setTimeLeft(prev => (prev !== null ? prev - 1 : null));
        }, 1000);
        
        return () => clearInterval(interval);
      } else {
        // Time's up, move to next exercise
        handleSkip();
      }
    }
  }, [timer, timeLeft]);
  
  // Update user code when current exercise changes
  useEffect(() => {
    if (shuffledExercises[currentExerciseIndex]) {
      setUserCode(shuffledExercises[currentExerciseIndex].starterCode);
      setShowSolution(false);
      setOutput('');
      setError(null);
      
      // If timer mode is enabled, start the timer
      if (timer !== null) {
        setTimeLeft(timer);
      }
    }
  }, [currentExerciseIndex, shuffledExercises]);
  
  const currentExercise = shuffledExercises[currentExerciseIndex];
  
  // Run the user's code
  const runCode = (code: string) => {
    setIsRunning(true);
    setOutput('');
    setError(null);
    
    // Simulate running the code (in a real app, this would be sent to a server)
    setTimeout(() => {
      try {
        // Simple checks against expected output (in a real app, this would be done server-side)
        const testCasesOutput = `Running test cases for "${currentExercise.title}"...\n\n`;
        let allTestsPassed = true;
        
        // Simulate test case results
        currentExercise.testCases.forEach((testCase, index) => {
          const passed = Math.random() > 0.3; // Simulate random pass/fail for demo
          if (!passed) allTestsPassed = false;
          
          testCasesOutput += `Test case ${index + 1}: ${testCase.input}\n`;
          testCasesOutput += `Expected: ${testCase.expectedOutput}\n`;
          testCasesOutput += `Result: ${passed ? 'PASS ✅' : 'FAIL ❌'}\n\n`;
        });
        
        // Add a summary
        if (allTestsPassed) {
          testCasesOutput += '🎉 All tests passed! Great job!\n';
          
          // Mark as completed if not already
          if (!completedExercises.includes(currentExercise.id)) {
            setCompletedExercises(prev => [...prev, currentExercise.id]);
          }
        } else {
          testCasesOutput += '❌ Some tests failed. Keep trying!\n';
        }
        
        setOutput(testCasesOutput);
      } catch (err) {
        setError(`Error executing code: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setIsRunning(false);
      }
    }, 1000);
  };
  
  // Handle moving to the next exercise
  const handleNext = () => {
    if (currentExerciseIndex < shuffledExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      // Reached the end, shuffle and start over
      const newShuffled = [...allExercises].sort(() => Math.random() - 0.5);
      setShuffledExercises(newShuffled);
      setCurrentExerciseIndex(0);
    }
  };
  
  // Handle skipping the current exercise
  const handleSkip = () => {
    handleNext();
  };
  
  // Set timer mode
  const setTimerMode = (minutes: number | null) => {
    setTimer(minutes !== null ? minutes * 60 : null);
    setTimeLeft(minutes !== null ? minutes * 60 : null);
  };
  
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Reset and shuffle exercises
  const handleReset = () => {
    const newShuffled = [...allExercises].sort(() => Math.random() - 0.5);
    setShuffledExercises(newShuffled);
    setCurrentExerciseIndex(0);
  };
  
  // If no exercises are loaded yet
  if (!currentExercise) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-center mb-8">Loading Rapid Fire Mode...</h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Rapid Fire Mode</h1>
          
          <div className="flex items-center gap-4">
            {/* Timer mode selection */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimerMode(null)}
                className={`px-3 py-1 rounded-md ${
                  timer === null 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-800/60 text-gray-300'
                }`}
              >
                No Timer
              </button>
              <button
                onClick={() => setTimerMode(3)}
                className={`px-3 py-1 rounded-md ${
                  timer === 3 * 60 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-800/60 text-gray-300'
                }`}
              >
                3 Min
              </button>
              <button
                onClick={() => setTimerMode(5)}
                className={`px-3 py-1 rounded-md ${
                  timer === 5 * 60 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-800/60 text-gray-300'
                }`}
              >
                5 Min
              </button>
              <button
                onClick={() => setTimerMode(10)}
                className={`px-3 py-1 rounded-md ${
                  timer === 10 * 60 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-800/60 text-gray-300'
                }`}
              >
                10 Min
              </button>
            </div>
            
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md"
            >
              Shuffle
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel - Exercise description */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-800/80 rounded-lg p-6 glass">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{currentExercise.title}</h2>
                
                {/* Timer display if enabled */}
                {timeLeft !== null && (
                  <div className={`text-xl font-mono ${
                    timeLeft < 30 ? 'text-red-400' : 'text-blue-300'
                  }`}>
                    {formatTime(timeLeft)}
                  </div>
                )}
              </div>
              
              <div className="flex items-center mb-4 gap-2">
                <span className={`text-xs font-bold py-1 px-2 rounded-full ${
                  currentExercise.difficulty === 'Easy'
                    ? 'bg-green-600'
                    : currentExercise.difficulty === 'Medium'
                    ? 'bg-yellow-600'
                    : currentExercise.difficulty === 'Hard'
                    ? 'bg-red-600'
                    : 'bg-purple-600'
                }`}>
                  {currentExercise.difficulty}
                </span>
                <span className="text-blue-300 text-sm">{currentExercise.topic}</span>
                <span className="text-gray-400 text-xs">⏱️ {currentExercise.timeEstimate} min</span>
              </div>
              
              <div className="mb-6 whitespace-pre-line">
                {currentExercise.description}
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Test Cases:</h3>
                <div className="space-y-3">
                  {currentExercise.testCases.map((testCase, index) => (
                    <div key={index} className="bg-indigo-700/60 p-3 rounded">
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
              
              <div className="flex justify-between">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-purple-700 hover:bg-purple-600 py-2 px-4 rounded-md transition-colors"
                >
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
                
                <button
                  onClick={handleSkip}
                  className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md transition-colors"
                >
                  Skip Exercise
                </button>
              </div>
            </div>
          </div>
          
          {/* Right panel - Code editor and output */}
          <div className="lg:col-span-2">
            <div className="bg-indigo-800/80 rounded-lg p-6 glass mb-6">
              <h3 className="text-xl font-bold mb-4">Code Editor</h3>
              <CodeEditor 
                initialCode={showSolution ? currentExercise.solutionCode : userCode}
                onChange={code => !showSolution && setUserCode(code)}
                readOnly={showSolution}
                runCode={runCode}
                height="400px"
              />
            </div>
            
            <div className="bg-indigo-800/80 rounded-lg p-6 glass">
              <CodeOutput
                output={output}
                isLoading={isRunning}
                error={error || undefined}
              />
              
              {output && output.includes('All tests passed') && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-green-600 hover:bg-green-500 py-2 px-6 rounded-md transition-colors"
                  >
                    Next Exercise →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-8 p-4 bg-indigo-800/50 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Total Progress</span>
            <span>{completedExercises.length} / {allExercises.length} completed</span>
          </div>
          <div className="progress">
            <div 
              className="progress-bar" 
              style={{ width: `${(completedExercises.length / allExercises.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}