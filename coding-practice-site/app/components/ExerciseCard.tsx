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
  
  // Helper function to get the color for difficulty badge
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-600';
      case 'medium': return 'bg-yellow-600';
      case 'hard': return 'bg-red-600';
      case 'challenge': return 'bg-purple-600';
      default: return 'bg-blue-600';
    }
  }
  
  return (
    <div 
      className={`bg-indigo-800/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover glass ${
        animation ? 'animate-fade-in' : 'opacity-0'
      } ${isCompleted ? 'border-l-4 border-green-500' : ''}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold line-clamp-2">{exercise.title}</h2>
          <span className={`${getDifficultyColor(exercise.difficulty)} text-xs font-bold py-1 px-2 rounded-full`}>
            {exercise.difficulty}
          </span>
        </div>
        <div className="text-blue-300 text-sm mb-4">{exercise.topic}</div>
        <p className="mb-6 text-gray-300 line-clamp-3">{exercise.description.slice(0, 120)}...</p>
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-400">
            <span className="mr-2">⏱️ {exercise.timeEstimate} min</span>
            <span>🧩 Spec {exercise.specPoint}</span>
          </div>
          <Link 
            href={`/exercises/${exercise.id}`}
            className="block text-center bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded transition-colors"
          >
            {isCompleted ? 'Review' : 'Start'} Exercise
          </Link>
        </div>
      </div>
    </div>
  );
}