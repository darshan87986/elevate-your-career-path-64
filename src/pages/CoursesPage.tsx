
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coursesData } from "@/data/courses";
import { Search, Video, FileText } from "lucide-react";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(coursesData.map(course => course.category)))];
  
  // Filter courses based on search query and active tab
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "all" || course.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
            <p className="mt-2 text-lg text-gray-600">
              Explore our comprehensive courses designed to help you master key technical skills
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search courses..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full md:w-auto" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:w-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Link key={course.id} to={`/courses/${course.id}`}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-200 relative">
                      <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <span className="bg-brand-600 text-white text-xs font-medium px-2 py-1 rounded">
                            {course.category}
                          </span>
                          <h3 className="text-white font-bold mt-2 text-lg">{course.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow">
                      <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
                      
                      <div className="mt-4 flex justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Video className="h-4 w-4 mr-1" />
                          <span>{course.videos.length} videos</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.level}
                        </span>
                        <span className="text-sm text-brand-600 font-medium">
                          {course.pointsReward} points
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
              <p className="mt-2 text-gray-600">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
                variant="outline"
                className="mt-4"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
