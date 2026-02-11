// ============== CODE LIBRARY - Main JavaScript ==============
// This file handles all code library functionality

// ===== CODE LIBRARY DATA STRUCTURE =====
// Add new codes here following the same format
// Each language should have entries with: id, name, language, code, output, category

// HOW TO ADD A NEW CODE EXAMPLE:
// ================================
// 1. Choose a unique ID for your code (format: language_codename, e.g., javascript_fibonacci)
// 2. Add a new object to the codeLibrary object following this structure:
//
//    language_codename: {
//        id: 'language_codename',                      // Unique identifier
//        name: 'Code Name',                            // Display name (e.g., 'Fibonacci Sequence')
//        language: 'JavaScript',                       // Language name (must match entries in 'languages' array)
//        languageId: 'javascript',                     // Language ID (must match 'languages' array)
//        category: 'Category Name',                    // Category (e.g., 'Loops', 'Functions', 'Arrays')
//        code: `your code here`,                       // The code to display (wrap in backticks)
//        output: `expected output`,                    // Expected output or description
//        description: 'Brief description of the code' // What the code does
//    },
//
// 3. Make sure the languageId matches one of the languages in the 'languages' array below
// 4. Add proper syntax highlighting by checking the supportedLanguages list
// 5. Test by filtering to your language tab and searching for your code
//
// SUPPORTED LANGUAGES (must match 'languages' array):
// - javascript, python, java, c, cpp, html, css, php, sql, go, rust
//
// EXAMPLE:
// --------
// javascript_fibonacci: {
//     id: 'javascript_fibonacci',
//     name: 'Fibonacci Sequence',
//     language: 'JavaScript',
//     languageId: 'javascript',
//     category: 'Recursion',
//     code: `function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));`,
//     output: `55`,
//     description: 'Calculate the nth Fibonacci number using recursion'
// },
// ================================

