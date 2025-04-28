
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { coursesData } from "@/data/courses";
import { mockTestsData } from "@/data/mockTests";
import { Book, FileText, Award, ChevronRight } from "lucide-react";

const DashboardPage = () => {
  const { user } = useAuth();
  const [recentCourses, setRecentCourses] = useState(coursesData.slice(0, 3));
  const [recommendedTests, setRecommendedTests] = useState(mockTestsData.slice(0, 3));
  
  // For demonstration, we're using mock progress data
  const [courseProgress, setCourseProgress] = useState({
    completed: 2,
    total: coursesData.length,
  });

  const [testProgress, setTestProgress] = useState({
    completed: 1,
    total: mockTestsData.length,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name || 'Student'}!
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Track your progress and continue your learning journey
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Course Progress */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Course Progress</CardTitle>
                <Book className="h-5 w-5 text-brand-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {courseProgress.completed} / {courseProgress.total}
                </div>
                <Progress 
                  value={(courseProgress.completed / courseProgress.total) * 100}
                  className="h-2 mt-2"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {Math.round((courseProgress.completed / courseProgress.total) * 100)}% completed
                </p>
              </CardContent>
            </Card>
            
            {/* Mock Test Progress */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Mock Tests</CardTitle>
                <FileText className="h-5 w-5 text-brand-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {testProgress.completed} / {testProgress.total}
                </div>
                <Progress 
                  value={(testProgress.completed / testProgress.total) * 100}
                  className="h-2 mt-2"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {Math.round((testProgress.completed / testProgress.total) * 100)}% completed
                </p>
              </CardContent>
            </Card>
            
            {/* Points */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Your Points</CardTitle>
                <Award className="h-5 w-5 text-brand-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {user?.points || 0} pts
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Earn more points by completing courses and tests
                </p>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                  <Link to="/leaderboard" className="text-brand-600 flex items-center">
                    View leaderboard <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Courses */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Courses</h2>
              <Button asChild variant="outline" size="sm">
                <Link to="/courses">View All</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentCourses.map((course) => (
                <Link key={course.id} to={`/courses/${course.id}`}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-40 bg-gray-200 relative">
                      <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span className="text-white font-semibold">{course.title}</span>
                      </div>
                    </div>
                    <div className="p-4 flex-grow">
                      <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-sm text-gray-500">{course.level}</span>
                        <span className="text-sm text-brand-600">{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Recommended Mock Tests */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recommended Tests</h2>
              <Button asChild variant="outline" size="sm">
                <Link to="/mock-tests">View All</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedTests.map((test) => (
                <Link key={test.id} to={`/mock-tests/${test.id}`}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 p-6 h-full flex flex-col">
                    <div className="mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        test.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        test.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {test.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{test.title}</h3>
                    <p className="text-gray-600 text-sm flex-grow">{test.description}</p>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                      <span>{test.questionCount} questions</span>
                      <span>{test.timeInMinutes} minutes</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
