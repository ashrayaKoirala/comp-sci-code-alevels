import { Exercise } from './exercises';

// Additional exercises to cover more Cambridge A Level CS specification topics
export const additionalExercises: Exercise[] = [
  {
    id: 6,
    title: 'Queue Implementation',
    difficulty: 'Medium',
    topic: 'Data Structures',
    description: `
    Implement a Queue data structure using a Python class. A queue follows the First-In-First-Out (FIFO) principle.
    
    Your Queue class should implement the following methods:
    
    - enqueue(item): Add an item to the back of the queue
    - dequeue(): Remove and return the front item from the queue, or raise an exception if the queue is empty
    - peek(): Return the front item without removing it, or raise an exception if the queue is empty
    - is_empty(): Return True if the queue is empty, False otherwise
    - size(): Return the number of items in the queue
    
    Example usage:
    ```
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print(queue.dequeue())  # Output: 1
    print(queue.peek())     # Output: 2
    print(queue.size())     # Output: 2
    ```
    `,
    starterCode: `class Queue:
    # Your implementation here
    pass

# Test the Queue implementation
queue = Queue()

# Test enqueue and size
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(f"Size after enqueuing 3 items: {queue.size()}")

# Test peek
print(f"Front item (peek): {queue.peek()}")

# Test dequeue
print(f"Dequeued item: {queue.dequeue()}")
print(f"Size after dequeuing: {queue.size()}")

# Test is_empty
print(f"Is queue empty? {queue.is_empty()}")

# Dequeue remaining items
print(f"Dequeued item: {queue.dequeue()}")
print(f"Dequeued item: {queue.dequeue()}")
print(f"Is queue empty? {queue.is_empty()}")

# Test dequeuing from empty queue
try:
    queue.dequeue()
except Exception as e:
    print(f"Error when dequeuing from empty queue: {e}")`,
    
    solutionCode: `class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Dequeue from an empty queue")
        return self.items.pop(0)
    
    def peek(self):
        if self.is_empty():
            raise IndexError("Peek from an empty queue")
        return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def __str__(self):
        return str(self.items)

# Test the Queue implementation
queue = Queue()

# Test enqueue and size
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(f"Size after enqueuing 3 items: {queue.size()}")

# Test peek
print(f"Front item (peek): {queue.peek()}")

# Test dequeue
print(f"Dequeued item: {queue.dequeue()}")
print(f"Size after dequeuing: {queue.size()}")

# Test is_empty
print(f"Is queue empty? {queue.is_empty()}")

# Dequeue remaining items
print(f"Dequeued item: {queue.dequeue()}")
print(f"Dequeued item: {queue.dequeue()}")
print(f"Is queue empty? {queue.is_empty()}")

# Test dequeuing from empty queue
try:
    queue.dequeue()
except Exception as e:
    print(f"Error when dequeuing from empty queue: {e}")`,
    
    testCases: [
      {
        input: 'queue = Queue(); queue.enqueue(1); queue.enqueue(2); queue.size()',
        expectedOutput: '2'
      },
      {
        input: 'queue = Queue(); queue.enqueue(1); queue.enqueue(2); queue.peek()',
        expectedOutput: '1'
      },
      {
        input: 'queue = Queue(); queue.enqueue(1); queue.enqueue(2); queue.dequeue(); queue.peek()',
        expectedOutput: '2'
      },
      {
        input: 'queue = Queue(); queue.is_empty()',
        expectedOutput: 'True'
      },
      {
        input: 'queue = Queue(); try: queue.dequeue() except IndexError: print("Cannot dequeue from empty queue")',
        expectedOutput: 'Cannot dequeue from empty queue'
      }
    ],
    hints: [
      'Use a Python list to store the queue items',
      'For enqueue, use the append() method to add items to the end of the list',
      'For dequeue, use pop(0) to remove and return the first item in the list',
      'For peek, access the first item in the list without removing it',
      'Check if the queue is empty before performing dequeue and peek operations',
      'Remember that queue follows FIFO (First In, First Out) principle'
    ],
    timeEstimate: 15,
    specPoint: '4.4.3',
    tags: ['data structures', 'queue', 'FIFO']
  },
  {
    id: 7,
    title: 'Linear Search Implementation',
    difficulty: 'Easy',
    topic: 'Sorting and Searching',
    description: `
    Implement a linear search algorithm to find a target value in an array.
    
    Linear search is a simple search algorithm that checks each element of the array one by one until it finds the target value or reaches the end of the array.
    
    Your function should:
    1. Take an array and a target value as input
    2. Return the index of the target if found, or -1 if not found
    3. Handle empty arrays and edge cases appropriately
    
    Example:
    Input: arr = [5, 1, 9, 2, 10, 15, 3], target = 10
    Output: 4 (index of target in the array)
    `,
    starterCode: `def linear_search(arr, target):
    # Your implementation here
    pass

# Test cases
print(linear_search([5, 1, 9, 2, 10, 15, 3], 10))  # Should return 4
print(linear_search([5, 1, 9, 2, 10, 15, 3], 7))   # Should return -1
print(linear_search([], 5))                        # Should return -1`,
    
    solutionCode: `def linear_search(arr, target):
    # Handle empty array
    if not arr:
        return -1
    
    # Check each element one by one
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    
    # If target is not found
    return -1

# Test cases
print(linear_search([5, 1, 9, 2, 10, 15, 3], 10))  # Should return 4
print(linear_search([5, 1, 9, 2, 10, 15, 3], 7))   # Should return -1
print(linear_search([], 5))                        # Should return -1`,
    
    testCases: [
      {
        input: '[5, 1, 9, 2, 10, 15, 3], 10',
        expectedOutput: '4'
      },
      {
        input: '[5, 1, 9, 2, 10, 15, 3], 7',
        expectedOutput: '-1'
      },
      {
        input: '[], 5',
        expectedOutput: '-1'
      },
      {
        input: '[1, 1, 1, 1, 1], 1',
        expectedOutput: '0'
      }
    ],
    hints: [
      'Use a loop to iterate through each element in the array',
      'Compare each element with the target value',
      'Return the index when a match is found',
      'Remember to handle the case when the array is empty',
      'If the entire array is traversed without finding the target, return -1'
    ],
    timeEstimate: 5,
    specPoint: '4.6.2',
    tags: ['search', 'linear search', 'algorithm', 'array']
  },
  {
    id: 8,
    title: 'File Word Counter',
    difficulty: 'Medium',
    topic: 'File Processing',
    description: `
    Write a program that reads a text file and counts the occurrences of each word, ignoring case sensitivity.
    
    Your program should:
    1. Open and read the contents of a file
    2. Split the text into words (ignoring punctuation)
    3. Count the occurrences of each word (case-insensitive)
    4. Return a dictionary with words as keys and counts as values
    5. Handle file not found or permission errors gracefully
    
    Example:
    If the file contains: "Hello world. Hello Python! World of programming."
    
    Output:
    {
        'hello': 2,
        'world': 2,
        'python': 1,
        'of': 1,
        'programming': 1
    }
    `,
    starterCode: `def count_words(filename):
    # Your implementation here
    pass

# For testing, create a text file
with open('sample.txt', 'w') as f:
    f.write("Hello world. Hello Python! World of programming.")

# Test the function
try:
    word_counts = count_words('sample.txt')
    
    # Print results
    for word, count in word_counts.items():
        print(f"'{word}': {count}")
    
    # Test with non-existent file
    word_counts = count_words('nonexistent.txt')
    
except Exception as e:
    print(f"Error: {e}")`,
    
    solutionCode: `import re

def count_words(filename):
    try:
        # Open and read the file
        with open(filename, 'r') as file:
            content = file.read()
            
        # Remove punctuation and convert to lowercase
        content = content.lower()
        content = re.sub(r'[^\\w\\s]', '', content)
        
        # Split into words
        words = content.split()
        
        # Count occurrences of each word
        word_counts = {}
        for word in words:
            if word in word_counts:
                word_counts[word] += 1
            else:
                word_counts[word] = 1
                
        return word_counts
    
    except FileNotFoundError:
        raise FileNotFoundError(f"File '{filename}' not found")
    except PermissionError:
        raise PermissionError(f"Permission denied to access file '{filename}'")
    except Exception as e:
        raise Exception(f"An error occurred: {e}")

# For testing, create a text file
with open('sample.txt', 'w') as f:
    f.write("Hello world. Hello Python! World of programming.")

# Test the function
try:
    word_counts = count_words('sample.txt')
    
    # Print results
    for word, count in word_counts.items():
        print(f"'{word}': {count}")
    
    # Test with non-existent file
    try:
        word_counts = count_words('nonexistent.txt')
    except FileNotFoundError as e:
        print(f"Expected error: {e}")
    
except Exception as e:
    print(f"Error: {e}")`,
    
    testCases: [
      {
        input: 'Write "Hello world. Hello Python!" to sample.txt and run count_words("sample.txt")',
        expectedOutput: "{'hello': 2, 'world': 1, 'python': 1}"
      },
      {
        input: 'Write "a a a a b b b c c d" to sample.txt and run count_words("sample.txt")',
        expectedOutput: "{'a': 4, 'b': 3, 'c': 2, 'd': 1}"
      },
      {
        input: 'try: count_words("nonexistent.txt") except FileNotFoundError: print("File not found")',
        expectedOutput: 'File not found'
      }
    ],
    hints: [
      'Use the open() function with a try-except block to handle file errors',
      'Convert all text to lowercase for case-insensitive counting',
      'Use regular expressions (re module) to remove punctuation',
      'Split the text into words using the split() method',
      'Use a dictionary to store word counts, with words as keys and counts as values',
      'Remember to handle exceptions like FileNotFoundError and PermissionError'
    ],
    timeEstimate: 20,
    specPoint: '4.7.1',
    tags: ['file handling', 'dictionaries', 'string processing', 'regular expressions']
  },
  {
    id: 9,
    title: 'Selection Sort Algorithm',
    difficulty: 'Medium',
    topic: 'Sorting and Searching',
    description: `
    Implement the selection sort algorithm to sort an array of numbers in ascending order.
    
    Selection sort works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning of the unsorted part.
    
    The algorithm maintains two subarrays:
    1. The sorted subarray (initially empty)
    2. The unsorted subarray (initially the entire array)
    
    In each iteration, the minimum element from the unsorted subarray is moved to the end of the sorted subarray.
    
    Example:
    Input: [64, 25, 12, 22, 11]
    
    Iterations:
    [11, 25, 12, 22, 64]  # After first iteration, 11 is placed at the beginning
    [11, 12, 25, 22, 64]  # After second iteration, 12 is placed at the second position
    [11, 12, 22, 25, 64]  # And so on...
    
    Output: [11, 12, 22, 25, 64]
    
    Your task is to implement the selection_sort function that takes an array as input and returns the sorted array.
    `,
    starterCode: `def selection_sort(arr):
    # Your implementation here
    pass

# Test case
numbers = [64, 25, 12, 22, 11]
print(selection_sort(numbers))  # Should print [11, 12, 22, 25, 64]`,
    
    solutionCode: `def selection_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Find the minimum element in the unsorted part
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
                
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr

# Test case
numbers = [64, 25, 12, 22, 11]
print(selection_sort(numbers))  # Should print [11, 12, 22, 25, 64]`,
    
    testCases: [
      {
        input: '[64, 25, 12, 22, 11]',
        expectedOutput: '[11, 12, 22, 25, 64]'
      },
      {
        input: '[5, 1, 4, 2, 8]',
        expectedOutput: '[1, 2, 4, 5, 8]'
      },
      {
        input: '[30, 20, 10]',
        expectedOutput: '[10, 20, 30]'
      },
      {
        input: '[1, 2, 3, 4, 5]',
        expectedOutput: '[1, 2, 3, 4, 5]'
      }
    ],
    hints: [
      'Use nested loops: the outer loop for each position in the array, and the inner loop to find the minimum element',
      'Keep track of the index of the minimum element in each iteration',
      'Swap the minimum element with the current position after finding it',
      'Remember that selection sort has O(n²) time complexity but makes fewer swaps than bubble sort'
    ],
    timeEstimate: 15,
    specPoint: '4.6.1',
    tags: ['sort', 'selection sort', 'algorithm', 'array']
  },
  {
    id: 10,
    title: 'Student Grade System',
    difficulty: 'Hard',
    topic: 'Object-Oriented Programming',
    description: `
    Create a Student Grade Management System using object-oriented programming principles.
    
    Your system should include:
    
    1. A Student class with:
       - Attributes: name, student_id, and a dictionary of grades (course: grade)
       - Methods to add grades, calculate average grade, get a specific course grade
       
    2. A GradeBook class that manages multiple students with:
       - Methods to add students, get student by ID, calculate class average, highest/lowest performers
       
    3. Proper inheritance with a GraduateStudent class that extends Student with:
       - Additional attribute for thesis_topic
       - Override the grade calculation to include thesis grade
    
    The system should handle various error cases gracefully (e.g., student not found, invalid grades).
    
    Example usage:
    ```
    # Create a gradebook
    gradebook = GradeBook()
    
    # Add students
    student1 = Student("Alice", "S001")
    student1.add_grade("Math", 85)
    student1.add_grade("Science", 92)
    
    student2 = Student("Bob", "S002")
    student2.add_grade("Math", 78)
    student2.add_grade("Science", 88)
    
    # Add graduate student
    grad_student = GraduateStudent("Charlie", "G001", "Machine Learning Applications")
    grad_student.add_grade("Advanced Math", 91)
    grad_student.add_grade("Thesis", 95)
    
    # Add all to gradebook
    gradebook.add_student(student1)
    gradebook.add_student(student2)
    gradebook.add_student(grad_student)
    
    # Get student by ID
    student = gradebook.get_student("S001")
    print(f"{student.name}'s average: {student.calculate_average()}")
    
    # Get class average
    print(f"Class average: {gradebook.calculate_class_average()}")
    ```
    `,
    starterCode: `class Student:
    # Your implementation here
    pass

class GraduateStudent(Student):
    # Your implementation here
    pass

class GradeBook:
    # Your implementation here
    pass

# Test the implementation
try:
    # Create a gradebook
    gradebook = GradeBook()
    
    # Add students
    student1 = Student("Alice", "S001")
    student1.add_grade("Math", 85)
    student1.add_grade("Science", 92)
    
    student2 = Student("Bob", "S002")
    student2.add_grade("Math", 78)
    student2.add_grade("Science", 88)
    
    # Add graduate student
    grad_student = GraduateStudent("Charlie", "G001", "Machine Learning Applications")
    grad_student.add_grade("Advanced Math", 91)
    grad_student.add_grade("Thesis", 95)
    
    # Add all to gradebook
    gradebook.add_student(student1)
    gradebook.add_student(student2)
    gradebook.add_student(grad_student)
    
    # Get student by ID
    student = gradebook.get_student("S001")
    print(f"{student.name}'s average: {student.calculate_average()}")
    
    # Get student by ID that doesn't exist
    try:
        student = gradebook.get_student("S999")
    except Exception as e:
        print(f"Expected error: {e}")
    
    # Get class average
    print(f"Class average: {gradebook.calculate_class_average()}")
    
    # Get highest performer
    top_student = gradebook.get_highest_performer()
    print(f"Top performer: {top_student.name} with average {top_student.calculate_average()}")
    
except Exception as e:
    print(f"Error: {e}")`,
    
    solutionCode: `class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.grades = {}  # Dictionary to store course grades
    
    def add_grade(self, course, grade):
        if not isinstance(grade, (int, float)):
            raise ValueError("Grade must be a number")
        
        if grade < 0 or grade > 100:
            raise ValueError("Grade must be between 0 and 100")
        
        self.grades[course] = grade
    
    def get_course_grade(self, course):
        if course not in self.grades:
            raise KeyError(f"No grade found for course: {course}")
        
        return self.grades[course]
    
    def calculate_average(self):
        if not self.grades:
            return 0
        
        total = sum(self.grades.values())
        return total / len(self.grades)
    
    def __str__(self):
        return f"Student(name={self.name}, id={self.student_id}, avg={self.calculate_average():.2f})"


class GraduateStudent(Student):
    def __init__(self, name, student_id, thesis_topic):
        super().__init__(name, student_id)
        self.thesis_topic = thesis_topic
    
    def calculate_average(self):
        # Override to give thesis grade more weight if it exists
        if not self.grades:
            return 0
        
        if "Thesis" in self.grades:
            thesis_grade = self.grades["Thesis"]
            other_grades = [grade for course, grade in self.grades.items() if course != "Thesis"]
            
            if not other_grades:
                return thesis_grade
            
            # Thesis is weighted as 40% of the total grade
            other_avg = sum(other_grades) / len(other_grades)
            return 0.6 * other_avg + 0.4 * thesis_grade
        else:
            return super().calculate_average()
    
    def __str__(self):
        return f"GraduateStudent(name={self.name}, id={self.student_id}, thesis={self.thesis_topic}, avg={self.calculate_average():.2f})"


class GradeBook:
    def __init__(self):
        self.students = {}  # Dictionary to store students by ID
    
    def add_student(self, student):
        if not isinstance(student, Student):
            raise TypeError("Only Student objects can be added to the GradeBook")
        
        if student.student_id in self.students:
            raise ValueError(f"Student with ID {student.student_id} already exists")
        
        self.students[student.student_id] = student
    
    def get_student(self, student_id):
        if student_id not in self.students:
            raise KeyError(f"No student found with ID: {student_id}")
        
        return self.students[student_id]
    
    def calculate_class_average(self):
        if not self.students:
            return 0
        
        total = sum(student.calculate_average() for student in self.students.values())
        return total / len(self.students)
    
    def get_highest_performer(self):
        if not self.students:
            raise ValueError("No students in the gradebook")
        
        return max(self.students.values(), key=lambda student: student.calculate_average())
    
    def get_lowest_performer(self):
        if not self.students:
            raise ValueError("No students in the gradebook")
        
        return min(self.students.values(), key=lambda student: student.calculate_average())


# Test the implementation
try:
    # Create a gradebook
    gradebook = GradeBook()
    
    # Add students
    student1 = Student("Alice", "S001")
    student1.add_grade("Math", 85)
    student1.add_grade("Science", 92)
    
    student2 = Student("Bob", "S002")
    student2.add_grade("Math", 78)
    student2.add_grade("Science", 88)
    
    # Add graduate student
    grad_student = GraduateStudent("Charlie", "G001", "Machine Learning Applications")
    grad_student.add_grade("Advanced Math", 91)
    grad_student.add_grade("Thesis", 95)
    
    # Add all to gradebook
    gradebook.add_student(student1)
    gradebook.add_student(student2)
    gradebook.add_student(grad_student)
    
    # Get student by ID
    student = gradebook.get_student("S001")
    print(f"{student.name}'s average: {student.calculate_average()}")
    
    # Get student by ID that doesn't exist
    try:
        student = gradebook.get_student("S999")
    except KeyError as e:
        print(f"Expected error: {e}")
    
    # Get class average
    print(f"Class average: {gradebook.calculate_class_average()}")
    
    # Get highest performer
    top_student = gradebook.get_highest_performer()
    print(f"Top performer: {top_student.name} with average {top_student.calculate_average()}")
    
except Exception as e:
    print(f"Error: {e}")`,
    
    testCases: [
      {
        input: 'student = Student("Alice", "S001"); student.add_grade("Math", 85); student.calculate_average()',
        expectedOutput: '85.0'
      },
      {
        input: 'grad = GraduateStudent("Charlie", "G001", "ML"); grad.add_grade("Math", 90); grad.add_grade("Thesis", 95); grad.calculate_average()',
        expectedOutput: '92.0'
      },
      {
        input: 'gradebook = GradeBook(); s1 = Student("Alice", "S001"); s1.add_grade("Math", 80); gradebook.add_student(s1); gradebook.get_student("S001").name',
        expectedOutput: 'Alice'
      },
      {
        input: 'try: Student("Alice", "S001").get_course_grade("History") except KeyError: print("Course not found")',
        expectedOutput: 'Course not found'
      }
    ],
    hints: [
      'For the Student class, use a dictionary to store grades with course names as keys',
      'Handle edge cases like empty grade lists when calculating averages',
      'For the GraduateStudent class, use inheritance and the super() function to call the parent class methods',
      'In the GradeBook class, use a dictionary to store students with their IDs as keys',
      'Implement error handling with appropriate exception types',
      'Use lambda functions for getting the highest and lowest performers',
      'Remember to validate all inputs to methods'
    ],
    timeEstimate: 30,
    specPoint: '4.5.2',
    tags: ['object-oriented programming', 'inheritance', 'polymorphism', 'dictionaries']
  }
];`