const codeLibrary = {
    // JAVASCRIPT CODES
    // TODO: Add more JavaScript codes here by following the same pattern below
    javascript_hello: {
        id: 'javascript_hello',
        name: 'Hello World',
        language: 'JavaScript',
        languageId: 'javascript',
        category: 'Basic',
        code: `console.log("Hello World");`,
        output: `Hello World`,
        description: 'Print Hello World to console'
    },
    javascript_array: {
        id: 'javascript_array',
        name: 'Array Methods',
        language: 'JavaScript',
        languageId: 'javascript',
        category: 'Arrays',
        code: `const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(x => x * 2);
console.log(doubled);`,
        output: `[ 2, 4, 6, 8, 10 ]`,
        description: 'Demonstrate array map method'
    },
    // ====================================

    // PYTHON CODES
    // TODO: Add more Python codes here by following the same pattern below
    python_hello: {
        id: 'python_hello',
        name: 'Hello World',
        language: 'Python',
        languageId: 'python',
        category: 'Basic',
        code: `print("Hello World")`,
        output: `Hello World`,
        description: 'Print Hello World'
    },
    python_list: {
        id: 'python_list',
        name: 'List Comprehension',
        language: 'Python',
        languageId: 'python',
        category: 'Lists',
        code: `numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(squared)`,
        output: `[1, 4, 9, 16, 25]`,
        description: 'Create squared numbers using list comprehension'
    },

    // ====== 18 PYTHON CODES WITH DETAILED EXPLANATIONS ======

    // Code 1: Hello World
    python_code1_hello_world: {
        id: 'python_code1_hello_world',
        name: 'Hello World',
        language: 'Python',
        languageId: 'python',
        category: 'Basic',
        code: `print("Hello World")`,
        output: `Hello World`,
        description: `EXPLANATION: This is the simplest Python program.\n\nLOGIC:\n• print() is a built-in function that outputs text to the console\n• Anything written inside quotes is a string (text)\n• print() simply displays the arguments to the console\n\nHOW IT WORKS:\n1. Python interpreter reads "Hello World"\n2. Calls the print() function\n3. Displays the string to the console/terminal\n\nUSE CASE:\nDisplaying data, debugging, printing messages`
    },

    // Code 2: Sum of Two Numbers
    python_code2_sum: {
        id: 'python_code2_sum',
        name: 'Sum of Two Numbers',
        language: 'Python',
        languageId: 'python',
        category: 'Basic Arithmetic',
        code: `a = 10
b = 20
print(a + b)`,
        output: `30`,
        description: `EXPLANATION: Adding two numbers and displaying their sum.\n\nLOGIC:\n• a = 10: Variable 'a' is assigned the value 10\n• b = 20: Variable 'b' is assigned the value 20\n• a + b: The plus operator (+) adds both numbers\n• print(): Displays the result\n\nHOW IT WORKS:\n1. Variable 'a' is created in memory with value 10\n2. Variable 'b' is created in memory with value 20\n3. The + operator adds them: 10 + 20 = 30\n4. The result 30 is printed\n\nUSE CASE:\nPerforming calculations, simple arithmetic operations`
    },

    // Code 3: Square of a Number
    python_code3_square: {
        id: 'python_code3_square',
        name: 'Square of a Number',
        language: 'Python',
        languageId: 'python',
        category: 'Input/Output',
        code: `n = int(input("Enter number: "))
print(n * n)`,
        output: `Enter number: 5\n25`,
        description: `EXPLANATION: Get a number from the user and calculate its square.\n\nLOGIC:\n• input(): Receives data from the user as a string\n• int(): Converts the string to an integer number\n• n * n: Multiplies the number by itself to get the square\n• print(): Displays the result\n\nHOW IT WORKS:\n1. input() function displays "Enter number: " and waits for user input\n2. User types a number (e.g., 5)\n3. int() function converts the string "5" to integer 5\n4. n * n calculates 5 * 5 = 25\n5. Result 25 is printed\n\nUSE CASE:\nUser interactions, input validation, calculations from user data`
    },

    // Code 4: Check Even or Odd
    python_code4_even_odd: {
        id: 'python_code4_even_odd',
        name: 'Check Even or Odd',
        language: 'Python',
        languageId: 'python',
        category: 'Conditional Logic',
        code: `n = int(input("Enter number: "))
if n % 2 == 0:
    print("Even")
else:
    print("Odd")`,
        output: `Enter number: 4\nEven`,
        description: `EXPLANATION: Check whether a number is even or odd.\n\nLOGIC:\n• % (modulo) operator returns the remainder\n• n % 2: When dividing a number by 2, what is the remainder?\n• If remainder = 0 => EVEN number\n• If remainder = 1 => ODD number\n• if...else: Makes a decision (if this, then that)\n\nHOW IT WORKS:\n1. Get number input from user\n2. Check if n % 2 == 0 (is the remainder 0?)\n3. If yes => Print "Even"\n4. If no => Print "Odd"\n\nEXAMPLE:\n• 4 % 2 = 0 (4 divides evenly by 2) => Even\n• 7 % 2 = 1 (7 divided by 2 leaves 1) => Odd\n\nUSE CASE:\nNumber classification, data filtering, conditional checks`
    },

    // Code 5: Maximum of Two Numbers
    python_code5_max: {
        id: 'python_code5_max',
        name: 'Maximum of Two Numbers',
        language: 'Python',
        languageId: 'python',
        category: 'Built-in Functions',
        code: `a = 5
b = 9
print(max(a, b))`,
        output: `9`,
        description: `EXPLANATION: Find and display the larger of two numbers.\n\nLOGIC:\n• max() is a built-in function\n• It takes multiple values and returns the largest one\n• Comparison happens internally\n\nHOW IT WORKS:\n1. Assign a = 5 and b = 9\n2. Call max(a, b) function\n3. The max function compares both values\n4. Since 9 > 5, it returns 9\n5. print() displays 9\n\nALTERNATIVE (using if-else):\nif a > b:\n    print(a)\nelse:\n    print(b)\n\nUSE CASE:\nComparing values, finding highest score, maximum price, best result`
    },

    // Code 6: Multiplication Table
    python_code6_table: {
        id: 'python_code6_table',
        name: 'Multiplication Table',
        language: 'Python',
        languageId: 'python',
        category: 'Loops',
        code: `n = int(input("Enter number: "))
for i in range(1, 11):
    print(n * i)`,
        output: `Enter number: 2\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20`,
        description: `EXPLANATION: Print the multiplication table of a given number.\n\nLOGIC:\n• for loop: Used for repetitive tasks\n• range(1, 11): Generates numbers from 1 to 10\n• n * i: Multiplies the number by each i value\n\nHOW IT WORKS:\n1. Get number input from user (e.g., 2)\n2. For loop runs from i = 1 to i = 10\n3. In each iteration:\n   - i=1: 2 * 1 = 2 print\n   - i=2: 2 * 2 = 4 print\n   - i=3: 2 * 3 = 6 print\n   ... and so on\n4. Total 10 lines are printed\n\nLOOP FLOW:\nfor i in range(1, 11): => Assigns i values 1,2,3...10\n\nUSE CASE:\nPattern generation, multiplication tables, repetitive calculations`
    },

    // Code 7: Calculate Factorial
    python_code7_factorial: {
        id: 'python_code7_factorial',
        name: 'Calculate Factorial',
        language: 'Python',
        languageId: 'python',
        category: 'Loops & Math',
        code: `n = int(input("Enter number: "))
fact = 1
for i in range(1, n + 1):
    fact *= i
print(fact)`,
        output: `Enter number: 5\n120`,
        description: `EXPLANATION: Calculate the factorial of a number (n! = n × (n-1) × (n-2) × ... × 1).\n\nLOGIC:\n• Factorial: Product of all numbers\n• 5! = 5 × 4 × 3 × 2 × 1 = 120\n• fact *= i: Means fact = fact * i (Shorthand)\n• range(1, n+1): Loop from 1 to n\n\nHOW IT WORKS:\n1. Get number input from user (e.g., 5)\n2. Set fact = 1 as starting value\n3. For loop runs:\n   - i=1: fact = 1 * 1 = 1\n   - i=2: fact = 1 * 2 = 2\n   - i=3: fact = 2 * 3 = 6\n   - i=4: fact = 6 * 4 = 24\n   - i=5: fact = 24 * 5 = 120\n4. Final result 120 is printed\n\n*= OPERATOR:\nfact *= i is the same as fact = fact * i\n\nUSE CASE:\nCombinatorics, permutation, probability calculations`
    },

    // Code 8: Check Prime Number
    python_code8_prime: {
        id: 'python_code8_prime',
        name: 'Check Prime Number',
        language: 'Python',
        languageId: 'python',
        category: 'Conditional Loop',
        code: `n = int(input("Enter number: "))
flag = True
for i in range(2, n):
    if n % i == 0:
        flag = False
        break
print("Prime" if flag else "Not Prime")`,
        output: `Enter number: 7\\nPrime`,
        description: `EXPLANATION: Check if a number is prime or not.\\n\\nLOGIC:\\n• Prime number: Only divisible by 1 and itself\\n• Examples of primes: 2, 3, 5, 7, 11, 13\\n• flag = True: Initial assumption (number is prime)\\n• When a divisor is found, set flag = False\\n• break: Exit the loop immediately\\n\\nHOW IT WORKS:\\n1. Assume flag = True (number is prime)\\n2. Check each number from 2 to (n-1)\\n3. When n % i == 0 (a divisor is found):\\n   - Set flag = False\\n   - Exit loop with break\\n4. Finally use ternary operator:\\n   - If flag = True => Print "Prime"\\n   - If flag = False => Print "Not Prime"\\n\\nEXAMPLE:\\n• 7: No divisors found (2,3,4,5,6) => Prime\\n• 6: 6 % 2 = 0 (2 is a divisor) => Not Prime\\n\\nUSE CASE:\\nNumber validation, cryptography, algorithm optimization`
    },

    // Code 9: Sum of List Elements
    python_code9_list_sum: {
        id: 'python_code9_list_sum',
        name: 'Sum of List Elements',
        language: 'Python',
        languageId: 'python',
        category: 'Lists',
        code: `lst = [1, 2, 3, 4]
print(sum(lst))`,
        output: `10`,
        description: `EXPLANATION: Add all elements in a list and print the total sum.\n\nLOGIC:\n• List: A collection of elements (e.g., [1, 2, 3, 4])\n• sum(): Built-in function that adds all elements\n• 1 + 2 + 3 + 4 = 10\n\nHOW IT WORKS:\n1. Create a list with 4 elements: [1, 2, 3, 4]\n2. Call sum(lst) function\n3. Function internally:\n   - result = 0 + 1 = 1\n   - result = 1 + 2 = 3\n   - result = 3 + 3 = 6\n   - result = 6 + 4 = 10\n4. Return final result 10\n5. print() displays 10\n\nALTERNATIVE (using manual loop):\nsum_value = 0\nfor num in lst:\n    sum_value += num\nprint(sum_value)\n\nUSE CASE:\nData aggregation, total calculations, statistics`
    },

    // Code 10: Maximum Element in List
    python_code10_list_max: {
        id: 'python_code10_list_max',
        name: 'Maximum Element in List',
        language: 'Python',
        languageId: 'python',
        category: 'Lists',
        code: `lst = [5, 9, 2, 8]
print(max(lst))`,
        output: `9`,
        description: `EXPLANATION: Find and display the largest element in a list.\\n\\nLOGIC:\\n• max() iterates through the list and returns the maximum value\\n• In [5, 9, 2, 8], 9 is the largest\\n\\nHOW IT WORKS:\\n1. Define list: [5, 9, 2, 8]\\n2. Call max(lst) function\\n3. Function internally compares all values:\\n   - 5 vs 9 => 9 is larger\\n   - 9 vs 2 => 9 is larger\\n   - 9 vs 8 => 9 is larger\\n4. Mark 9 as the maximum element\\n5. Return and print 9\\n\\nSIMILAR FUNCTIONS:\\n• min(lst): Returns minimum element - 2\\n• len(lst): Returns list length - 4\\n• sorted(lst): Returns sorted list - [2, 5, 8, 9]\\n\\nUSE CASE:\\nFinding highest score, maximum price, best performance`
    },

    // Code 11: Reverse a String
    python_code11_reverse_string: {
        id: 'python_code11_reverse_string',
        name: 'Reverse a String',
        language: 'Python',
        languageId: 'python',
        category: 'Strings',
        code: `s = "python"
print(s[::-1])`,
        output: `nohtyp`,
        description: `EXPLANATION: Print a string in reverse order.\\n\\nLOGIC:\\n• [::-1]: Special string slicing syntax\\n• : operator specifies start:end:step\\n• -1 step: Traverse the string backward\\n• "python" reversed becomes "nohtyp"\\n\\nHOW IT WORKS:\\n1. Define string s = "python"\\n2. Use s[::-1] syntax:\\n   - [:] = entire string\\n   - :: = step specification\\n   - -1 = negative step (reverse direction)\\n3. Python automatically reverses the string:\\n   - p-y-t-h-o-n => n-o-h-t-y-p\\n4. Result: "nohtyp"\\n\\nSTRING INDEXING:\\nOriginal: p(0) y(1) t(2) h(3) o(4) n(5)\\nReverse:  n(5) o(4) h(3) t(2) y(1) p(0)\\n\\nUSE CASE:\\nPalindrome checking, string manipulation, data reversal, encryption`
    },

    // Code 12: Check Palindrome String
    python_code12_palindrome: {
        id: 'python_code12_palindrome',
        name: 'Check Palindrome String',
        language: 'Python',
        languageId: 'python',
        category: 'Strings & Logic',
        code: `s = "madam"
if s == s[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`,
        output: `Palindrome`,
        description: `EXPLANATION: Check if a string is a palindrome (reads same forwards and backwards).\\n\\nLOGIC:\\n• Palindrome: String that reads the same forward and backward\\n• "madam" reversed is "madam" - same!\\n• s == s[::-1]: Compare original string with reversed version\\n\\nHOW IT WORKS:\\n1. Original string: s = "madam"\\n2. Reversed string: s[::-1] = "madam"\\n3. Comparison: "madam" == "madam" => TRUE\\n4. Condition is true, so print "Palindrome"\\n\\nPALINDROME EXAMPLES:\\n✓ Palindromes: madam, radar, level, noon, racecar\\n✗ Non-palindromes: python, hello, world\\n\\nSTEP-BY-STEP:\\n1. String characters: m-a-d-a-m\\n2. Reverse order: m-a-d-a-m (same!)\\n3. Result: Palindrome\\n\\nUSE CASE:\\nData validation, pattern recognition, wordplay games`
    },

    // Code 13: Fibonacci Sequence
    python_code13_fibonacci: {
        id: 'python_code13_fibonacci',
        name: 'Fibonacci Sequence',
        language: 'Python',
        languageId: 'python',
        category: 'Sequences',
        code: `a, b = 0, 1
for i in range(5):
    print(a)
    a, b = b, a + b`,
        output: `0\\n1\\n1\\n2\\n3`,
        description: `EXPLANATION: Print the Fibonacci series (each number is sum of previous two).\\n\\nLOGIC:\\n• Fibonacci: F(n) = F(n-1) + F(n-2)\\n• Start: 0, 1\\n• Next: 0+1=1, 1+1=2, 1+2=3, 2+3=5, ...\\n• a, b = b, a+b: Update both variables simultaneously\\n\\nHOW IT WORKS:\\n1. Initialize a=0, b=1\\n2. Loop runs 5 iterations:\\n   - Iteration 1: print(a=0), then a=1, b=0+1=1\\n   - Iteration 2: print(a=1), then a=1, b=1+1=2\\n   - Iteration 3: print(a=1), then a=2, b=1+2=3\\n   - Iteration 4: print(a=2), then a=3, b=2+3=5\\n   - Iteration 5: print(a=3), then a=5, b=3+5=8\\n3. Output: 0, 1, 1, 2, 3\\n\\nFIBONACCI SEQUENCE:\\n0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...\\n\\nSIMULTANEOUS ASSIGNMENT:\\na, b = b, a+b updates both variables in one line\\n\\nUSE CASE:\\nNature patterns, algorithm analysis, mathematical sequences`
    },

    // Code 14: Check Positive, Negative or Zero
    python_code14_sign_check: {
        id: 'python_code14_sign_check',
        name: 'Check Positive, Negative or Zero',
        language: 'Python',
        languageId: 'python',
        category: 'Conditional Logic',
        code: `n = int(input("Enter number: "))
if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")`,
        output: `Enter number: -5\\nNegative`,
        description: `EXPLANATION: Check if a number is positive, negative, or zero.\\n\\nLOGIC:\\n• if-elif-else: Execute different code blocks based on conditions\\n• n > 0: Positive number\\n• n < 0: Negative number\\n• else: Zero (default case)\\n\\nHOW IT WORKS:\\n1. Get number input from user\\n2. First condition check: n > 0?\\n   - If yes => Print "Positive"\\n3. If not, check elif: n < 0?\\n   - If yes => Print "Negative"\\n4. If none of above, execute else:\\n   - Print "Zero"\\n\\nCONDITION FLOW:\\nn = 5  => 5 > 0 = True => Positive\\nn = -5 => -5 > 0 = False, -5 < 0 = True => Negative\\nn = 0  => 0 > 0 = False, 0 < 0 = False => Zero\\n\\nDIFFERENCE (if vs elif):\\n• if: Each condition is independent\\n• elif: Check only if previous condition is false\\n• else: Execute if all conditions are false\\n\\nUSE CASE:\\nInput validation, categorization, decision making`
    },

    // Code 15: Create a Simple Function
    python_code15_function: {
        id: 'python_code15_function',
        name: 'Create a Simple Function',
        language: 'Python',
        languageId: 'python',
        category: 'Functions',
        code: `def add(a, b):
    return a + b

print(add(3, 4))`,
        output: `7`,
        description: `EXPLANATION: Create a function that adds two numbers and returns the result.\\n\\nLOGIC:\\n• def: Keyword to define a function\\n• add: Function name\\n• (a, b): Function parameters (inputs)\\n• return: Send result back from function\\n• print(add(3, 4)): Call function with arguments\\n\\nHOW IT WORKS:\\n1. def add(a, b): Function definition\\n   - 'a' and 'b' are parameters (placeholders)\\n   - Body contains a + b\\n2. return a + b: Calculate sum and return it\\n3. print(add(3, 4)): Function call\\n   - Substitute a=3, b=4\\n   - Calculate 3 + 4 = 7\\n   - Return 7\\n4. print() displays 7\\n\\nFUNCTION BENEFITS:\\n• Code reusability\\n• Better organization\\n• Easier debugging\\n• Modular approach\\n\\nUSE CASE:\\nCode organization, reusable logic, abstraction`
    },

    // Code 16: Get String Length
    python_code16_string_length: {
        id: 'python_code16_string_length',
        name: 'Get String Length',
        language: 'Python',
        languageId: 'python',
        category: 'Strings',
        code: `s = "Python"
print(len(s))`,
        output: `6`,
        description: `EXPLANATION: Count the total number of characters in a string.\\n\\nLOGIC:\\n• len(): Built-in function that returns length/count\\n• "Python" has 6 characters: P-y-t-h-o-n\\n• Spaces and special characters are also counted\\n\\nHOW IT WORKS:\\n1. Define string s = "Python"\\n2. Call len(s) function\\n3. Function counts all characters:\\n   - P (1st)\\n   - y (2nd)\\n   - t (3rd)\\n   - h (4th)\\n   - o (5th)\\n   - n (6th)\\n4. Total count: 6\\n5. Print 6\\n\\nLEN() WITH DIFFERENT DATA TYPES:\\n• len("Hello") = 5\\n• len([1, 2, 3, 4]) = 4\\n• len((10, 20, 30)) = 3\\n• len({"a": 1, "b": 2}) = 2\\n\\nUSE CASE:\\nString validation, character counting, data validation`
    },

    // Code 17: Sort a List
    python_code17_sort_list: {
        id: 'python_code17_sort_list',
        name: 'Sort a List',
        language: 'Python',
        languageId: 'python',
        category: 'Lists',
        code: `lst = [4, 1, 3, 2]
lst.sort()
print(lst)`,
        output: `[1, 2, 3, 4]`,
        description: `EXPLANATION: Sort list elements in ascending (ascending) order.\\n\\nLOGIC:\\n• .sort(): List method that sorts in-place\\n• Original list is modified\\n• Ascending order (smallest to largest) is default\\n• [4, 1, 3, 2] becomes [1, 2, 3, 4]\\n\\nHOW IT WORKS:\\n1. Define list: lst = [4, 1, 3, 2]\\n2. Call lst.sort() method\\n3. Internal algorithm (like quicksort) sorts:\\n   Step 1: Compare elements\\n   Step 2: Rearrange them\\n   Final: [1, 2, 3, 4]\\n4. Print the sorted list\\n\\nSORT() VS SORTED():\\n• lst.sort(): In-place (modifies original list)\\n• sorted(lst): Returns new sorted list (original unchanged)\\n\\nDESCENDING ORDER:\\nlst.sort(reverse=True)  # Result: [4, 3, 2, 1]\\n\\nUSE CASE:\\nData arrangement, leaderboards, rankings, data organization`
    },

    // Code 18: Print a Dictionary
    python_code18_dictionary: {
        id: 'python_code18_dictionary',
        name: 'Print a Dictionary',
        language: 'Python',
        languageId: 'python',
        category: 'Dictionaries',
        code: `student = {"name": "Aman", "age": 18}
print(student)`,
        output: `{'name': 'Aman', 'age': 18}`,
        description: `EXPLANATION: Create a dictionary with key-value pairs and print it.\\n\\nLOGIC:\\n• Dictionary: Collection of key-value pairs\\n• Data stored in {} braces\\n• Key: "name", "age" (unique identifiers)\\n• Value: "Aman", 18 (actual data)\\n• print() displays entire dictionary\\n\\nHOW IT WORKS:\\n1. Define dictionary: student = {"name": "Aman", "age": 18}\\n   - "name" key has value "Aman"\\n   - "age" key has value 18\\n2. Call print(student)\\n3. Print entire dictionary in curly braces\\n4. Output: {'name': 'Aman', 'age': 18}\\n\\nDICTIONARY OPERATIONS:\\n• student["name"] => "Aman" (access)\\n• student["name"] = "Raj" (modify)\\n• student["city"] = "Delhi" (add new)\\n• del student["age"] (remove)\\n• student.keys() => dict_keys(['name', 'age'])\\n• student.values() => dict_values(['Aman', 18])\\n\\nDICTIONARY VS LIST:\\nList: [1, 2, 3] - ordered, numeric index\\nDict: {"name": "Aman"} - key-based access\\n\\nUSE CASE:\\nUser profiles, configuration settings, database records, structured data`
    },

    // ====================================

    // JAVA CODES
    // TODO: Add more Java codes here by following the same pattern below
    java_hello: {
        id: 'java_hello',
        name: 'Hello World',
        language: 'Java',
        languageId: 'java',
        category: 'Basic',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
        output: `Hello World`,
        description: 'Java Hello World program'
    },
    java_array: {
        id: 'java_array',
        name: 'Array Sum',
        language: 'Java',
        languageId: 'java',
        category: 'Arrays',
        code: `int[] numbers = {1, 2, 3, 4, 5};
int sum = 0;
for(int num : numbers) {
    sum += num;
}
System.out.println("Sum: " + sum);`,
        output: `Sum: 15`,
        description: 'Calculate sum of array elements'
    },

    // ====== 20 JAVA PROGRAMS WITH DETAILED EXPLANATIONS ======

    // Java Program 1: Print Your Name
    java_prog1_print_name: {
        id: 'java_prog1_print_name',
        name: 'Print Your Name',
        language: 'Java',
        languageId: 'java',
        category: 'Basic Output',
        code: `public class PrintName {
    public static void main(String[] args) {
        String name = "Aman";
        System.out.println("My name is: " + name);
    }
}`,
        output: `My name is: Aman`,
        description: `EXPLANATION: This program declares a string variable and prints your name.\\n\\nLOGIC:\\n• String: Data type to store text values\\n• name = "Aman": Variable stores a name\\n• System.out.println(): Outputs text to console\\n• String concatenation using +\\n\\nHOW IT WORKS:\\n1. Create a String variable named 'name'\\n2. Assign the value "Aman" to it\\n3. Concatenate the string with "My name is: "\\n4. Print the complete message\\n\\nKEY CONCEPTS:\\n• String: Text data type\\n• Variable: Named storage location\\n• System.out.println(): Java's print method\\n\\nUSE CASE:\\nDisplaying user information, name printing, basic output`
    },

    // Java Program 2: Add Two Numbers
    java_prog2_add_numbers: {
        id: 'java_prog2_add_numbers',
        name: 'Add Two Numbers',
        language: 'Java',
        languageId: 'java',
        category: 'Arithmetic',
        code: `public class AddNumbers {
    public static void main(String[] args) {
        int num1 = 20;
        int num2 = 30;
        int sum = num1 + num2;
        System.out.println("Sum: " + sum);
    }
}`,
        output: `Sum: 50`,
        description: `EXPLANATION: Add two numbers and display the result.\\n\\nLOGIC:\\n• int: Data type for whole numbers\\n• num1 = 20: First number\\n• num2 = 30: Second number\\n• sum = num1 + num2: Addition operation\\n• +: Addition operator\\n\\nHOW IT WORKS:\\n1. Declare variable num1 with value 20\\n2. Declare variable num2 with value 30\\n3. Create sum variable and add both\\n4. Print the result\\n\\nARITHMETIC OPERATORS:\\n• +: Addition\\n• -: Subtraction\\n• *: Multiplication\\n• /: Division\\n• %: Modulo (remainder)\\n\\nUSE CASE:\\nCalculations, arithmetic operations, mathematical computations`
    },

    // Java Program 3: Celsius to Fahrenheit
    java_prog3_celsius_to_fahrenheit: {
        id: 'java_prog3_celsius_to_fahrenheit',
        name: 'Celsius to Fahrenheit Conversion',
        language: 'Java',
        languageId: 'java',
        category: 'Temperature Conversion',
        code: `public class CelsiusToFahrenheit {
    public static void main(String[] args) {
        double celsius = 25;
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.println(celsius + "°C = " + fahrenheit + "°F");
    }
}`,
        output: `25.0°C = 77.0°F`,
        description: `EXPLANATION: Convert temperature from Celsius to Fahrenheit.\\n\\nLOGIC:\\n• Formula: F = (C × 9/5) + 32\\n• double: Data type for decimal numbers\\n• celsius = 25: Temperature in Celsius\\n• (celsius * 9 / 5) + 32: Conversion formula\\n\\nHOW IT WORKS:\\n1. Store temperature in Celsius (25)\\n2. Apply formula: (25 × 9/5) + 32\\n3. Step: 25 × 9 = 225\\n4. Step: 225 / 5 = 45\\n5. Step: 45 + 32 = 77\\n6. Print result: 77°F\\n\\nFORMULA:\\n°F = (°C × 9/5) + 32\\n\\nUSE CASE:\\nTemperature conversion, unit conversion, weather applications`
    },

    // Java Program 4: Fahrenheit to Celsius
    java_prog4_fahrenheit_to_celsius: {
        id: 'java_prog4_fahrenheit_to_celsius',
        name: 'Fahrenheit to Celsius Conversion',
        language: 'Java',
        languageId: 'java',
        category: 'Temperature Conversion',
        code: `public class FahrenheitToCelsius {
    public static void main(String[] args) {
        double fahrenheit = 77;
        double celsius = (fahrenheit - 32) * 5 / 9;
        System.out.println(fahrenheit + "°F = " + celsius + "°C");
    }
}`,
        output: `77.0°F = 25.0°C`,
        description: `EXPLANATION: Convert temperature from Fahrenheit to Celsius.\\n\\nLOGIC:\\n• Formula: C = (F - 32) × 5/9\\n• double: Data type for floating point numbers\\n• fahrenheit = 77: Temperature in Fahrenheit\\n• (fahrenheit - 32) * 5 / 9: Conversion formula\\n\\nHOW IT WORKS:\\n1. Store temperature in Fahrenheit (77)\\n2. Apply formula: (77 - 32) × 5/9\\n3. Step: 77 - 32 = 45\\n4. Step: 45 × 5 = 225\\n5. Step: 225 / 9 = 25\\n6. Print result: 25°C\\n\\nFORMULA:\\n°C = (°F - 32) × 5/9\\n\\nUSE CASE:\\nTemperature conversion, international measurements, climate data`
    },

    // Java Program 5: Rectangle Area and Perimeter
    java_prog5_rectangle: {
        id: 'java_prog5_rectangle',
        name: 'Rectangle Area and Perimeter',
        language: 'Java',
        languageId: 'java',
        category: 'Geometry',
        code: `public class Rectangle {
    public static void main(String[] args) {
        double length = 10;
        double width = 5;
        double area = length * width;
        double perimeter = 2 * (length + width);
        System.out.println("Area: " + area);
        System.out.println("Perimeter: " + perimeter);
    }
}`,
        output: `Area: 50.0\\nPerimeter: 30.0`,
        description: `EXPLANATION: Calculate area and perimeter of a rectangle.\\n\\nLOGIC:\\n• Area = length × width\\n• Perimeter = 2 × (length + width)\\n• length = 10, width = 5\\n\\nHOW IT WORKS:\\n1. Define length = 10\\n2. Define width = 5\\n3. Calculate Area: 10 × 5 = 50\\n4. Calculate Perimeter: 2 × (10 + 5) = 2 × 15 = 30\\n5. Print both results\\n\\nFORMULAS:\\n• Area = length × width\\n• Perimeter = 2 × (length + width)\\n\\nUSE CASE:\\nGeometry calculations, architectural measurements, land area`
    },

    // Java Program 6: Circle Area and Perimeter
    java_prog6_circle: {
        id: 'java_prog6_circle',
        name: 'Circle Area and Circumference',
        language: 'Java',
        languageId: 'java',
        category: 'Geometry',
        code: `public class Circle {
    public static void main(String[] args) {
        double radius = 7;
        double area = Math.PI * radius * radius;
        double circumference = 2 * Math.PI * radius;
        System.out.println("Area: " + area);
        System.out.println("Circumference: " + circumference);
    }
}`,
        output: `Area: 153.93804002589985\\nCircumference: 43.982297150257104`,
        description: `EXPLANATION: Calculate area and circumference of a circle.\\n\\nLOGIC:\\n• Area = π × r²\\n• Circumference = 2 × π × r\\n• Math.PI: Built-in constant for π (3.14159...)\\n• radius = 7\\n\\nHOW IT WORKS:\\n1. Define radius = 7\\n2. Calculate Area: π × 7 × 7 ≈ 153.94\\n3. Calculate Circumference: 2 × π × 7 ≈ 43.98\\n4. Print both values\\n\\nFORMULAS:\\n• Area = π × r²\\n• Circumference (Perimeter) = 2 × π × r\\n\\nKEY CONCEPTS:\\n• Math.PI: Java's pi constant\\n• r²: radius squared\\n\\nUSE CASE:\\nGeometric calculations, physics, engineering`
    },

    // Java Program 7: Check Odd or Even
    java_prog7_odd_even: {
        id: 'java_prog7_odd_even',
        name: 'Check Odd or Even',
        language: 'Java',
        languageId: 'java',
        category: 'Conditional Logic',
        code: `public class OddEven {
    public static void main(String[] args) {
        int number = 15;
        if (number % 2 == 0) {
            System.out.println(number + " is Even");
        } else {
            System.out.println(number + " is Odd");
        }
    }
}`,
        output: `15 is Odd`,
        description: `EXPLANATION: Check if a number is odd or even.\\n\\nLOGIC:\\n• % (modulo): Returns remainder of division\\n• number % 2 == 0: If remainder is 0, number is even\\n• If remainder is 1, number is odd\\n• if-else: Conditional statement\\n\\nHOW IT WORKS:\\n1. Declare number = 15\\n2. Check: 15 % 2\\n3. Result: 15 % 2 = 1 (remainder)\\n4. Since remainder is 1 (not 0), number is Odd\\n5. Print "15 is Odd"\\n\\nEXAMPLES:\\n• 4 % 2 = 0 ⟹ Even\\n• 7 % 2 = 1 ⟹ Odd\\n• 10 % 2 = 0 ⟹ Even\\n\\nUSE CASE:\\nNumber classification, data filtering, mathematical checks`
    },

    // Java Program 8: Check Positive or Negative
    java_prog8_positive_negative: {
        id: 'java_prog8_positive_negative',
        name: 'Check Positive or Negative',
        language: 'Java',
        languageId: 'java',
        category: 'Conditional Logic',
        code: `public class PositiveNegative {
    public static void main(String[] args) {
        int number = -10;
        if (number > 0) {
            System.out.println(number + " is Positive");
        } else if (number < 0) {
            System.out.println(number + " is Negative");
        } else {
            System.out.println(number + " is Zero");
        }
    }
}`,
        output: `-10 is Negative`,
        description: `EXPLANATION: Check if a number is positive, negative, or zero.\\n\\nLOGIC:\\n• if-else if-else: Multiple conditions\\n• number > 0: Check for positive\\n• number < 0: Check for negative\\n• else: Number is zero\\n\\nHOW IT WORKS:\\n1. Declare number = -10\\n2. Check first condition: -10 > 0? No\\n3. Check second condition: -10 < 0? Yes\\n4. Print "-10 is Negative"\\n\\nCONDITION FLOW:\\n• number > 0 ⟹ Positive\\n• number < 0 ⟹ Negative\\n• number == 0 ⟹ Zero\\n\\nUSE CASE:\\nInput validation, number categorization, decision making`
    },

    // Java Program 9: Maximum of Three Numbers
    java_prog9_max_three: {
        id: 'java_prog9_max_three',
        name: 'Maximum of Three Numbers',
        language: 'Java',
        languageId: 'java',
        category: 'Conditional Logic',
        code: `public class MaxThree {
    public static void main(String[] args) {
        int num1 = 15, num2 = 20, num3 = 10;
        int max = num1;
        if (num2 > max) max = num2;
        if (num3 > max) max = num3;
        System.out.println("Maximum: " + max);
    }
}`,
        output: `Maximum: 20`,
        description: `EXPLANATION: Find the maximum among three numbers.\\n\\nLOGIC:\\n• Assume first number is maximum\\n• Compare with second number\\n• Compare with third number\\n• Update maximum if larger value found\\n\\nHOW IT WORKS:\\n1. Initialize: num1=15, num2=20, num3=10\\n2. Set max = num1 (15)\\n3. Check: 20 > 15? Yes, so max = 20\\n4. Check: 10 > 20? No, max remains 20\\n5. Print 20 as maximum\\n\\nALTERNATIVE (Using Math.max):\\nint max = Math.max(num1, Math.max(num2, num3));\\n\\nUSE CASE:\\nFinding highest score, maximum temperature, best performance`
    },

    // Java Program 10: Swap Two Numbers
    java_prog10_swap: {
        id: 'java_prog10_swap',
        name: 'Swap Two Numbers',
        language: 'Java',
        languageId: 'java',
        category: 'Variables',
        code: `public class SwapNumbers {
    public static void main(String[] args) {
        int a = 5, b = 10;
        System.out.println("Before: a = " + a + ", b = " + b);
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After: a = " + a + ", b = " + b);
    }
}`,
        output: `Before: a = 5, b = 10\\nAfter: a = 10, b = 5`,
        description: `EXPLANATION: Swap values of two variables using a temporary variable.\\n\\nLOGIC:\\n• temp = a: Store first value in temporary variable\\n• a = b: Assign second value to first variable\\n• b = temp: Assign stored value to second variable\\n\\nHOW IT WORKS:\\n1. Initial: a = 5, b = 10\\n2. temp = 5 (stored a's value)\\n3. a = 10 (b's value assigned to a)\\n4. b = 5 (temp's value assigned to b)\\n5. Final: a = 10, b = 5\\n\\nSTEP-BY-STEP:\\nBefore swap: a=5, b=10, temp=?\\nAfter temp: a=5, b=10, temp=5\\nAfter a: a=10, b=10, temp=5\\nAfter b: a=10, b=5, temp=5\\n\\nUSE CASE:\\nData manipulation, sorting algorithms, value exchange`
    },

    // Java Program 11: Miles to Kilometers
    java_prog11_miles_to_km: {
        id: 'java_prog11_miles_to_km',
        name: 'Convert Miles to Kilometers',
        language: 'Java',
        languageId: 'java',
        category: 'Unit Conversion',
        code: `public class MilesToKilometers {
    public static void main(String[] args) {
        double miles = 5;
        double kilometers = miles * 1.60934;
        System.out.println(miles + " miles = " + kilometers + " km");
    }
}`,
        output: `5.0 miles = 8.0467 km`,
        description: `EXPLANATION: Convert distance from miles to kilometers.\\n\\nLOGIC:\\n• Conversion factor: 1 mile = 1.60934 km\\n• kilometers = miles × 1.60934\\n• miles = 5\\n\\nHOW IT WORKS:\\n1. Define miles = 5\\n2. Multiply by conversion factor: 5 × 1.60934\\n3. Result: 8.0467 km\\n4. Print the converted value\\n\\nCONVERSION FACTOR:\\n• 1 mile = 1.60934 kilometers\\n• 1 kilometer = 0.621371 miles\\n\\nFORMULA:\\nkilometers = miles × 1.60934\\n\\nUSE CASE:\\nDistance conversion, travel calculations, GPS applications`
    },

    // Java Program 12: Leap Year Check
    java_prog12_leap_year: {
        id: 'java_prog12_leap_year',
        name: 'Check Leap Year',
        language: 'Java',
        languageId: 'java',
        category: 'Date/Time Logic',
        code: `public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a Leap Year");
        } else {
            System.out.println(year + " is not a Leap Year");
        }
    }
}`,
        output: `2024 is a Leap Year`,
        description: `EXPLANATION: Check whether a given year is a leap year.\\n\\nLOGIC:\\n• Leap Year rules:\\n  - Divisible by 4 AND NOT divisible by 100: Leap\\n  - Divisible by 400: Leap\\n  - Otherwise: Not Leap\\n\\nHOW IT WORKS:\\n1. year = 2024\\n2. Check: 2024 % 4 = 0? Yes\\n3. Check: 2024 % 100 != 0? Yes (100 doesn't divide)\\n4. First condition is TRUE\\n5. Print "2024 is a Leap Year"\\n\\nLEAP YEAR RULES:\\n• If divisible by 400 ⟹ Leap Year\\n• Else if divisible by 100 ⟹ Not Leap\\n• Else if divisible by 4 ⟹ Leap Year\\n• Else ⟹ Not Leap\\n\\nEXAMPLES:\\n• 2020: Leap (divisible by 4)\\n• 1900: Not Leap (divisible by 100, not 400)\\n• 2000: Leap (divisible by 400)\\n\\nUSE CASE:\\nCalendar systems, date validation, scheduling`
    },

    // Java Program 13: Quadratic Equation Roots
    java_prog13_quadratic: {
        id: 'java_prog13_quadratic',
        name: 'Find Roots of Quadratic Equation',
        language: 'Java',
        languageId: 'java',
        category: 'Mathematics',
        code: `public class QuadraticEquation {
    public static void main(String[] args) {
        double a = 1, b = -5, c = 6;
        double discriminant = b * b - 4 * a * c;
        double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        System.out.println("Root 1: " + root1);
        System.out.println("Root 2: " + root2);
    }
}`,
        output: `Root 1: 3.0\\nRoot 2: 2.0`,
        description: `EXPLANATION: Find roots of a quadratic equation ax² + bx + c = 0.\\n\\nLOGIC:\\n• Formula: x = [-b ± √(b² - 4ac)] / 2a\\n• Discriminant = b² - 4ac\\n• Two roots: Root1 and Root2\\n• Math.sqrt(): Square root function\\n\\nHOW IT WORKS:\\n1. Coefficients: a=1, b=-5, c=6\\n2. Discriminant = (-5)² - 4(1)(6) = 25 - 24 = 1\\n3. Root1 = [5 + √1] / 2 = 6/2 = 3\\n4. Root2 = [5 - √1] / 2 = 4/2 = 2\\n5. Print both roots\\n\\nQUADRATIC FORMULA:\\nx = [-b ± √(b² - 4ac)] / 2a\\n\\nDISCRIMINANT:\\n• If > 0: Two distinct real roots\\n• If = 0: One real root\\n• If < 0: No real roots (complex)\\n\\nUSE CASE:\\nMathematical calculations, physics simulations, engineering`
    },

    // Java Program 14: Sum of Natural Numbers
    java_prog14_sum_natural: {
        id: 'java_prog14_sum_natural',
        name: 'Sum of Natural Numbers',
        language: 'Java',
        languageId: 'java',
        category: 'Loops',
        code: `public class SumNatural {
    public static void main(String[] args) {
        int n = 10;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Sum of first " + n + " natural numbers: " + sum);
    }
}`,
        output: `Sum of first 10 natural numbers: 55`,
        description: `EXPLANATION: Calculate sum of natural numbers from 1 to n.\\n\\nLOGIC:\\n• For loop: Iterate from 1 to n\\n• sum += i: Add each number to sum\\n• n = 10: Sum from 1 to 10\\n\\nHOW IT WORKS:\\n1. Initialize sum = 0, n = 10\\n2. Loop from i = 1 to i = 10\\n3. Each iteration: sum += i\\n   - i=1: sum = 0+1 = 1\\n   - i=2: sum = 1+2 = 3\\n   - i=3: sum = 3+3 = 6\\n   - ... continue\\n   - i=10: sum = 45+10 = 55\\n4. Print 55\\n\\nFORMULA:\\nSum = n(n+1)/2 = 10(11)/2 = 55\\n\\nALTERNATIVE:\\nsum = n * (n + 1) / 2;\\n\\nUSE CASE:\\nMathematical calculations, data aggregation, statistics`
    },

    // Java Program 15: Check Prime Number
    java_prog15_prime: {
        id: 'java_prog15_prime',
        name: 'Check Prime Number',
        language: 'Java',
        languageId: 'java',
        category: 'Number Theory',
        code: `public class PrimeNumber {
    public static void main(String[] args) {
        int number = 17;
        boolean isPrime = true;
        if (number <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        System.out.println(isPrime ? (number + " is Prime") : (number + " is Not Prime"));
    }
}`,
        output: `17 is Prime`,
        description: `EXPLANATION: Check if a number is prime or not.\\n\\nLOGIC:\\n• Prime: Only divisible by 1 and itself\\n• Check divisibility from 2 to n/2\\n• If any divisor found: Not prime\\n• isPrime flag: Track prime status\\n\\nHOW IT WORKS:\\n1. number = 17\\n2. Check if number <= 1: No\\n3. Loop from i = 2 to i = 8 (17/2)\\n4. Check: 17 % i == 0?\\n   - 17 % 2 = 1 (no)\\n   - 17 % 3 = 2 (no)\\n   - ... no divisors found\\n5. isPrime remains true\\n6. Print "17 is Prime"\\n\\nPRIME EXAMPLES:\\n• Prime: 2, 3, 5, 7, 11, 13, 17, 19, 23\\n• Not Prime: 4, 6, 8, 9, 10, 12, 14, 15\\n\\nOPTIMIZATION:\\n• Loop only up to √n instead of n/2\\n\\nUSE CASE:\\nNumber theory, cryptography, algorithm optimization`
    },

    // Java Program 16: Fibonacci Series
    java_prog16_fibonacci: {
        id: 'java_prog16_fibonacci',
        name: 'Fibonacci Series',
        language: 'Java',
        languageId: 'java',
        category: 'Sequences',
        code: `public class Fibonacci {
    public static void main(String[] args) {
        int n = 8;
        int first = 0, second = 1;
        System.out.println("First " + n + " Fibonacci numbers:");
        for (int i = 0; i < n; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }
    }
}`,
        output: `First 8 Fibonacci numbers:\\n0 1 1 2 3 5 8 13`,
        description: `EXPLANATION: Print Fibonacci series (each number is sum of previous two).\\n\\nLOGIC:\\n• Fibonacci: F(n) = F(n-1) + F(n-2)\\n• Start: first = 0, second = 1\\n• Generate n terms\\n\\nHOW IT WORKS:\\n1. Initialize: first = 0, second = 1, n = 8\\n2. Loop 8 times:\\n   - Print first (0)\\n   - next = 0 + 1 = 1\\n   - first = 1, second = 1\\n   - Print first (1)\\n   - next = 1 + 1 = 2\\n   - first = 1, second = 2\\n   - Continue...\\n3. Output: 0 1 1 2 3 5 8 13\\n\\nFIBONACCI SEQUENCE:\\n0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...\\n\\nUSE CASE:\\nAlgorithm analysis, nature patterns, dynamic programming`
    },

    // Java Program 17: Reverse a Number
    java_prog17_reverse_number: {
        id: 'java_prog17_reverse_number',
        name: 'Reverse a Number',
        language: 'Java',
        languageId: 'java',
        category: 'Number Manipulation',
        code: `public class ReverseNumber {
    public static void main(String[] args) {
        int number = 12345;
        int reversed = 0;
        while (number > 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }
        System.out.println("Reversed: " + reversed);
    }
}`,
        output: `Reversed: 54321`,
        description: `EXPLANATION: Reverse the digits of a number.\\n\\nLOGIC:\\n• Extract last digit using %10\\n• Build reversed number from digits\\n• Remove last digit using /10\\n\\nHOW IT WORKS:\\n1. number = 12345, reversed = 0\\n2. Iteration 1:\\n   - digit = 12345 % 10 = 5\\n   - reversed = 0 * 10 + 5 = 5\\n   - number = 12345 / 10 = 1234\\n3. Iteration 2:\\n   - digit = 1234 % 10 = 4\\n   - reversed = 5 * 10 + 4 = 54\\n   - number = 1234 / 10 = 123\\n4. Continue until number = 0\\n5. Final reversed = 54321\\n\\nUSE CASE:\\nPalindrome checking, number manipulation, data processing`
    },

    // Java Program 18: Count Digits in Number
    java_prog18_count_digits: {
        id: 'java_prog18_count_digits',
        name: 'Count Digits in Number',
        language: 'Java',
        languageId: 'java',
        category: 'Number Manipulation',
        code: `public class CountDigits {
    public static void main(String[] args) {
        int number = 98765;
        int count = 0;
        int temp = number;
        while (temp > 0) {
            count++;
            temp /= 10;
        }
        System.out.println("Number of digits in " + number + ": " + count);
    }
}`,
        output: `Number of digits in 98765: 5`,
        description: `EXPLANATION: Count the total number of digits in a number.\\n\\nLOGIC:\\n• Use while loop to remove digits one by one\\n• Divide by 10 to remove last digit\\n• Increment counter each iteration\\n\\nHOW IT WORKS:\\n1. number = 98765, count = 0, temp = 98765\\n2. Loop:iteration 1: count=1, temp=9876\\n   - Iteration 2: count=2, temp=987\\n   - Iteration 3: count=3, temp=98\\n   - Iteration 4: count=4, temp=9\\n   - Iteration 5: count=5, temp=0\\n3. Loop ends when temp = 0\\n4. Result: 5 digits\\n\\nALTERNATIVE:\\nint count = String.valueOf(number).length();\\n\\nUSE CASE:\\nNumber validation, digit analysis, data processing`
    },

    // Java Program 19: Sum of Digits
    java_prog19_sum_digits: {
        id: 'java_prog19_sum_digits',
        name: 'Sum of Digits',
        language: 'Java',
        languageId: 'java',
        category: 'Number Manipulation',
        code: `public class SumDigits {
    public static void main(String[] args) {
        int number = 1234;
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }
        System.out.println("Sum of digits: " + sum);
    }
}`,
        output: `Sum of digits: 10`,
        description: `EXPLANATION: Calculate sum of all digits in a number.\\n\\nLOGIC:\\n• Extract last digit using %10\\n• Add digit to sum\\n• Remove last digit using /10\\n\\nHOW IT WORKS:\\n1. number = 1234, sum = 0\\n2. Iteration 1:\\n   - digit = 1234 % 10 = 4\\n   - sum = 0 + 4 = 4\\n   - number = 1234 / 10 = 123\\n3. Iteration 2:\\n   - digit = 123 % 10 = 3\\n   - sum = 4 + 3 = 7\\n   - number = 123 / 10 = 12\\n4. Iteration 3:\\n   - digit = 12 % 10 = 2\\n   - sum = 7 + 2 = 9\\n   - number = 12 / 10 = 1\\n5. Iteration 4:\\n   - digit = 1 % 10 = 1\\n   - sum = 9 + 1 = 10\\n   - number = 1 / 10 = 0\\n6. Final sum = 10\\n\\n(1+2+3+4 = 10)\\n\\nUSE CASE:\\nNumber analysis, digit manipulation, mathematical operations`
    },

    // Java Program 20: Calculate Factorial
    java_prog20_factorial: {
        id: 'java_prog20_factorial',
        name: 'Calculate Factorial',
        language: 'Java',
        languageId: 'java',
        category: 'Loops & Math',
        code: `public class Factorial {
    public static void main(String[] args) {
        int n = 5;
        long factorial = 1;
        for (int i = 2; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + " is: " + factorial);
    }
}`,
        output: `Factorial of 5 is: 120`,
        description: `EXPLANATION: Calculate factorial of a number (n! = n × (n-1) × ... × 1).\\n\\nLOGIC:\\n• Factorial: Product of all numbers from 1 to n\\n• 5! = 5 × 4 × 3 × 2 × 1 = 120\\n• Loop from 2 to n\\n• Multiply each number\\n\\nHOW IT WORKS:\\n1. n = 5, factorial = 1\\n2. Loop from i = 2 to i = 5:\\n   - i=2: factorial = 1 × 2 = 2\\n   - i=3: factorial = 2 × 3 = 6\\n   - i=4: factorial = 6 × 4 = 24\\n   - i=5: factorial = 24 × 5 = 120\\n3. Print 120\\n\\nFACTORIAL VALUES:\\n• 0! = 1\\n• 1! = 1\\n• 2! = 2\\n• 3! = 6\\n• 4! = 24\\n• 5! = 120\\n• 6! = 720\\n\\nNOTE:\\n• Use long for larger factorials\\n• 21! causes integer overflow\\n\\nUSE CASE:\\nCombinatorics, permutations, probability calculations`
    },

    // ====================================

    // C CODES
    // TODO: Add more C codes here by following the same pattern below
    c_hello: {
        id: 'c_hello',
        name: 'Hello World',
        language: 'C',
        languageId: 'c',
        category: 'Basic',
        code: `#include <stdio.h>
int main() {
    printf("Hello World\\n");
    return 0;
}`,
        output: `Hello World`,
        description: 'C Hello World program'
    },
    c_pointer: {
        id: 'c_pointer',
        name: 'Pointer Example',
        language: 'C',
        languageId: 'c',
        category: 'Pointers',
        code: `#include <stdio.h>
int main() {
    int x = 10;
    int* ptr = &x;
    printf("Value: %d\\n", *ptr);
    printf("Address: %p\\n", ptr);
    return 0;
}`,
        output: `Value: 10
Address: 0x...`,
        description: 'Demonstrate pointer basics in C'
    },
    // ====================================

    // C++ CODES
    // TODO: Add more C++ codes here by following the same pattern below
    cpp_hello: {
        id: 'cpp_hello',
        name: 'Hello World',
        language: 'C++',
        languageId: 'cpp',
        category: 'Basic',
        code: `#include <iostream>
using namespace std;
int main() {
    cout << "Hello World" << endl;
    return 0;
}`,
        output: `Hello World`,
        description: 'C++ Hello World program'
    },
    cpp_class: {
        id: 'cpp_class',
        name: 'Simple Class',
        language: 'C++',
        languageId: 'cpp',
        category: 'OOP',
        code: `#include <iostream>
using namespace std;
class Car {
public:
    string name;
    void display() {
        cout << "Car: " << name << endl;
    }
};
int main() {
    Car myCar;
    myCar.name = "BMW";
    myCar.display();
    return 0;
}`,
        output: `Car: BMW`,
        description: 'Basic class example in C++'
    },
    // ====================================

    // HTML CODES
    // TODO: Add more HTML codes here by following the same pattern below
    html_basic: {
        id: 'html_basic',
        name: 'Basic Structure',
        language: 'HTML',
        languageId: 'html',
        category: 'Basics',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Hello World</p>
</body>
</html>`,
        output: `Renders an HTML page with heading and paragraph`,
        description: 'Basic HTML document structure'
    },
    html_form: {
        id: 'html_form',
        name: 'Form Example',
        language: 'HTML',
        languageId: 'html',
        category: 'Forms',
        code: `<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <button type="submit">Submit</button>
</form>`,
        output: `Displays a simple form with name and email fields`,
        description: 'Basic HTML form with input fields'
    },
    // ====================================

    // CSS CODES
    // TODO: Add more CSS codes here by following the same pattern below
    css_flexbox: {
        id: 'css_flexbox',
        name: 'Flexbox Layout',
        language: 'CSS',
        languageId: 'css',
        category: 'Layouts',
        code: `.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
}
.item {
    background: #3498db;
    padding: 20px;
    border-radius: 5px;
}`,
        output: `Creates a flexbox container with centered items`,
        description: 'Flexbox layout example for responsive design'
    },
    css_grid: {
        id: 'css_grid',
        name: 'Grid Layout',
        language: 'CSS',
        languageId: 'css',
        category: 'Layouts',
        code: `.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
}
.grid-item {
    background: #e74c3c;
    padding: 20px;
    text-align: center;
}`,
        output: `Creates a 3-column responsive grid layout`,
        description: 'CSS Grid layout example'
    },
    // ====================================

    // PHP CODES
    // TODO: Add more PHP codes here by following the same pattern below
    php_hello: {
        id: 'php_hello',
        name: 'Hello World',
        language: 'PHP',
        languageId: 'php',
        category: 'Basic',
        code: `<?php
