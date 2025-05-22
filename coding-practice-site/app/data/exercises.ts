export interface Exercise {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Challenge';
  topic: string;
  description: string;
  starterCode: string;
  solutionCode: string;
  testCases: {
    input: string;
    expectedOutput: string;
  }[];
  hints: string[];
  timeEstimate: number; // in minutes
  specPoint: string; // Cambridge specification reference
  tags: string[];
}

export interface Topic {
  id: number;
  name: string;
  description: string;
  icon: string;
  specReference: string;
}

// Cambridge A Level Computer Science (9618) Topics for Paper 4
export const topics: Topic[] = [
  {
    id: 1,
    name: 'Computational Thinking',
    description: 'Abstraction, decomposition, and algorithmic thinking',
    icon: '🧠',
    specReference: '4.1',
  },
  {
    id: 2,
    name: 'Algorithms',
    description: 'Design, testing and implementation of algorithms',
    icon: '📝',
    specReference: '4.2',
  },
  {
    id: 3,
    name: 'Programming Fundamentals',
    description: 'Basic programming constructs and techniques',
    icon: '🔨',
    specReference: '4.3',
  },
  {
    id: 4,
    name: 'Data Structures',
    description: 'Arrays, lists, queues, stacks, and trees',
    icon: '📊',
    specReference: '4.4',
  },
  {
    id: 5,
    name: 'Object-Oriented Programming',
    description: 'Classes, objects, inheritance, and polymorphism',
    icon: '🧩',
    specReference: '4.5',
  },
  {
    id: 6,
    name: 'Sorting and Searching',
    description: 'Implementation and analysis of sorting and searching algorithms',
    icon: '🔍',
    specReference: '4.6',
  },
  {
    id: 7,
    name: 'File Processing',
    description: 'Reading from and writing to files',
    icon: '📁',
    specReference: '4.7',
  },
  {
    id: 8,
    name: 'Recursion',
    description: 'Recursive algorithms and implementation',
    icon: '↩️',
    specReference: '4.8',
  },
  {
    id: 9,
    name: 'Exception Handling',
    description: 'Error detection and handling techniques',
    icon: '⚠️',
    specReference: '4.9',
  },
  {
    id: 10,
    name: 'Testing and Debugging',
    description: 'Test strategies and debugging techniques',
    icon: '🐛',
    specReference: '4.10',
  },
];

