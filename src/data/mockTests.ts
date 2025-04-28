
import { MockTest, Question } from "@/types";

export const QUESTION_BANK: Record<string, Question[]> = {
  "quantitative": [
    {
      id: 1,
      question: "If a train travels 300 km in 5 hours, what is its speed?",
      options: [
        "50 km/h",
        "60 km/h",
        "70 km/h",
        "80 km/h"
      ],
      correctAnswer: 1,
      explanation: "Speed = Distance/Time = 300 km / 5 hours = 60 km/h"
    },
    {
      id: 2,
      question: "What is 25% of 200?",
      options: [
        "25",
        "50",
        "75",
        "100"
      ],
      correctAnswer: 1,
      explanation: "25% of 200 = 0.25 × 200 = 50"
    },
    {
      id: 3,
      question: "If x + 5 = 10, what is the value of x?",
      options: [
        "2",
        "5",
        "10",
        "15"
      ],
      correctAnswer: 1,
      explanation: "x + 5 = 10 → x = 10 - 5 = 5"
    },
    {
      id: 4,
      question: "The ratio of boys to girls in a class is 3:2. If there are 15 boys, how many girls are there?",
      options: [
        "5",
        "10",
        "15",
        "20"
      ],
      correctAnswer: 1,
      explanation: "3:2 ratio with 15 boys → 3 parts = 15 → 1 part = 5 → 2 parts = 10 girls"
    },
    {
      id: 5,
      question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
      options: [
        "13 cm²",
        "26 cm²",
        "40 cm²",
        "80 cm²"
      ],
      correctAnswer: 2,
      explanation: "Area = length × width = 8 cm × 5 cm = 40 cm²"
    }
  ],
  "verbal": [
    {
      id: 1,
      question: "Choose the correct synonym for 'Benevolent':",
      options: [
        "Cruel",
        "Kind",
        "Selfish",
        "Greedy"
      ],
      correctAnswer: 1,
      explanation: "Benevolent means well-meaning and kindly, so the correct synonym is 'Kind'."
    },
    {
      id: 2,
      question: "Identify the grammatically correct sentence:",
      options: [
        "She don't like apples.",
        "She doesn't likes apples.",
        "She doesn't like apples.",
        "She not like apples."
      ],
      correctAnswer: 2,
      explanation: "The correct sentence is 'She doesn't like apples.' which uses proper subject-verb agreement."
    },
    {
      id: 3,
      question: "What is the antonym of 'Ephemeral'?",
      options: [
        "Temporary",
        "Brief",
        "Permanent",
        "Fleeting"
      ],
      correctAnswer: 2,
      explanation: "Ephemeral means lasting for a very short time, so its antonym is 'Permanent'."
    },
    {
      id: 4,
      question: "Choose the correctly spelled word:",
      options: [
        "Accomodate",
        "Acommodate",
        "Accommodate",
        "Acomodate"
      ],
      correctAnswer: 2,
      explanation: "The correct spelling is 'Accommodate' with two 'm's and two 'd's."
    },
    {
      id: 5,
      question: "What does the idiom 'Bite the bullet' mean?",
      options: [
        "To eat something hard",
        "To endure a painful experience",
        "To argue with someone",
        "To make a difficult decision"
      ],
      correctAnswer: 1,
      explanation: "'Bite the bullet' means to endure a painful or otherwise unpleasant situation."
    }
  ],
  "basic-coding": [
    {
      id: 1,
      question: "What is the output of: print(5 + 3 * 2) in Python?",
      options: [
        "16",
        "11",
        "13",
        "10"
      ],
      correctAnswer: 1,
      explanation: "Multiplication has higher precedence than addition, so 3*2=6, then 5+6=11."
    },
    {
      id: 2,
      question: "Which loop is guaranteed to execute at least once?",
      options: [
        "for loop",
        "while loop",
        "do-while loop",
        "if-else statement"
      ],
      correctAnswer: 2,
      explanation: "A do-while loop checks the condition after executing the loop body, so it always runs at least once."
    },
    {
      id: 3,
      question: "What does the '++' operator do in JavaScript?",
      options: [
        "Adds 2 to a number",
        "Concatenates strings",
        "Increments a number by 1",
        "Creates a new array"
      ],
      correctAnswer: 2,
      explanation: "The '++' operator increments a number by 1 (e.g., x++ increases x by 1)."
    },
    {
      id: 4,
      question: "Which data structure follows FIFO (First In First Out) principle?",
      options: [
        "Stack",
        "Queue",
        "Array",
        "Tree"
      ],
      correctAnswer: 1,
      explanation: "Queue follows FIFO where the first element added is the first one to be removed."
    },
    {
      id: 5,
      question: "What is the time complexity of linear search in an array of size n?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      correctAnswer: 2,
      explanation: "Linear search checks each element one by one, so in the worst case it takes O(n) time."
    }
  ],
  "advanced-dsa": [
    {
      id: 1,
      question: "Which sorting algorithm has the best worst-case time complexity?",
      options: [
        "Bubble Sort",
        "Quick Sort",
        "Merge Sort",
        "Insertion Sort"
      ],
      correctAnswer: 2,
      explanation: "Merge Sort has O(n log n) time complexity in all cases (worst, average, best)."
    },
    {
      id: 2,
      question: "What is the space complexity of Dijkstra's algorithm with a Fibonacci heap?",
      options: [
        "O(1)",
        "O(V)",
        "O(V + E)",
        "O(V²)"
      ],
      correctAnswer: 2,
      explanation: "Dijkstra's algorithm with Fibonacci heap has O(V) space complexity for storing distances."
    },
    {
      id: 3,
      question: "Which data structure is typically used to implement a priority queue?",
      options: [
        "Array",
        "Linked List",
        "Heap",
        "Hash Table"
      ],
      correctAnswer: 2,
      explanation: "Heaps (especially binary heaps) are commonly used to implement priority queues efficiently."
    },
    {
      id: 4,
      question: "What is the time complexity of finding the shortest path in an unweighted graph using BFS?",
      options: [
        "O(V)",
        "O(V + E)",
        "O(E log V)",
        "O(V²)"
      ],
      correctAnswer: 1,
      explanation: "BFS explores each vertex and edge once, so its time complexity is O(V + E)."
    },
    {
      id: 5,
      question: "Which algorithm is used to find strongly connected components in a graph?",
      options: [
        "Kruskal's algorithm",
        "Dijkstra's algorithm",
        "Kosaraju's algorithm",
        "Prim's algorithm"
      ],
      correctAnswer: 2,
      explanation: "Kosaraju's algorithm is used to find strongly connected components in a directed graph."
    }
  ],
  "placement-aptitude": [
    {
      id: 1,
      question: "If 5 workers can complete a task in 12 days, how many days will 6 workers take to complete the same task?",
      options: [
        "10 days",
        "12 days",
        "14.4 days",
        "15 days"
      ],
      correctAnswer: 0,
      explanation: "More workers means less time. 5 workers × 12 days = 60 worker-days. 60 worker-days / 6 workers = 10 days."
    },
    {
      id: 2,
      question: "Find the next number in the series: 2, 6, 12, 20, 30, ...",
      options: [
        "40",
        "42",
        "44",
        "48"
      ],
      correctAnswer: 1,
      explanation: "The pattern is adding consecutive even numbers: +4, +6, +8, +10, so next is +12 → 30 + 12 = 42."
    },
    {
      id: 3,
      question: "If A is taller than B, and B is taller than C, who is the shortest?",
      options: [
        "A",
        "B",
        "C",
        "Cannot determine"
      ],
      correctAnswer: 2,
      explanation: "A > B > C, so C is the shortest."
    },
    {
      id: 4,
      question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      options: [
        "0°",
        "7.5°",
        "15°",
        "30°"
      ],
      correctAnswer: 1,
      explanation: "At 3:15, minute hand is at 90°. Hour hand is at 90° + (0.5° × 15) = 97.5°. Difference is 7.5°."
    },
    {
      id: 5,
      question: "If 'PENCIL' is coded as 'RGPENK', how is 'PAPER' coded in the same code?",
      options: [
        "RCRGT",
        "RCPGT",
        "RCRTG",
        "RCRHT"
      ],
      correctAnswer: 0,
      explanation: "Each letter moves +2 in the alphabet: P→R, A→C, P→R, E→G, R→T → RCRGT."
    }
  ],
  "logical-reasoning": [
    {
      id: 1,
      question: "All roses are flowers. Some flowers fade quickly. Therefore:",
      options: [
        "All roses fade quickly",
        "Some roses fade quickly",
        "No roses fade quickly",
        "Some roses may fade quickly"
      ],
      correctAnswer: 3,
      explanation: "Since some flowers fade quickly and all roses are flowers, it's possible some roses fade quickly."
    },
    {
      id: 2,
      question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
      options: [
        "True",
        "False",
        "Uncertain",
        "None of the above"
      ],
      correctAnswer: 0,
      explanation: "This is a classic syllogism where if A ⊆ B and B ⊆ C, then A ⊆ C."
    },
    {
      id: 3,
      question: "Find the odd one out: Square, Circle, Triangle, Cube",
      options: [
        "Square",
        "Circle",
        "Triangle",
        "Cube"
      ],
      correctAnswer: 3,
      explanation: "Cube is a 3D shape while the others are 2D shapes."
    },
    {
      id: 4,
      question: "Complete the series: Z, X, V, T, R, ...",
      options: [
        "Q",
        "P",
        "O",
        "N"
      ],
      correctAnswer: 1,
      explanation: "The series goes backward in the alphabet skipping one letter each time: Z, X (skip Y), V (skip W), etc. Next is P."
    },
    {
      id: 5,
      question: "If RED is coded as 1854, how is GREEN coded?",
      options: [
        "718554",
        "7185514",
        "718555",
        "718559"
      ],
      correctAnswer: 0,
      explanation: "R=18, E=5, D=4 → 1854. G=7, R=18, E=5, E=5, N=14 → 7185514."
    }
  ]
};

