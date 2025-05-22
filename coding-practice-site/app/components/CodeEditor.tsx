'use client'

import { useState, useEffect } from 'react'

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  onChange?: (code: string) => void;
  readOnly?: boolean;
  height?: string;
  theme?: 'light' | 'dark';
  runCode?: (code: string) => void;
}

export default function CodeEditor({
  initialCode,
  language = 'python',
  onChange,
  readOnly = false,
  height = '400px',
  theme = 'dark',
  runCode
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [cursorPosition, setCursorPosition] = useState({ line: 0, ch: 0 });
  
  // Update code when initialCode changes
  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  // Handle code changes
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onChange && onChange(newCode);
  };

  // Handle run code button click
  const handleRunCode = () => {
    runCode && runCode(code);
  };

  // Handle tab key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      // Insert tab at cursor position
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      onChange && onChange(newCode);
      
      // Move cursor after the inserted tab
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    }
  };

  const editorClassName = `font-mono text-sm w-full p-4 rounded-lg outline-none resize-none transition-colors duration-200 ${
    theme === 'dark' 
      ? 'bg-code-bg text-code-text' 
      : 'bg-gray-100 text-gray-900'
  } ${readOnly ? 'opacity-80' : ''}`;

  return (
    <div className="code-editor w-full relative">
      <textarea
        value={code}
        onChange={handleCodeChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        className={editorClassName}
        style={{ height, tabSize: 4 }}
        spellCheck="false"
        autoComplete="off"
        autoCapitalize="off"
        data-language={language}
      />
      {runCode && (
        <button 
          onClick={handleRunCode}
          className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition-colors duration-200"
        >
          Run Code
        </button>
      )}
    </div>
  );
}