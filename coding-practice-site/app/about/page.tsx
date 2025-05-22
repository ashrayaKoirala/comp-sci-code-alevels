export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About This Platform</h1>
        
        <div className="bg-indigo-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            This platform was created to help Cambridge A Level Computer Science students prepare for the 
            Paper 4 practical programming examination. Our goal is to provide a comprehensive collection of 
            Python programming exercises that align with the Cambridge 9618 specification.
          </p>
          <p className="text-lg">
            By practicing with our interactive coding challenges, students can develop the programming skills 
            and problem-solving abilities needed to excel in their exams and build a strong foundation for 
            future computing studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-indigo-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>• Interactive Python coding environment</li>
              <li>• Exercises mapped to Cambridge 9618 specification</li>
              <li>• Immediate feedback on your solutions</li>
              <li>• Hints and solutions to aid learning</li>
              <li>• Progress tracking across different topic areas</li>
              <li>• Comprehensive coverage of Paper 4 topics</li>
            </ul>
          </div>
          
          <div className="bg-indigo-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <ol className="space-y-2">
              <li>1. Browse exercises by topic or difficulty</li>
              <li>2. Read the problem description carefully</li>
              <li>3. Write your Python solution in the editor</li>
              <li>4. Run your code to test it against our test cases</li>
              <li>5. Use hints if you get stuck</li>
              <li>6. Compare your solution with the reference solution</li>
              <li>7. Track your progress across different topics</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-indigo-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Cambridge A Level Computer Science 9618</h2>
          <p className="text-lg mb-4">
            The Cambridge International AS and A Level Computer Science syllabus (9618) encourages learners 
            to develop an understanding of the fundamental principles of computer science and how computer 
            programs work in a range of contexts.
          </p>
          <p className="text-lg mb-4">
            Paper 4 specifically focuses on practical programming skills, where students are expected to write, 
            test, and debug programs in Python. This paper assesses a student's ability to:
          </p>
          <ul className="space-y-2 mb-4">
            <li>• Use appropriate programming constructs to solve problems</li>
            <li>• Implement and test algorithms in a high-level programming language</li>
            <li>• Apply object-oriented programming techniques</li>
            <li>• Use and implement common data structures</li>
            <li>• Create and manipulate files</li>
          </ul>
          <p className="text-lg">
            Our platform is designed to give you extensive practice in all these areas, preparing you 
            thoroughly for your examination.
          </p>
        </div>
      </div>
    </div>
  )
}