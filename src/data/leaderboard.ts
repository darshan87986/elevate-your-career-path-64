
import { User } from "@/types";

export const leaderboardData: User[] = [
  {
    id: "user1",
    name: "Alex Johnson",
    email: "alex@example.com",
    education: "Master's Degree",
    points: 850,
    completedCourses: ["dsa", "javascript"],
    completedTests: ["quantitative", "basic-coding"]
  },
  {
    id: "user2",
    name: "Samantha Lee",
    email: "samantha@example.com",
    education: "Bachelor's Degree",
    points: 920,
    completedCourses: ["dsa", "javascript", "cpp"],
    completedTests: ["quantitative", "verbal", "basic-coding"]
  },
  {
    id: "user3",
    name: "Michael Chen",
    email: "michael@example.com",
    education: "PhD",
    points: 780,
    completedCourses: ["javascript", "communication"],
    completedTests: ["verbal", "logical-reasoning"]
  },
  {
    id: "user4",
    name: "Priya Sharma",
    email: "priya@example.com",
    education: "Bachelor's Degree",
    points: 1050,
    completedCourses: ["dsa", "javascript", "cpp", "communication"],
    completedTests: ["quantitative", "verbal", "basic-coding", "advanced-dsa"]
  },
  {
    id: "user5",
    name: "James Wilson",
    email: "james@example.com",
    education: "Self-taught",
    points: 720,
    completedCourses: ["javascript", "cpp"],
    completedTests: ["basic-coding", "placement-aptitude"]
  },
  {
    id: "user6",
    name: "Olivia Garcia",
    email: "olivia@example.com",
    education: "Master's Degree",
    points: 890,
    completedCourses: ["dsa", "communication"],
    completedTests: ["advanced-dsa", "verbal", "logical-reasoning"]
  },
  {
    id: "user7",
    name: "Ahmed Hassan",
    email: "ahmed@example.com",
    education: "Bachelor's Degree",
    points: 810,
    completedCourses: ["dsa", "javascript"],
    completedTests: ["quantitative", "placement-aptitude"]
  },
  {
    id: "user8",
    name: "Emma Thompson",
    email: "emma@example.com",
    education: "Associate Degree",
    points: 680,
    completedCourses: ["communication", "javascript"],
    completedTests: ["verbal", "logical-reasoning"]
  },
  {
    id: "user9",
    name: "David Rodriguez",
    email: "david@example.com",
    education: "Master's Degree",
    points: 970,
    completedCourses: ["dsa", "cpp", "javascript"],
    completedTests: ["basic-coding", "advanced-dsa", "placement-aptitude"]
  },
  {
    id: "user10",
    name: "Wei Zhang",
    email: "wei@example.com",
    education: "PhD",
    points: 1120,
    completedCourses: ["dsa", "javascript", "cpp", "communication"],
    completedTests: ["quantitative", "verbal", "advanced-dsa", "logical-reasoning", "placement-aptitude"]
  }
];

export const getTopUsers = (count: number = 10): User[] => {
  return [...leaderboardData].sort((a, b) => b.points - a.points).slice(0, count);
};
