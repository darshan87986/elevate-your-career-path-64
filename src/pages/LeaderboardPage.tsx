
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTopUsers } from "@/data/leaderboard";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeaderboardPage = () => {
  const topUsers = getTopUsers();
  const [sortBy, setSortBy] = useState<'points' | 'courses' | 'tests'>('points');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedUsers = [...topUsers].sort((a, b) => {
    let valueA, valueB;
    
    switch (sortBy) {
      case 'courses':
        valueA = a.completedCourses.length;
        valueB = b.completedCourses.length;
        break;
      case 'tests':
        valueA = a.completedTests.length;
        valueB = b.completedTests.length;
        break;
      default:
        valueA = a.points;
        valueB = b.points;
    }
    
    return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
  });

  const handleSort = (column: 'points' | 'courses' | 'tests') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Leaderboard</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how you stack up against other learners. Earn more points by completing courses and acing mock tests.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-brand-700 to-brand-600 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Award className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Top Performers</h2>
                </div>
                <p className="text-sm opacity-90">Updated daily</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('points')}>
                      <div className="flex items-center">
                        Points
                        {sortBy === 'points' && (
                          <span className="ml-1">
                            {sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('courses')}>
                      <div className="flex items-center">
                        Courses
                        {sortBy === 'courses' && (
                          <span className="ml-1">
                            {sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('tests')}>
                      <div className="flex items-center">
                        Tests
                        {sortBy === 'tests' && (
                          <span className="ml-1">
                            {sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </span>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Education
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedUsers.map((user, index) => (
                    <tr key={user.id} className={index < 3 ? "bg-brand-50" : ""}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${index < 3 ? "text-brand-700" : "text-gray-900"}`}>
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center">
                            <span className="text-brand-700 font-medium">{user.name.charAt(0)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">{user.points}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.completedCourses.length}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.completedTests.length}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.education}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-10">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn More Points</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Complete courses and tests to earn points and climb up the leaderboard. The more you learn, the higher you'll rank!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="/courses">Browse Courses</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/mock-tests">Take Mock Tests</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