// Sample exercises (first 5 exercises)
export const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Binary Search Implementation',
    difficulty: 'Medium',
    topic: 'Sorting and Searching',
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
    ],
    timeEstimate: 15,
    specPoint: '4.6.2',
    tags: ['search', 'binary search', 'algorithm', 'array']
  },
  {
    id: 2,
    title: 'Bubble Sort Algorithm',
    difficulty: 'Easy',
    topic: 'Sorting and Searching',
    description: `
    Implement the bubble sort algorithm to sort an array of numbers in ascending order.
    
    Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
    The algorithm gets its name because smaller elements "bubble" to the top of the list.
    
    Example:
    Input: [64, 34, 25, 12, 22, 11, 90]
    Output: [11, 12, 22, 25, 34, 64, 90]
    
    Your task is to implement the bubble_sort function that takes an array as input and returns the sorted array.
    `,
    starterCode: `def bubble_sort(arr):
    # Your implementation here
    pass

# Test case
numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))  # Should print [11, 12, 22, 25, 34, 64, 90]`,
    
    solutionCode: `def bubble_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Flag to optimize if no swaps occur
        swapped = False
        
        # Last i elements are already in place
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                
        # If no swapping occurred in this pass, array is sorted
        if not swapped:
            break
            
    return arr

# Test case
numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))  # Should print [11, 12, 22, 25, 34, 64, 90]`,
    
    testCases: [
      {
        input: '[64, 34, 25, 12, 22, 11, 90]',
        expectedOutput: '[11, 12, 22, 25, 34, 64, 90]'
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
      'Use nested loops: the outer loop runs n times, and the inner loop runs n-i-1 times',
      'Compare adjacent elements and swap them if they are in the wrong order',
      'Optimization: if no swaps occur in an entire pass, the array is already sorted',
      'Remember that bubble sort has O(n²) time complexity in the worst case'
    ],
    timeEstimate: 10,
    specPoint: '4.6.1',
    tags: ['sort', 'bubble sort', 'algorithm', 'array']
  },
  {
    id: 3,
    title: 'Bank Account Class',
    difficulty: 'Medium',
    topic: 'Object-Oriented Programming',
    description: `
    Create a BankAccount class that simulates a simple bank account. The class should have the following:
    
    Attributes:
    - account_number (string)
    - account_holder (string)
    - balance (float, default 0.0)
    
    Methods:
    - deposit(amount): Adds the amount to the balance if amount > 0
    - withdraw(amount): Subtracts the amount from the balance if sufficient funds are available
    - get_balance(): Returns the current balance
    - __str__(): Returns a string representation of the account
    
    Requirements:
    1. The balance should never be allowed to go below 0
    2. The deposit and withdraw methods should handle invalid inputs
    3. The methods should raise appropriate exceptions for error conditions
    
    Example usage:
    ```
    account = BankAccount("12345", "John Doe", 100.0)
    account.deposit(50.0)  # Balance becomes 150.0
    account.withdraw(30.0)  # Balance becomes 120.0
    print(account.get_balance())  # Prints 120.0
    account.withdraw(200.0)  # Should raise an exception
    ```
    `,
    starterCode: `class BankAccount:
    # Your implementation here
    pass

# Test cases
try:
    # Create an account
    account = BankAccount("12345", "John Doe", 100.0)
    
    # Test deposit
    account.deposit(50.0)
    print(f"Balance after deposit: {account.get_balance()}")
    
    # Test withdraw
    account.withdraw(30.0)
    print(f"Balance after withdrawal: {account.get_balance()}")
    
    # Test invalid deposit
    account.deposit(-10.0)  # Should handle this invalid input
    
    # Test withdrawal with insufficient funds
    account.withdraw(200.0)  # Should handle this error condition
    
except Exception as e:
    print(f"Error: {e}")

print(account)  # Test string representation`,
    
    solutionCode: `class BankAccount:
    def __init__(self, account_number, account_holder, initial_balance=0.0):
        self.account_number = account_number
        self.account_holder = account_holder
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative")
        self.balance = initial_balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        return self.balance
    
    def get_balance(self):
        return self.balance
    
    def __str__(self):
        return f"Account({self.account_number}, {self.account_holder}, Balance: £{self.balance:.2f})"

# Test cases
try:
    # Create an account
    account = BankAccount("12345", "John Doe", 100.0)
    
    # Test deposit
    account.deposit(50.0)
    print(f"Balance after deposit: {account.get_balance()}")
    
    # Test withdraw
    account.withdraw(30.0)
    print(f"Balance after withdrawal: {account.get_balance()}")
    
    # Test invalid deposit
    try:
        account.deposit(-10.0)  # Should raise ValueError
    except ValueError as e:
        print(f"Invalid deposit handled: {e}")
    
    # Test withdrawal with insufficient funds
    try:
        account.withdraw(200.0)  # Should raise ValueError
    except ValueError as e:
        print(f"Insufficient funds handled: {e}")
    
except Exception as e:
    print(f"Error: {e}")

print(account)  # Test string representation`,
    
    testCases: [
      {
        input: 'BankAccount("12345", "John Doe", 100.0); account.deposit(50.0); account.get_balance()',
        expectedOutput: '150.0'
      },
      {
        input: 'BankAccount("12345", "John Doe", 100.0); account.withdraw(30.0); account.get_balance()',
        expectedOutput: '70.0'
      },
      {
        input: 'BankAccount("12345", "John Doe", 100.0); try: account.withdraw(200.0) except ValueError: print("Insufficient funds")',
        expectedOutput: 'Insufficient funds'
      },
      {
        input: 'BankAccount("12345", "John Doe", 100.0); try: account.deposit(-10.0) except ValueError: print("Invalid amount")',
        expectedOutput: 'Invalid amount'
      }
    ],
    hints: [
      'Initialize the account with the provided parameters in the __init__ method',
      'In the deposit method, check if the amount is positive before adding it to the balance',
      'In the withdraw method, check if there are sufficient funds before allowing withdrawal',
      'Use ValueError exceptions to handle invalid inputs',
      'Remember to return the updated balance from deposit and withdraw methods',
      'Format the balance with two decimal places in the __str__ method'
    ],
    timeEstimate: 20,
    specPoint: '4.5.1',
    tags: ['object-oriented programming', 'classes', 'exceptions']
  },
  {
    id: 4,
    title: 'Stack Implementation',
    difficulty: 'Medium',
    topic: 'Data Structures',
    description: `
    Implement a Stack data structure using a Python class. A stack follows the Last-In-First-Out (LIFO) principle.
    
    Your Stack class should implement the following methods:
    
    - push(item): Add an item to the top of the stack
    - pop(): Remove and return the top item from the stack, or raise an exception if the stack is empty
    - peek(): Return the top item without removing it, or raise an exception if the stack is empty
    - is_empty(): Return True if the stack is empty, False otherwise
    - size(): Return the number of items in the stack
    
    Example usage:
    ```
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(stack.pop())  # Output: 3
    print(stack.peek())  # Output: 2
    print(stack.size())  # Output: 2
    ```
    `,
    starterCode: `class Stack:
    # Your implementation here
    pass

# Test the Stack implementation
stack = Stack()

# Test push and size
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Size after pushing 3 items: {stack.size()}")

# Test peek
print(f"Top item (peek): {stack.peek()}")

# Test pop
print(f"Popped item: {stack.pop()}")
print(f"Size after popping: {stack.size()}")

# Test is_empty
print(f"Is stack empty? {stack.is_empty()}")

# Pop remaining items
print(f"Popped item: {stack.pop()}")
print(f"Popped item: {stack.pop()}")
print(f"Is stack empty? {stack.is_empty()}")

# Test popping from empty stack
try:
    stack.pop()
except Exception as e:
    print(f"Error when popping from empty stack: {e}")`,
    
    solutionCode: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if self.is_empty():
            raise IndexError("Pop from an empty stack")
        return self.items.pop()
    
    def peek(self):
        if self.is_empty():
            raise IndexError("Peek from an empty stack")
        return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def __str__(self):
        return str(self.items)

# Test the Stack implementation
stack = Stack()

# Test push and size
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Size after pushing 3 items: {stack.size()}")

# Test peek
print(f"Top item (peek): {stack.peek()}")

# Test pop
print(f"Popped item: {stack.pop()}")
print(f"Size after popping: {stack.size()}")

# Test is_empty
print(f"Is stack empty? {stack.is_empty()}")

# Pop remaining items
print(f"Popped item: {stack.pop()}")
print(f"Popped item: {stack.pop()}")
print(f"Is stack empty? {stack.is_empty()}")

# Test popping from empty stack
try:
    stack.pop()
except Exception as e:
    print(f"Error when popping from empty stack: {e}")`,
    
    testCases: [
      {
        input: 'stack = Stack(); stack.push(1); stack.push(2); stack.size()',
        expectedOutput: '2'
      },
      {
        input: 'stack = Stack(); stack.push(1); stack.push(2); stack.peek()',
        expectedOutput: '2'
      },
      {
        input: 'stack = Stack(); stack.push(1); stack.push(2); stack.pop(); stack.size()',
        expectedOutput: '1'
      },
      {
        input: 'stack = Stack(); stack.is_empty()',
        expectedOutput: 'True'
      },
      {
        input: 'stack = Stack(); try: stack.pop() except IndexError: print("Cannot pop from empty stack")',
        expectedOutput: 'Cannot pop from empty stack'
      }
    ],
    hints: [
      'Use a Python list to store the stack items',
      'For push, use the append() method of lists',
      'For pop, use the pop() method of lists',
      'For peek, access the last item in the list without removing it',
      'Check if the stack is empty before performing pop and peek operations',
      'Raise appropriate exceptions when operations cannot be performed',
      'The size of the stack is simply the length of the list'
    ],
    timeEstimate: 15,
    specPoint: '4.4.2',
    tags: ['data structures', 'stack', 'LIFO']
  },
  {
    id: 5,
    title: 'Recursive Factorial',
    difficulty: 'Easy',
    topic: 'Recursion',
    description: `
    Implement a recursive function to calculate the factorial of a non-negative integer.
    
    The factorial of a number n is the product of all positive integers less than or equal to n.
    It is denoted by n! and calculated as:
    
    n! = n × (n-1) × (n-2) × ... × 2 × 1
    
    Special cases:
    - 0! = 1
    - 1! = 1
    
    Examples:
    - 5! = 5 × 4 × 3 × 2 × 1 = 120
    - 3! = 3 × 2 × 1 = 6
    
    Your function should:
    1. Use recursion (calling itself)
    2. Handle the base case (0 or 1)
    3. Raise a ValueError for negative inputs
    
    Note: For very large numbers, be aware of potential stack overflow due to recursion depth.
    `,
    starterCode: `def factorial(n):
    # Your implementation here
    pass

# Test cases
try:
    print(f"factorial(0) = {factorial(0)}")
    print(f"factorial(1) = {factorial(1)}")
    print(f"factorial(5) = {factorial(5)}")
    print(f"factorial(10) = {factorial(10)}")
    
    # Test with negative number
    print(f"factorial(-1) = {factorial(-1)}")
except ValueError as e:
    print(f"Error: {e}")`,
    
    solutionCode: `def factorial(n):
    # Handle negative input
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    
    # Base cases
    if n == 0 or n == 1:
        return 1
    
    # Recursive case
    return n * factorial(n - 1)

# Test cases
try:
    print(f"factorial(0) = {factorial(0)}")
    print(f"factorial(1) = {factorial(1)}")
    print(f"factorial(5) = {factorial(5)}")
    print(f"factorial(10) = {factorial(10)}")
    
    # Test with negative number
    print(f"factorial(-1) = {factorial(-1)}")
except ValueError as e:
    print(f"Error: {e}")`,
    
    testCases: [
      {
        input: 'factorial(0)',
        expectedOutput: '1'
      },
      {
        input: 'factorial(1)',
        expectedOutput: '1'
      },
      {
        input: 'factorial(5)',
        expectedOutput: '120'
      },
      {
        input: 'factorial(10)',
        expectedOutput: '3628800'
      },
      {
        input: 'try: factorial(-1) except ValueError: print("Invalid input")',
        expectedOutput: 'Invalid input'
      }
    ],
    hints: [
      'Identify the base case(s): factorial(0) = 1 and factorial(1) = 1',
      'For the recursive case, remember that factorial(n) = n * factorial(n-1)',
      'Check for negative inputs before processing',
      'Think about the termination condition to avoid infinite recursion',
      'Consider how to handle edge cases like factorial(0)'
    ],
    timeEstimate: 10,
    specPoint: '4.8.1',
    tags: ['recursion', 'factorial', 'mathematics']
  }
];`