echo "Hello World";
?>`,
        output: `Hello World`,
        description: 'PHP Hello World program'
    },
    php_array: {
        id: 'php_array',
        name: 'Array Operations',
        language: 'PHP',
        languageId: 'php',
        category: 'Arrays',
        code: `<?php
$fruits = array("Apple", "Banana", "Orange");
foreach($fruits as $fruit) {
    echo $fruit . " ";
}
?>`,
        output: `Apple Banana Orange`,
        description: 'Iterate through PHP array'
    },
    // ====================================

    // SQL CODES
    // TODO: Add more SQL codes here by following the same pattern below
    sql_select: {
        id: 'sql_select',
        name: 'Select Query',
        language: 'SQL',
        languageId: 'sql',
        category: 'Basics',
        code: `SELECT * FROM users 
WHERE age > 18 
ORDER BY name ASC;`,
        output: `Returns all users older than 18 sorted by name`,
        description: 'Basic SQL SELECT query'
    },
    sql_join: {
        id: 'sql_join',
        name: 'JOIN Query',
        language: 'SQL',
        languageId: 'sql',
        category: 'Advanced',
        code: `SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;`,
        output: `Returns users and their orders over $100`,
        description: 'SQL INNER JOIN example'
    },
    // ====================================

    // GO CODES
    // TODO: Add more Go codes here by following the same pattern below
    go_hello: {
        id: 'go_hello',
        name: 'Hello World',
        language: 'Go',
        languageId: 'go',
        category: 'Basic',
        code: `package main
