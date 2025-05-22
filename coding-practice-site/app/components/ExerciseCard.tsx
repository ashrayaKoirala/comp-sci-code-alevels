'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Exercise } from '../data/exercises'

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted?: boolean;
}

export default function ExerciseCard({ exercise, isCompleted = false }: ExerciseCardProps) {
  const [animation, setAnimation] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setAnimation(true);
  }, []);

  // Helper function to get the badge class for difficulty
  const getDifficultyBadgeClass = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'badge badge-green'; // Using badge classes from globals.css
      case 'medium': return 'badge badge-yellow';
      case 'hard': return 'badge badge-red';
      case 'challenge': return 'badge badge-purple';
      default: return 'badge badge-blue';
    }
  }

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 card-hover glass-dark ${ // Using glass-dark for better contrast on new bg
        animation ? 'animate-fade-in' : 'opacity-0'
      } ${isCompleted ? 'border-l-4 border-accent-500' : 'border-l-4 border-transparent'}`} // Accent for completed
    >
      <div className="p-6 flex flex-col h-full"> {/* Added flex flex-col h-full for consistent card height if needed */}
        <div className="flex justify-between items-start mb-3"> {/* Reduced mb */}
          <h2 className="text-xl font-bold text-gray-100 line-clamp-2">{exercise.title}</h2> {/* Brighter title */}
          <span className={`${getDifficultyBadgeClass(exercise.difficulty)} text-xs`}> {/* Removed font-bold, py-1 px-2 as badge class handles it */}
            {exercise.difficulty}
          </span>
        </div>
        <div className="text-primary-400 text-sm mb-3">{exercise.topic}</div> {/* Use primary color variant */}
        <p className="mb-5 text-gray-300 line-clamp-3 flex-grow">{exercise.description.slice(0, 120)}...</p> {/* Added flex-grow to push button down */}
        
        <div className="flex justify-between items-center mt-auto"> {/* Added mt-auto to push this block to bottom */}
          <div className="text-xs text-gray-400">
            <span className="mr-3">⏱️ {exercise.timeEstimate} min</span> {/* Increased mr */}
            <span>🧩 Spec {exercise.specPoint}</span>
          </div>
          <Link
            href={`/exercises/${exercise.id}`}
            className={`btn-outline text-sm ${isCompleted ? 'border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white' : 'border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'}`} // Custom outline button for card
          >
            {isCompleted ? 'Review' : 'Start'}
          </Link>
        </div>
      </div>
    </div>
  );
}