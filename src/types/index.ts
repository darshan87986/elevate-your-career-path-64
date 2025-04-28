
export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  videos: Video[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  pointsReward: number;
  completed?: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  watched?: boolean;
}

export interface MockTest {
  id: string;
  title: string;
  category: string;
  description: string;
  timeInMinutes: number;
  questionCount: number;
  pointsReward: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed?: boolean;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  education: string;
  points: number;
  completedCourses: string[];
  completedTests: string[];
}
