'use client'

import { useState, useEffect } from 'react'

interface CodeOutputProps {
  output: string;
  isLoading?: boolean;
  error?: string;
  height?: string;
}

export default function CodeOutput({
  output,
  isLoading = false,
  error,
  height = '200px'
}: CodeOutputProps) {
  const [animation, setAnimation] = useState(false);
  
  // Trigger animation when output changes
  useEffect(() => {
    setAnimation(true);
    const timeout = setTimeout(() => setAnimation(false), 500);
    return () => clearTimeout(timeout);
  }, [output, error]);
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Output</h3>
        {isLoading && (
          <div className="text-sm text-blue-400 loading-dots">Running</div>
        )}
      </div>
      <div 
        className={`w-full font-mono text-sm p-4 rounded-lg bg-gray-900 text-gray-200 overflow-auto ${
          animation ? 'animate-fade-in' : ''
        } ${error ? 'border-l-4 border-red-500' : ''}`}
        style={{ height }}
      >
        {error ? (
          <div className="text-red-400">{error}</div>
        ) : output ? (
          <pre>{output}</pre>
        ) : (
          <div className="text-gray-500 italic">Run your code to see output here</div>
        )}
      </div>
    </div>
  );
}