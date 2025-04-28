
import { Course } from "@/types";

export const coursesData: Course[] = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    category: "Computer Science",
    description: "Master the fundamental data structures and algorithms essential for technical interviews and efficient programming. This comprehensive course covers arrays, linked lists, trees, graphs, sorting, searching, dynamic programming, and more.",
    thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Intermediate",
    duration: "40+ hours",
    pointsReward: 100,
    videos: [
      {
        id: "dsa-1",
        title: "Introduction to Data Structures",
        description: "Learn about the basic concepts and importance of data structures in computer science.",
        youtubeId: "bum_19loj9A",
        duration: "12:45"
      },
      {
        id: "dsa-2",
        title: "Arrays and Array Operations",
        description: "Understand arrays, their properties, and common operations performed on them.",
        youtubeId: "n60Dn0UsbEk",
        duration: "15:20"
      },
      {
        id: "dsa-3",
        title: "Linked Lists Implementation",
        description: "Learn how to implement singly and doubly linked lists and their operations.",
        youtubeId: "R9PTBwOzceo",
        duration: "18:30"
      },
      {
        id: "dsa-4",
        title: "Stack Data Structure",
        description: "Understand stack operations, implementations, and applications.",
        youtubeId: "FNZ5o9S9prU",
        duration: "14:10"
      },
      {
        id: "dsa-5",
        title: "Queue Data Structure",
        description: "Learn about queue operations, implementations, and applications.",
        youtubeId: "XuCbpw6Bj1U",
        duration: "16:05"
      }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript Mastery",
    category: "Web Development",
    description: "Become proficient in JavaScript with this comprehensive course. Learn everything from basic syntax to advanced concepts like asynchronous programming, closures, prototypes, and modern ES6+ features.",
    thumbnailUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Beginner",
    duration: "30+ hours",
    pointsReward: 80,
    videos: [
      {
        id: "js-1",
        title: "JavaScript Fundamentals",
        description: "Learn the basics of JavaScript including variables, data types, and operators.",
        youtubeId: "W6NZfCO5SIk",
        duration: "14:30"
      },
      {
        id: "js-2",
        title: "Functions and Scope",
        description: "Understand function declarations, expressions, and variable scoping in JavaScript.",
        youtubeId: "iLWTnMzWtj4",
        duration: "16:15"
      },
      {
        id: "js-3",
        title: "Arrays and Objects",
        description: "Learn about JavaScript arrays, objects, and their methods.",
        youtubeId: "HgJEoVzJIZU",
        duration: "19:40"
      },
      {
        id: "js-4",
        title: "Asynchronous JavaScript",
        description: "Understand callbacks, promises, and async/await patterns.",
        youtubeId: "PoRJizFvM7s",
        duration: "21:30"
      },
      {
        id: "js-5",
        title: "ES6+ Features",
        description: "Learn modern JavaScript features like arrow functions, destructuring, and modules.",
        youtubeId: "NCwa_xi0Uuc",
        duration: "17:20"
      }
    ]
  },
  {
    id: "cpp",
    title: "C++ Programming",
    category: "Programming Languages",
    description: "Learn C++ from basics to advanced concepts for high-performance applications. This course covers C++ syntax, memory management, STL, object-oriented programming, and system-level programming.",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Intermediate",
    duration: "25+ hours",
    pointsReward: 90,
    videos: [
      {
        id: "cpp-1",
        title: "Introduction to C++",
        description: "Learn the basics of C++ programming and its key features.",
        youtubeId: "vLnPwxZdW4Y",
        duration: "13:45"
      },
      {
        id: "cpp-2",
        title: "Variables and Data Types",
        description: "Understand various data types and variables in C++.",
        youtubeId: "zuegQmMdy8M",
        duration: "18:10"
      },
      {
        id: "cpp-3",
        title: "Functions and OOP",
        description: "Learn about functions and object-oriented programming concepts in C++.",
        youtubeId: "wN0x9eZLix4",
        duration: "20:30"
      },
      {
        id: "cpp-4",
        title: "Memory Management",
        description: "Understand pointers and memory management in C++.",
        youtubeId: "zuegQmMdy8M",
        duration: "16:45"
      },
      {
        id: "cpp-5",
        title: "STL in C++",
        description: "Learn about the Standard Template Library and its components.",
        youtubeId: "iWKi3vTVQtI",
        duration: "19:25"
      }
    ]
  },
  {
    id: "communication",
    title: "Communication Skills",
    category: "Soft Skills",
    description: "Enhance your professional communication for tech interviews and workplace success. This course covers effective verbal and written communication, presentation skills, active listening, and handling difficult conversations.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    level: "Beginner",
    duration: "15+ hours",
    pointsReward: 70,
    videos: [
      {
        id: "comm-1",
        title: "Effective Communication Basics",
        description: "Learn the fundamentals of effective communication in professional settings.",
        youtubeId: "JwjAAgGi-90",
        duration: "10:20"
      },
      {
        id: "comm-2",
        title: "Active Listening Skills",
        description: "Understand the importance of active listening and how to practice it.",
        youtubeId: "rzsVh8YnjZA",
        duration: "12:45"
      },
      {
        id: "comm-3",
        title: "Technical Interview Communication",
        description: "Learn how to communicate effectively during technical interviews.",
        youtubeId: "1qw5ITr3k9E",
        duration: "15:30"
      },
      {
        id: "comm-4",
        title: "Presentation Skills",
        description: "Develop skills for delivering effective presentations and public speaking.",
        youtubeId: "Zz-bhLjVG74",
        duration: "14:10"
      },
      {
        id: "comm-5",
        title: "Written Communication",
        description: "Learn best practices for professional emails, documentation, and reports.",
        youtubeId: "9a96KqeGU9M",
        duration: "11:55"
      }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return category === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category.toLowerCase() === category.toLowerCase());
};