import "fmt"
func main() {
    fmt.Println("Hello World")
}`,
        output: `Hello World`,
        description: 'Go Hello World program'
    },
    go_goroutine: {
        id: 'go_goroutine',
        name: 'Goroutine Example',
        language: 'Go',
        languageId: 'go',
        category: 'Concurrency',
        code: `package main
import (
    "fmt"
    "time"
)
func main() {
    go func() {
        fmt.Println("Hello from goroutine")
    }()
    time.Sleep(100 * time.Millisecond)
}`,
        output: `Hello from goroutine`,
        description: 'Demonstrate goroutine concurrency'
    },
    // ====================================

    // RUST CODES
    // TODO: Add more Rust codes here by following the same pattern below
    rust_hello: {
        id: 'rust_hello',
        name: 'Hello World',
        language: 'Rust',
        languageId: 'rust',
        category: 'Basic',
        code: `fn main() {
    println!("Hello World");
}`,
        output: `Hello World`,
        description: 'Rust Hello World program'
    },
    rust_ownership: {
        id: 'rust_ownership',
        name: 'Ownership Example',
        language: 'Rust',
        languageId: 'rust',
        category: 'Memory',
        code: `fn main() {
    let mut vec = vec![1, 2, 3];
    vec.push(4);
    println!("{:?}", vec);
}`,
        output: `[1, 2, 3, 4]`,
        description: 'Demonstrate Rust ownership and vectors'
    }
    // ====================================
    // REPEAT THE PATTERN ABOVE FOR YOUR NEW CODES
    // Each code needs: id, name, language, languageId, category, code, output, description
};

// ===== SUPPORTING DATA =====
// List all available programming languages
const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'fab fa-js' },
    { id: 'python', name: 'Python', icon: 'fab fa-python' },
    { id: 'java', name: 'Java', icon: 'fab fa-java' },
    { id: 'c', name: 'C', icon: 'fas fa-copyright' },
    { id: 'cpp', name: 'C++', icon: 'fas fa-code' },
    { id: 'html', name: 'HTML', icon: 'fab fa-html5' },
    { id: 'css', name: 'CSS', icon: 'fab fa-css3-alt' },
    { id: 'php', name: 'PHP', icon: 'fab fa-php' },
    { id: 'sql', name: 'SQL', icon: 'fas fa-database' },
    { id: 'go', name: 'Go', icon: 'fas fa-rocket' },
    { id: 'rust', name: 'Rust', icon: 'fas fa-cog' }
];

// Global state for code library
let currentLanguageFilter = 'all';
let currentSearchQuery = '';
let currentOpenedCodeId = null; // Store the currently opened code ID for Try It Yourself

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeCodeLibrary();
    loadUserSettings();
    checkLoginStatus();
});

function initializeCodeLibrary() {
    renderLanguageTabs();
    renderCodeGrid(Object.values(codeLibrary));
}

// ===== RENDER FUNCTIONS =====

// Render language tabs
function renderLanguageTabs() {
    const container = document.getElementById('languageTabsContainer');
    if (!container) return;

    let html = '';
    languages.forEach(lang => {
        const codeCount = Object.values(codeLibrary).filter(c => c.languageId === lang.id).length;
        html += `
            <button class="language-tab" onclick="filterByLanguage('${lang.id}')" data-language="${lang.id}">
                <i class="${lang.icon}"></i> ${lang.name} (${codeCount})
            </button>
        `;
    });

    container.innerHTML = html;
}

// Render code grid
function renderCodeGrid(codes) {
    const grid = document.getElementById('codeExamplesGrid');
    const noResults = document.getElementById('noResults');

    if (!grid) return;

    if (codes.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'flex';
        return;
    }

    noResults.style.display = 'none';

    let html = '';
    codes.forEach(code => {
        html += `
            <div class="code-card" data-code-id="${code.id}">
                <div class="card-header">
                    <span class="language-badge">${code.language}</span>
                    <span class="category-badge">${code.category}</span>
                </div>
                <h3>${code.name}</h3>
                <p class="code-preview">${escapeHtml(code.code.substring(0, 60))}...</p>
                <div class="card-footer">
                    <span class="view-btn"><i class="fas fa-eye"></i> View Code</span>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;

    // Add click event listeners to all code cards using event delegation
    attachCodeCardClickHandlers();
}

