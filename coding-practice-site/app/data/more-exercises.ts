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
  },
  {
    id: 11,
    title: 'Merge Sort Implementation',
    difficulty: 'Hard',
    topic: 'Algorithms',
    description: `
    Implement the merge sort algorithm to sort an array of numbers in ascending order.
    
    Merge sort is a divide-and-conquer algorithm. It works as follows:
    1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
    2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
    
    Your implementation should include a \`merge_sort\` function that recursively divides the array and a \`merge\` helper function that combines two sorted arrays.
    
    Example:
    Input: [38, 27, 43, 3, 9, 82, 10]
    Output: [3, 9, 10, 27, 38, 43, 82]
    `,
    starterCode: `def merge_sort(arr):
    # Your implementation here
    pass

def merge(left_half, right_half):
    # Helper function to merge two sorted arrays
    pass

# Test case
numbers = [38, 27, 43, 3, 9, 82, 10]
print(f"Original array: {numbers}")
sorted_numbers = merge_sort(numbers)
print(f"Sorted array: {sorted_numbers}") # Should print [3, 9, 10, 27, 38, 43, 82]`,
    
    solutionCode: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    # Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Recursively sort both halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left_half, right_half):
    merged_array = []
    left_idx, right_idx = 0, 0
    
    # Compare elements from both halves and add the smaller one to the merged array
    while left_idx < len(left_half) and right_idx < len(right_half):
        if left_half[left_idx] < right_half[right_idx]:
            merged_array.append(left_half[left_idx])
            left_idx += 1
        else:
            merged_array.append(right_half[right_idx])
            right_idx += 1
            
    # Add any remaining elements from the left half
    while left_idx < len(left_half):
        merged_array.append(left_half[left_idx])
        left_idx += 1
        
    # Add any remaining elements from the right half
    while right_idx < len(right_half):
        merged_array.append(right_half[right_idx])
        right_idx += 1
        
    return merged_array

# Test case
numbers = [38, 27, 43, 3, 9, 82, 10]
print(f"Original array: {numbers}")
sorted_numbers = merge_sort(numbers)
print(f"Sorted array: {sorted_numbers}") # Should print [3, 9, 10, 27, 38, 43, 82]

# Additional test cases
print(merge_sort([1, 2, 3, 4, 5])) # Expected: [1, 2, 3, 4, 5]
print(merge_sort([5, 4, 3, 2, 1])) # Expected: [1, 2, 3, 4, 5]
print(merge_sort([])) # Expected: []
print(merge_sort([10])) # Expected: [10]`,
    
    testCases: [
      {
        input: '[38, 27, 43, 3, 9, 82, 10]',
        expectedOutput: '[3, 9, 10, 27, 38, 43, 82]'
      },
      {
        input: '[1, 2, 3, 4, 5]',
        expectedOutput: '[1, 2, 3, 4, 5]'
      },
      {
        input: '[5, 4, 3, 2, 1]',
        expectedOutput: '[1, 2, 3, 4, 5]'
      },
      {
        input: '[]',
        expectedOutput: '[]'
      },
      {
        input: '[10]',
        expectedOutput: '[10]'
      },
      {
        input: '[64, 34, 25, 12, 22, 11, 90]',
        expectedOutput: '[11, 12, 22, 25, 34, 64, 90]'
      }
    ],
    hints: [
      'Start with the base case for recursion: if the array has 0 or 1 element, it is already sorted.',
      'In the \`merge_sort\` function, find the middle point to divide the array into two halves.',
      'Recursively call \`merge_sort\` on both halves.',
      'The \`merge\` function takes two sorted arrays and combines them into a single sorted array.',
      'In \`merge\`, use pointers to iterate through both arrays, comparing elements and adding the smaller one to the result.',
      'After one array is exhausted, append the remaining elements of the other array to the result.'
    ],
    timeEstimate: 30,
    specPoint: '4.6.1', // Sorting algorithms
    tags: ['sort', 'merge sort', 'algorithm', 'divide and conquer', 'recursion']
  },
  {
    id: 12,
    title: 'Quick Sort Implementation',
    difficulty: 'Hard',
    topic: 'Algorithms',
    description: `
    Implement the quick sort algorithm to sort an array of numbers in ascending order.
    
    Quick sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
    
    Steps:
    1. Pick an element, called a pivot, from the array.
    2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it. After this partitioning, the pivot is in its final position. This is called the partition operation.
    3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.
    
    Example:
    Input: [10, 7, 8, 9, 1, 5]
    Output: [1, 5, 7, 8, 9, 10]
    `,
    starterCode: `def quick_sort(arr):
    # Your implementation here
    pass

def partition(arr, low, high):
    # Helper function to partition the array
    pass

# Test case
numbers = [10, 7, 8, 9, 1, 5]
print(f"Original array: {numbers}")
# Note: Quick sort is often implemented in-place,
# so the original list might be modified directly.
# A common approach for testing is to pass a copy or handle the in-place nature.
# For this exercise, let's assume quick_sort takes the array, sorts it, and could return it or modify in-place.
# To ensure testability, we'll assign the result if returned, or print the original (now sorted) array.

# In a typical implementation, you might call it like this:
# quick_sort_recursive(numbers, 0, len(numbers) - 1)
# For simplicity in this structure, quick_sort will handle the initial call.

sorted_numbers = quick_sort(numbers.copy()) # Use .copy() if quick_sort is purely in-place and returns None
if sorted_numbers is None: # If quick_sort modifies in-place and returns None
    quick_sort(numbers) # Call it on the original list
    sorted_numbers = numbers
print(f"Sorted array: {sorted_numbers}") # Should print [1, 5, 7, 8, 9, 10]`,
    
    solutionCode: `def quick_sort(arr):
    # Wrapper function to initiate the recursive sort
    # This makes it easier to call from the top level
    # and fits the expected function signature if arr is returned.
    # Alternatively, the main quick_sort logic can be here directly if preferred.
    
    def _quick_sort_recursive(items, low_idx, high_idx):
        if low_idx < high_idx:
            # Find pivot element such that
            # element smaller than pivot are on the left
            # element greater than pivot are on the right
            pivot_idx = _partition(items, low_idx, high_idx)
            
            # Recursive call on the left of pivot
            _quick_sort_recursive(items, low_idx, pivot_idx - 1)
            
            # Recursive call on the right of pivot
            _quick_sort_recursive(items, pivot_idx + 1, high_idx)
            
    # In this setup, we'll sort a copy to avoid modifying the original list
    # if the problem implies returning a new sorted list.
    # If in-place modification of the original list is desired,
    # then we would call _quick_sort_recursive(arr, 0, len(arr) - 1)
    # and quick_sort could return arr or None.
    # For consistency with other sorting functions that return the sorted list:
    array_copy = list(arr) # Make a copy to sort
    _quick_sort_recursive(array_copy, 0, len(array_copy) - 1)
    return array_copy

def _partition(items, low_idx, high_idx):
    # Choose the rightmost element as pivot
    pivot = items[high_idx]
    
    # Pointer for greater element
    i = low_idx - 1
    
    # Traverse through all elements
    # compare each element with pivot
    for j in range(low_idx, high_idx):
        if items[j] <= pivot:
            # If element smaller than pivot is found
            # swap it with the greater element pointed by i
            i = i + 1
            
            # Swapping element at i with element at j
            (items[i], items[j]) = (items[j], items[i])
            
    # Swap the pivot element with the greater element specified by i
    (items[i + 1], items[high_idx]) = (items[high_idx], items[i + 1])
    
    # Return the position from where partition is done
    return i + 1

# Test case
numbers = [10, 7, 8, 9, 1, 5]
print(f"Original array: {numbers}")
sorted_numbers = quick_sort(numbers.copy()) 
print(f"Sorted array: {sorted_numbers}")

# Additional test cases
print(quick_sort([1, 2, 3, 4, 5]))
print(quick_sort([5, 4, 3, 2, 1]))
print(quick_sort([]))
print(quick_sort([10]))
print(quick_sort([38, 27, 43, 3, 9, 82, 10]))`,
    
    testCases: [
      {
        input: '[10, 7, 8, 9, 1, 5]',
        expectedOutput: '[1, 5, 7, 8, 9, 10]'
      },
      {
        input: '[1, 2, 3, 4, 5]',
        expectedOutput: '[1, 2, 3, 4, 5]'
      },
      {
        input: '[5, 4, 3, 2, 1]',
        expectedOutput: '[1, 2, 3, 4, 5]'
      },
      {
        input: '[]',
        expectedOutput: '[]'
      },
      {
        input: '[10]',
        expectedOutput: '[10]'
      },
      {
        input: '[38, 27, 43, 3, 9, 82, 10]',
        expectedOutput: '[3, 9, 10, 27, 38, 43, 82]'
      }
    ],
    hints: [
      'Quick sort is recursive. The base case is when the sub-array has less than two elements.',
      'The \`partition\` function is key. It rearranges the array (or sub-array) around a pivot.',
      'Choose a pivot strategy (e.g., last element, first element, median). The choice can affect performance.',
      'In \`partition\`, iterate through the array, moving elements smaller than the pivot to one side and larger elements to the other.',
      'After partitioning, the pivot is in its correct sorted position.',
      'Recursively call quick sort on the sub-array to the left of the pivot and the sub-array to the right.'
    ],
    timeEstimate: 35,
    specPoint: '4.6.1', // Sorting algorithms
    tags: ['sort', 'quick sort', 'algorithm', 'divide and conquer', 'recursion', 'in-place']
  },
  {
    id: 13,
    title: 'Binary Tree Traversals (In-order, Pre-order, Post-order)',
    difficulty: 'Hard',
    topic: 'Data Structures',
    description: `
    Implement a binary tree and perform three types of traversals: In-order, Pre-order, and Post-order.
    
    You will need to:
    1. Define a \`Node\` class for the binary tree, with \`data\`, \`left\` child, and \`right\` child attributes.
    2. Implement three recursive functions for traversal:
       - \`in_order_traversal(root)\`: Visits left subtree, then root, then right subtree.
       - \`pre_order_traversal(root)\`: Visits root, then left subtree, then right subtree.
       - \`post_order_traversal(root)\`: Visits left subtree, then right subtree, then root.
    
    Each traversal function should return a list of visited node values in the order of traversal.
    
    Example Tree:
        1
       / \\
      2   3
     / \\
    4   5
    
    Expected Traversal Outputs:
    - In-order: [4, 2, 5, 1, 3]
    - Pre-order: [1, 2, 4, 5, 3]
    - Post-order: [4, 5, 2, 3, 1]
    `,
    starterCode: \`class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def in_order_traversal(root):
    # Your implementation here
    result = []
    # Hint: Use a helper recursive function
    pass

def pre_order_traversal(root):
    # Your implementation here
    result = []
    # Hint: Use a helper recursive function
    pass

def post_order_traversal(root):
    # Your implementation here
    result = []
    # Hint: Use a helper recursive function
    pass

# Construct the example tree
#       1
#      / \\
#     2   3
#    / \\
#   4   5
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

# Test traversals
print(f"In-order: {in_order_traversal(root)}")    # Expected: [4, 2, 5, 1, 3]
print(f"Pre-order: {pre_order_traversal(root)}")   # Expected: [1, 2, 4, 5, 3]
print(f"Post-order: {post_order_traversal(root)}") # Expected: [4, 5, 2, 3, 1]

# Test with an empty tree
empty_root = None
print(f"In-order (empty): {in_order_traversal(empty_root)}")    # Expected: []
print(f"Pre-order (empty): {pre_order_traversal(empty_root)}")   # Expected: []
print(f"Post-order (empty): {post_order_traversal(empty_root)}") # Expected: []
\`,
    
    solutionCode: \`class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def in_order_traversal(root):
    result = []
    def _traverse(node):
        if node:
            _traverse(node.left)
            result.append(node.data)
            _traverse(node.right)
    _traverse(root)
    return result

def pre_order_traversal(root):
    result = []
    def _traverse(node):
        if node:
            result.append(node.data)
            _traverse(node.left)
            _traverse(node.right)
    _traverse(root)
    return result

def post_order_traversal(root):
    result = []
    def _traverse(node):
        if node:
            _traverse(node.left)
            _traverse(node.right)
            result.append(node.data)
    _traverse(root)
    return result

# Construct the example tree
#       1
#      / \\
#     2   3
#    / \\
#   4   5
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

# Test traversals
print(f"In-order: {in_order_traversal(root)}")
print(f"Pre-order: {pre_order_traversal(root)}")
print(f"Post-order: {post_order_traversal(root)}")

# Test with an empty tree
empty_root = None
print(f"In-order (empty): {in_order_traversal(empty_root)}")
print(f"Pre-order (empty): {pre_order_traversal(empty_root)}")
print(f"Post-order (empty): {post_order_traversal(empty_root)}")

# Another tree structure
#     10
#    /  \\
#   5    15
#  / \\    \\
# 2   7    20
root2 = Node(10)
root2.left = Node(5)
root2.right = Node(15)
root2.left.left = Node(2)
root2.left.right = Node(7)
root2.right.right = Node(20)

print(f"In-order (root2): {in_order_traversal(root2)}") # Expected: [2, 5, 7, 10, 15, 20]
print(f"Pre-order (root2): {pre_order_traversal(root2)}") # Expected: [10, 5, 2, 7, 15, 20]
print(f"Post-order (root2): {post_order_traversal(root2)}") # Expected: [2, 7, 5, 20, 15, 10]
\`,
    
    testCases: [
      {
        input: 'root = Node(1); root.left = Node(2); root.right = Node(3); root.left.left = Node(4); root.left.right = Node(5); in_order_traversal(root)',
        expectedOutput: '[4, 2, 5, 1, 3]'
      },
      {
        input: 'root = Node(1); root.left = Node(2); root.right = Node(3); root.left.left = Node(4); root.left.right = Node(5); pre_order_traversal(root)',
        expectedOutput: '[1, 2, 4, 5, 3]'
      },
      {
        input: 'root = Node(1); root.left = Node(2); root.right = Node(3); root.left.left = Node(4); root.left.right = Node(5); post_order_traversal(root)',
        expectedOutput: '[4, 5, 2, 3, 1]'
      },
      {
        input: 'in_order_traversal(None)',
        expectedOutput: '[]'
      },
      {
        input: 'pre_order_traversal(None)',
        expectedOutput: '[]'
      },
      {
        input: 'post_order_traversal(None)',
        expectedOutput: '[]'
      },
      {
        input: 'root = Node("A"); root.left = Node("B"); root.right = Node("C"); in_order_traversal(root)',
        expectedOutput: '["B", "A", "C"]'
      }
    ],
    hints: [
      'For each traversal type, remember the order: Left-Root-Right (In-order), Root-Left-Right (Pre-order), Left-Right-Root (Post-order).',
      'Recursion is the most straightforward way to implement tree traversals.',
      'The base case for the recursion is when the current node is None (empty).',
      'You can use a helper function within each main traversal function to manage the recursion and the list of results.',
      'Ensure your Node class correctly initializes left and right children to None.'
    ],
    timeEstimate: 30,
    specPoint: '4.4.5', // Tree traversal (part of Trees in spec)
    tags: ['data structures', 'tree', 'binary tree', 'traversal', 'recursion', 'in-order', 'pre-order', 'post-order']
  },
  {
    id: 14,
    title: 'Hash Table Implementation (with Chaining)',
    difficulty: 'Hard',
    topic: 'Data Structures',
    description: \`
    Implement a Hash Table data structure using a Python class. Your hash table should use chaining to handle collisions.
    
    The Hash Table should support the following operations:
    - \`insert(key, value)\`: Insert a key-value pair into the hash table. If the key already exists, update its value.
    - \`get(key)\`: Retrieve the value associated with a key. Return None if the key is not found.
    - \`remove(key)\`: Remove a key-value pair from the hash table. Raise a KeyError if the key is not found.
    - \`_hash(key)\`: A private helper method to compute the hash value (index) for a given key.
    
    Requirements:
    1. Initialize the hash table with a given size.
    2. Use a list of lists (or a list of linked lists) to store entries for chaining.
    3. The \`_hash\` method should use the modulo operator to map hash codes to table indices.
    
    Example:
    \`\`\`python
    ht = HashTable(size=10)
    ht.insert("apple", 5)
    ht.insert("banana", 7)
    ht.insert("orange", 3) # Assuming "orange" hashes to the same index as "apple"
    
    print(ht.get("apple"))   # Output: 5
    print(ht.get("banana"))  # Output: 7
    print(ht.get("orange"))  # Output: 3
    
    ht.remove("banana")
    print(ht.get("banana"))  # Output: None
    \`\`\`
    \`,
    starterCode: \`class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)] # List of lists for chaining

    def _hash(self, key):
        # A simple hash function
        # Your implementation here
        pass

    def insert(self, key, value):
        # Your implementation here
        pass

    def get(self, key):
        # Your implementation here
        pass

    def remove(self, key):
        # Your implementation here
        pass

# Test cases
ht = HashTable(size=5)

# Insert items
ht.insert("apple", 1)
ht.insert("banana", 2)
ht.insert("cherry", 3) # Assume 'cherry' might collide with 'apple' if hash("cherry") % 5 == hash("apple") % 5
ht.insert("date", 4)

# Get items
print(f"Get 'apple': {ht.get('apple')}")     # Expected: 1
print(f"Get 'banana': {ht.get('banana')}")   # Expected: 2
print(f"Get 'cherry': {ht.get('cherry')}")   # Expected: 3 (assuming correct collision handling)
print(f"Get 'fig': {ht.get('fig')}")       # Expected: None

# Update existing key
ht.insert("apple", 10)
print(f"Get updated 'apple': {ht.get('apple')}") # Expected: 10

# Remove items
try:
    ht.remove("banana")
    print(f"Get 'banana' after removal: {ht.get('banana')}") # Expected: None
except KeyError as e:
    print(e)

try:
    ht.remove("grape") # Key not present
except KeyError as e:
    print(f"Error removing 'grape': {e}") # Expected: KeyError

# Check table structure (for debugging, not part of typical usage)
# print(ht.table)
\`,
    
    solutionCode: \`class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)] # List of lists (buckets) for chaining

    def _hash(self, key):
        # A simple hash function using Python's built-in hash()
        return hash(key) % self.size

    def insert(self, key, value):
        hash_index = self._hash(key)
        bucket = self.table[hash_index]
        
        # Check if key already exists in the bucket
        for i, (existing_key, _) in enumerate(bucket):
            if existing_key == key:
                bucket[i] = (key, value) # Update value
                return
        
        # If key not found, append new key-value pair
        bucket.append((key, value))

    def get(self, key):
        hash_index = self._hash(key)
        bucket = self.table[hash_index]
        
        for existing_key, existing_value in bucket:
            if existing_key == key:
                return existing_value
        
        return None # Key not found

    def remove(self, key):
        hash_index = self._hash(key)
        bucket = self.table[hash_index]
        
        for i, (existing_key, _) in enumerate(bucket):
            if existing_key == key:
                bucket.pop(i) # Remove the tuple (key, value)
                return
        
        raise KeyError(f"Key '{key}' not found in hash table.")

# Test cases
ht = HashTable(size=5)

# Insert items
ht.insert("apple", 1)
ht.insert("banana", 2) 
# For predictable collisions with simple hash for testing:
# Let's say hash("apple") % 5 = 0, hash("cherry") % 5 = 0
# We need to ensure our _hash function is used.
# Python's hash() is stable for a given run but not across versions/machines for strings.
# For this example, we assume _hash distributes keys.
# If we want to force a collision for testing, we might need a custom key that ensures it.
# e.g. ht.insert(SomeObjectWithCustomHash(0), 1)
# ht.insert(SomeObjectWithCustomHash(5), 3) # Collides with key 0 if size is 5

ht.insert("cherry", 3) 
ht.insert("date", 4)


# Get items
print(f"Get 'apple': {ht.get('apple')}")
print(f"Get 'banana': {ht.get('banana')}")
print(f"Get 'cherry': {ht.get('cherry')}")
print(f"Get 'fig': {ht.get('fig')}")

# Update existing key
ht.insert("apple", 10)
print(f"Get updated 'apple': {ht.get('apple')}")

# Remove items
try:
    ht.remove("banana")
    print(f"Get 'banana' after removal: {ht.get('banana')}")
except KeyError as e:
    print(e)

try:
    ht.remove("grape") # Key not present
except KeyError as e:
    print(f"Error removing 'grape': {e}")

# Example of forcing a collision for testing (if needed, depends on hash function)
# ht.insert(0, "value_for_0") # Assuming key 0 hashes to index 0
# ht.insert(5, "value_for_5") # Assuming key 5 hashes to index 0 (if size is 5)
# print(ht.table[0]) # Should show [(0, "value_for_0"), (5, "value_for_5")] or similar

# Test with different types
ht.insert(100, "一百")
print(f"Get 100: {ht.get(100)}")
ht.remove(100)
print(f"Get 100 after removal: {ht.get(100)}")
\`,
    
    testCases: [
      {
        input: 'ht = HashTable(3); ht.insert("a", 1); ht.insert("b", 2); ht.insert("c", 3); ht.insert("d", 4); ht.get("a")', # "d" will likely collide with "a" or "b" or "c"
        expectedOutput: '1'
      },
      {
        input: 'ht = HashTable(3); ht.insert("a", 1); ht.insert("b", 2); ht.insert("d", 4); ht.get("d")', 
        expectedOutput: '4'
      },
      {
        input: 'ht = HashTable(); ht.insert("key1", "val1"); ht.get("key1")',
        expectedOutput: 'val1'
      },
      {
        input: 'ht = HashTable(); ht.insert("key1", "val1"); ht.get("nonexistentkey")',
        expectedOutput: 'None'
      },
      {
        input: 'ht = HashTable(); ht.insert("key1", "val1"); ht.insert("key1", "val2"); ht.get("key1")',
        expectedOutput: 'val2'
      },
      {
        input: 'ht = HashTable(); ht.insert("key1", "val1"); ht.remove("key1"); ht.get("key1")',
        expectedOutput: 'None'
      },
      {
        input: 'ht = HashTable(); try: ht.remove("nonexistentkey") except KeyError: print("Not found")',
        expectedOutput: 'Not found'
      }
    ],
    hints: [
      'The hash table is an array of "buckets". Each bucket is a list to store items that hash to the same index.',
      'Your \`_hash\` function should take a key, compute a hash code (Python\'s built-in \`hash()\` is fine), and then use the modulo operator (\`%\`) with the table size to get an index.',
      'For \`insert\`: calculate hash index, access bucket. Iterate through bucket to see if key exists. If yes, update. If no, append (key, value) tuple.',
      'For \`get\`: calculate hash index, access bucket. Iterate through bucket. If key found, return value. Else, return None.',
      'For \`remove\`: calculate hash index, access bucket. Iterate through bucket. If key found, remove it. Else, raise KeyError.',
      'Remember that keys can be of different types (strings, numbers), and \`hash()\` works for them.'
    ],
    timeEstimate: 40,
    specPoint: '4.4.6', // Hash tables (part of Data Structures in spec)
    tags: ['data structures', 'hash table', 'dictionary', 'chaining', 'collision handling']
  },
  {
    id: 15,
    title: 'Depth-First Search (DFS) for a Graph',
    difficulty: 'Hard',
    topic: 'Algorithms',
    description: \`
    Implement Depth-First Search (DFS) for a graph. Given a graph represented as an adjacency list and a starting node, return the DFS traversal sequence as a list of nodes.
    
    DFS explores as far as possible along each branch before backtracking. It uses a stack (implicitly via recursion or explicitly).
    
    You will need to:
    1. Implement the \`dfs(graph, start_node)\` function.
    2. Keep track of visited nodes to avoid cycles and redundant processing.
    
    The graph will be represented as a dictionary where keys are node names (strings or numbers) and values are lists of adjacent nodes.
    
    Example Graph:
    graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
    }
    Starting node: 'A'
    
    One possible DFS Traversal Output (order might vary for neighbors):
    ['A', 'B', 'D', 'E', 'F', 'C'] or ['A', 'C', 'F', 'E', 'B', 'D']
    (The specific order depends on the order of neighbors in the adjacency list and how they are processed.)
    For testing, we will sort neighbors to ensure a consistent output.
    \`,
    starterCode: \`
def dfs(graph, start_node):
    visited = set()
    traversal_path = []

    def _dfs_recursive(node):
        # Your implementation here
        # Mark node as visited
        # Add to traversal path
        # For each neighbor, if not visited, recurse
        pass # Remove this pass

    # For consistent output, sort neighbors before visiting
    # This part can be tricky to integrate directly into the recursive helper
    # without modifying graph structure or passing sorted neighbors.
    # An alternative is to process neighbors as they are and accept multiple valid DFS paths.
    # For this problem, let's assume the solution will sort neighbors before recursion.
    
    # _dfs_recursive(start_node) # Initial call

    # Revised approach for starter: Let the main function handle the initial call and sorting.
    if start_node not in graph:
        return []
        
    _dfs_recursive(start_node) # Call the helper
    return traversal_path

# Example Graph (Adjacency List)
graph_example = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Test DFS
print(f"DFS from 'A': {dfs(graph_example, 'A')}") 
# Expected (one possibility, if neighbors processed in given order): ['A', 'B', 'D', 'E', 'F', 'C']
# If neighbors are sorted alphabetically: ['A', 'B', 'D', 'E', 'F', 'C'] (B before C for A, D before E for B etc.)

graph_letters = {
    'A': ['B', 'S'],
    'B': ['A'],
    'S': ['A','G','C'],
    'G': ['S','H'],
    'H': ['G'],
    'C': ['S','D','E','F'],
    'D': ['C'],
    'E': ['C','F'],
    'F': ['S','E']
}
print(f"DFS from 'A' (graph_letters): {dfs(graph_letters, 'A')}")
# Expected with sorted neighbors: ['A', 'B', 'S', 'C', 'D', 'E', 'F', 'G', 'H']

print(f"DFS from 'X' (non-existent node): {dfs(graph_example, 'X')}") # Expected: []
print(f"DFS from 'D' (graph_example): {dfs(graph_example, 'D')}") 
# Expected with sorted neighbors for 'D': ['D', 'B', 'A', 'C', 'F', 'E']
\`,
    
    solutionCode: \`
def dfs(graph, start_node):
    visited = set()
    traversal_path = []

    if start_node not in graph:
        return []

    # Using an explicit stack for iterative DFS can also be an option.
    # Here, we use recursion as it's common for DFS.
    def _dfs_recursive(node):
        if node not in visited:
            visited.add(node)
            traversal_path.append(node)
            
            # To ensure consistent output for tests, sort neighbors
            # This assumes graph[node] exists because start_node is checked.
            # If a node in the traversal path is not in graph keys, it's an issue.
            # We assume valid graph structure where all reachable nodes are keys.
            neighbors = sorted(graph.get(node, [])) # Get neighbors, or empty list if node has no outgoing edges
            
            for neighbor in neighbors:
                _dfs_recursive(neighbor)

    _dfs_recursive(start_node)
    return traversal_path

# Example Graph (Adjacency List)
graph_example = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Test DFS
print(f"DFS from 'A': {dfs(graph_example, 'A')}") 
# Expected with sorted neighbors: ['A', 'B', 'D', 'E', 'F', 'C']

graph_letters = {
    'A': ['B', 'S'],
    'B': ['A'],
    'S': ['A','G','C'],
    'G': ['S','H'],
    'H': ['G'],
    'C': ['S','D','E','F'],
    'D': ['C'],
    'E': ['C','F'],
    'F': ['S','E'] # Corrected: F's neighbors were ['C','E'], spec example has 'S'
} # Corrected based on common example: F's neighbors often include S
# For the given solution to work as expected, S should point to F if F points to S for some tests.
# Let's use a standard test case for graph_letters
graph_letters_standard = {
    'A': ['B', 'S'], 'B': ['A'], 'C': ['D', 'E', 'F', 'S'], 'D': ['C'],
    'E': ['C', 'H'], 'F': ['C', 'G'], 'G': ['F', 'S', 'H'], 'H': ['E', 'G'],
    'S': ['A', 'C', 'G']
}


print(f"DFS from 'A' (graph_letters_standard, sorted neighbors): {dfs(graph_letters_standard, 'A')}")
# Expected: ['A', 'B', 'S', 'C', 'D', 'E', 'H', 'G', 'F']

print(f"DFS from 'X' (non-existent node): {dfs(graph_example, 'X')}")
print(f"DFS from 'D' (graph_example, sorted neighbors): {dfs(graph_example, 'D')}")
# Expected: ['D', 'B', 'A', 'C', 'F', 'E']

# Test with a graph having a node not in keys but in adjacency list (should be handled by graph.get(node,[]))
graph_incomplete = {'A': ['B'], 'C': ['A']} # B is not a key
print(f"DFS from 'A' (incomplete graph): {dfs(graph_incomplete, 'A')}") # Expected: ['A', 'B']
print(f"DFS from 'C' (incomplete graph): {dfs(graph_incomplete, 'C')}") # Expected: ['C', 'A', 'B']

graph_cyclic = {'A': ['B'], 'B': ['C'], 'C': ['A']}
print(f"DFS from 'A' (cyclic): {dfs(graph_cyclic, 'A')}") # Expected: ['A', 'B', 'C']
\`,
    
    testCases: [
      {
        input: "dfs({'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']}, 'A')",
        expectedOutput: "['A', 'B', 'D', 'E', 'F', 'C']" # Based on sorted neighbor processing
      },
      {
        input: "dfs({'A': ['B', 'S'], 'B': ['A'], 'S': ['A','G','C'], 'G': ['S','H'], 'H': ['G'], 'C': ['S','D','E','F'], 'D': ['C'], 'E': ['C','F'], 'F': ['S','E']}, 'A')",
        expectedOutput: "['A', 'B', 'S', 'C', 'D', 'E', 'F', 'G', 'H']" # Based on sorted neighbor processing
      },
      {
        input: "dfs({'A': ['B'], 'B': []}, 'A')",
        expectedOutput: "['A', 'B']"
      },
      {
        input: "dfs({'A': ['B'], 'B': []}, 'B')",
        expectedOutput: "['B']"
      },
      {
        input: "dfs({}, 'A')",
        expectedOutput: "[]"
      },
      {
        input: "dfs({'A': ['B'], 'C': ['A']}, 'X')", # Start node not in graph
        expectedOutput: "[]"
      },
      {
        input: "dfs({'A': ['B', 'C'], 'B':['A'], 'C':['A']}, 'A')", # Simple cycle
        expectedOutput: "['A', 'B', 'C']"
      }
    ],
    hints: [
      'Use a \`set\` to keep track of visited nodes to prevent infinite loops in cyclic graphs and avoid reprocessing.',
      'DFS can be implemented recursively or iteratively using a stack.',
      'In the recursive approach, the call stack acts as the stack for DFS.',
      'For each node, first mark it as visited and add it to your result path.',
      'Then, iterate through its neighbors. If a neighbor hasn't been visited, make a recursive call to DFS for that neighbor.',
      'To ensure deterministic output for testing (especially if neighbor order matters), sort the neighbors before visiting them.',
      'Handle the case where the starting node is not in the graph.'
    ],
    timeEstimate: 35,
    specPoint: '4.2.3', // Graph traversal algorithms
    tags: ['algorithms', 'graph', 'DFS', 'depth-first search', 'traversal', 'recursion', 'set']
  },
  {
    id: 16,
    title: 'SQL Query: Select and Filter Data',
    difficulty: 'Medium', // SQL queries can be complex, but this is foundational
    topic: 'Database and SQL',
    description: \`
    You are given a table named \`Students\` with the following columns:
    - \`StudentID\` (Integer, Primary Key)
    - \`FirstName\` (Text)
    - \`LastName\` (Text)
    - \`Age\` (Integer)
    - \`Subject\` (Text)
    - \`Grade\` (Integer)

    Write an SQL query to select the \`FirstName\`, \`LastName\`, and \`Subject\` of all students who are older than 17 and have a Grade of 85 or higher in 'Computer Science'.
    Order the results by \`LastName\` in ascending order.
    \`,
    starterCode: \`-- Write your SQL query below
-- SELECT FirstName, LastName, Subject
-- FROM Students
-- WHERE ...
-- ORDER BY ... ;
\`,
    
    solutionCode: \`SELECT FirstName, LastName, Subject
FROM Students
WHERE Age > 17 AND Subject = 'Computer Science' AND Grade >= 85
ORDER BY LastName ASC;
\`,
    
    testCases: [
      {
        input: "Table Students: (1, 'John', 'Doe', 18, 'Computer Science', 90), (2, 'Jane', 'Smith', 17, 'Computer Science', 88), (3, 'Peter', 'Jones', 19, 'Physics', 82), (4, 'Alice', 'Williams', 18, 'Computer Science', 80), (5, 'Bob', 'Brown', 19, 'Computer Science', 85)",
        expectedOutput: "Query should return: (Bob, Brown, Computer Science), (John, Doe, Computer Science)" 
        // Note: For SQL, expected output is often conceptual or a specific query string.
        // Here, we describe the records that should be returned.
      },
      {
        input: "SELECT query for students older than 17, in 'Computer Science' with Grade >= 85, ordered by LastName.",
        expectedOutput: "SELECT FirstName, LastName, Subject FROM Students WHERE Age > 17 AND Subject = 'Computer Science' AND Grade >= 85 ORDER BY LastName ASC;"
      },
      {
        input: "Table Students: (1, 'Emily', 'Davis', 18, 'Mathematics', 92), (2, 'David', 'Wilson', 19, 'Computer Science', 84), (3, 'Sarah', 'Clark', 18, 'Computer Science', 95)",
        expectedOutput: "Query should return: (Sarah, Clark, Computer Science)"
      },
      {
        input: "Table Students: (1, 'Chris', 'Lee', 18, 'Computer Science', 85), (2, 'Laura', 'Hall', 18, 'Computer Science', 87)",
        expectedOutput: "Query should return: (Laura, Hall, Computer Science), (Chris, Lee, Computer Science) (if Lee is after Hall, else reverse)"
        // Test case refined: Order by LastName ASC means Hall then Lee.
        // expectedOutput: "Query should return: ('Laura', 'Hall', 'Computer Science'), ('Chris', 'Lee', 'Computer Science')"
        // Corrected expected output based on alphabetical order by LastName
        // expectedOutput: "[('Chris', 'Lee', 'Computer Science'), ('Laura', 'Hall', 'Computer Science')]" // Assuming Lee before Hall
        // Corrected to: Hall then Lee
        expectedOutput: "Query should return: (Laura, Hall, Computer Science), (Chris, Lee, Computer Science) - actual order: Hall, Lee"
      }
    ],
    hints: [
      'Use the \`SELECT\` statement to specify the columns you want to retrieve.',
      'Use the \`FROM\` clause to specify the table.',
      'Use the \`WHERE\` clause to filter records based on conditions. Combine multiple conditions using \`AND\`.',
      'Use comparison operators like \`>\` (greater than) and \`>=\` (greater than or equal to).',
      'String literals in SQL are usually enclosed in single quotes (e.g., \'Computer Science\').',
      'Use the \`ORDER BY\` clause to sort the results. \`ASC\` specifies ascending order.'
    ],
    timeEstimate: 20,
    specPoint: '4.3.2', // SQL - Query language
    tags: ['database', 'SQL', 'query', 'select', 'where', 'filter', 'order by']
  }
];`