export const mockTestsData: MockTest[] = [
  {
    id: "quantitative",
    title: "Quantitative Aptitude",
    category: "Aptitude",
    description: "Test your mathematical and analytical skills with questions on arithmetic, algebra, and data interpretation.",
    timeInMinutes: 15,
    questionCount: 5,
    pointsReward: 50,
    difficulty: "Medium"
  },
  {
    id: "verbal",
    title: "Verbal Ability",
    category: "Aptitude",
    description: "Assess your English language proficiency, vocabulary, and grammar knowledge.",
    timeInMinutes: 15,
    questionCount: 5,
    pointsReward: 50,
    difficulty: "Medium"
  },
  {
    id: "basic-coding",
    title: "Basic Coding Test",
    category: "Programming",
    description: "Test your understanding of programming fundamentals, syntax, and basic concepts.",
    timeInMinutes: 15,
    questionCount: 5,
    pointsReward: 60,
    difficulty: "Easy"
  },
  {
    id: "advanced-dsa",
    title: "Advanced DSA Test",
    category: "Programming",
    description: "Challenge your knowledge of advanced data structures and algorithms with complex problem-solving scenarios.",
    timeInMinutes: 20,
    questionCount: 5,
    pointsReward: 100,
    difficulty: "Hard"
  },
  {
    id: "placement-aptitude",
    title: "Placement Aptitude Test",
    category: "Aptitude",
    description: "Comprehensive test covering both quantitative and logical reasoning questions commonly asked in placement exams.",
    timeInMinutes: 20,
    questionCount: 5,
    pointsReward: 80,
    difficulty: "Medium"
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning Test",
    category: "Aptitude",
    description: "Enhance critical thinking with questions on patterns, sequences, and logical deductions.",
    timeInMinutes: 15,
    questionCount: 5,
    pointsReward: 70,
    difficulty: "Medium"
  }
];

export const getMockTestById = (id: string): MockTest | undefined => {
  return mockTestsData.find(test => test.id === id);
};

export const getMockTestsByCategory = (category: string): MockTest[] => {
  return category === 'all' 
    ? mockTestsData 
    : mockTestsData.filter(test => test.category.toLowerCase() === category.toLowerCase());
};

export const getQuestionsByTestId = (testId: string): Question[] => {
  return QUESTION_BANK[testId] || [];
};