// Attach click handlers to code cards
function attachCodeCardClickHandlers() {
    const grid = document.getElementById('codeExamplesGrid');
    if (!grid) return;

    const cards = grid.querySelectorAll('.code-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const codeId = this.getAttribute('data-code-id');
            if (codeId) {
                openCodeModal(codeId);
            }
        });
    });
}

// ===== FILTER & SEARCH FUNCTIONS =====

// Filter by language
function filterByLanguage(languageId) {
    currentLanguageFilter = languageId;
    currentSearchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    // Update active tab
    document.querySelectorAll('.language-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.language === languageId) {
            tab.classList.add('active');
        }
    });

    // Filter and display codes
    let filtered = Object.values(codeLibrary);
    if (languageId !== 'all') {
        filtered = filtered.filter(code => code.languageId === languageId);
    }

    renderCodeGrid(filtered);
}

// Search code library
function searchCodeLibrary(e) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    currentSearchQuery = searchInput.value.toLowerCase();

    let filtered = Object.values(codeLibrary);

    // Apply language filter
    if (currentLanguageFilter !== 'all') {
        filtered = filtered.filter(code => code.languageId === currentLanguageFilter);
    }

    // Apply search filter
    if (currentSearchQuery) {
        filtered = filtered.filter(code => 
            code.name.toLowerCase().includes(currentSearchQuery) ||
            code.language.toLowerCase().includes(currentSearchQuery) ||
            code.category.toLowerCase().includes(currentSearchQuery) ||
            code.code.toLowerCase().includes(currentSearchQuery)
        );
    }

    renderCodeGrid(filtered);
}

// ===== MODAL FUNCTIONS =====

// Open code modal
function openCodeModal(codeId) {
    const code = codeLibrary[codeId];
    if (!code) return;

    const modal = document.getElementById('codeModal');
    if (!modal) return;

    // Store the current code ID for Try It Yourself button
    currentOpenedCodeId = codeId;

    // Set modal content
    document.getElementById('modalCodeTitle').textContent = code.name;
    const modalCode = document.getElementById('modalCode');
    modalCode.textContent = code.code;

    // Update language label
    const languageLabel = document.getElementById('codeLanguageLabel');
    if (languageLabel) {
        languageLabel.textContent = `Language: ${code.language}`;
    }

    // Determine language class for syntax highlighting
    let languageClass = 'language-javascript'; // default
    if (code.languageId === 'python') languageClass = 'language-python';
    else if (code.languageId === 'java') languageClass = 'language-java';
    else if (code.languageId === 'c') languageClass = 'language-c';
    else if (code.languageId === 'cpp') languageClass = 'language-cpp';
    else if (code.languageId === 'html') languageClass = 'language-html';
    else if (code.languageId === 'css') languageClass = 'language-css';
    else if (code.languageId === 'php') languageClass = 'language-php';
    else if (code.languageId === 'sql') languageClass = 'language-sql';
    else if (code.languageId === 'go') languageClass = 'language-go';
    else if (code.languageId === 'rust') languageClass = 'language-rust';
    else if (code.languageId === 'csharp') languageClass = 'language-csharp';
    else if (code.languageId === 'kotlin') languageClass = 'language-kotlin';
    else if (code.languageId === 'swift') languageClass = 'language-swift';
    else if (code.languageId === 'r') languageClass = 'language-r';

    modalCode.className = languageClass;
    document.getElementById('modalOutput').innerHTML = `<p>${escapeHtml(code.output)}</p><p style="margin-top: 10px; color: var(--text-secondary); font-size: 12px;"><i class="fas fa-info-circle"></i> ${code.description}</p>`;

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Re-highlight code - REMOVED to display plain code without colored syntax
    // if (window.Prism) {
    //     Prism.highlightElement(modalCode);
    // }
}

// Close code modal
function closeCodeModal() {
    const modal = document.getElementById('codeModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Copy modal code
function copyModalCode() {
    const modalCode = document.getElementById('modalCode');
    const code = modalCode.textContent;

    navigator.clipboard.writeText(code).then(() => {
        // Show copy confirmation
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

// Try Code in Editor - Opens the code editor with pre-filled code
function tryCodeInEditor() {
    if (!currentOpenedCodeId) {
        console.error('No code ID found');
        return;
    }

    const code = codeLibrary[currentOpenedCodeId];
    if (!code) {
        console.error('Code not found for ID:', currentOpenedCodeId);
        return;
    }

    try {
        // Close the code modal first
        closeCodeModal();

        // Small delay to ensure modal closes
        setTimeout(() => {
            // Open online compiler based on language
            const languageId = code.languageId;
            const codeText = code.code;
            
            // Online compiler links based on language
            const compilerLinks = {
                'python': 'https://www.programiz.com/python-programming/online-compiler/',
                'java': 'https://www.programiz.com/java-programming/online-compiler/',
                'c': 'https://www.programiz.com/c-programming/online-compiler/',
                'cpp': 'https://www.programiz.com/cpp-programming/online-compiler/',
                'csharp': 'https://www.geeksforgeeks.org/csharp-programming-language/',
                'php': 'https://www.geeksforgeeks.org/php-programming-language/',
                'go': 'https://www.geeksforgeeks.org/golang/',
                'rust': 'https://www.geeksforgeeks.org/rust-programming-language/',
                'kotlin': 'https://www.geeksforgeeks.org/kotlin-programming-language/',
                'swift': 'https://www.geeksforgeeks.org/swift-programming-language/',
                'r': 'https://www.geeksforgeeks.org/r-programming-language/',
                'sql': 'https://www.geeksforgeeks.org/sql/',
                'html': 'https://codepen.io/pen/',
                'css': 'https://codepen.io/pen/',
                'javascript': 'https://codepen.io/pen/'
            };
            
            // Get the appropriate compiler link
            const compilerUrl = compilerLinks[languageId] || 'https://www.replit.com';
            
            // Store code in sessionStorage for retrieval in new window
            const codeData = {
                language: languageId,
                code: codeText,
                name: code.name
            };
            sessionStorage.setItem('openedCode', JSON.stringify(codeData));
            
            // Open the online compiler in a new tab
            window.open(compilerUrl, '_blank');
            return;
        }, 300);
    } catch (e) {
        console.error('Error in tryCodeInEditor:', e);
    }
}

// ===== UTILITY FUNCTIONS =====

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Go back home
function goBackHome() {
    window.location.href = 'index.html';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCodeModal();
    }
});

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('codeModal');
    if (!modal) return;

    if (modal.classList.contains('active')) {
        const modalContent = modal.querySelector('.code-modal-content');
        if (modalContent && !modalContent.contains(e.target)) {
            closeCodeModal();
        }
    }
});
