
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockTestsData } from "@/data/mockTests";
import { Search, Timer, Award, FileText } from "lucide-react";

const MockTestsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(mockTestsData.map(test => test.category)))];
  
  // Filter tests based on search query and active tab
  const filteredTests = mockTestsData.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         test.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "all" || test.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Mock Tests</h1>
            <p className="mt-2 text-lg text-gray-600">
              Assess your knowledge and prepare for technical interviews with our mock tests
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search tests..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full md:w-auto" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:flex lg:w-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Tests Grid */}
          {filteredTests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map((test) => (
                <div key={test.id} className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        test.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        test.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {test.difficulty}
                      </span>
                      <span className="text-sm font-medium text-brand-600 flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {test.pointsReward} points
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-3">{test.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm flex-grow">{test.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>{test.questionCount} questions</span>
                      </div>
                      <div className="flex items-center">
                        <Timer className="h-4 w-4 mr-1" />
                        <span>{test.timeInMinutes} minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-5">
                      <Link to={`/mock-tests/${test.id}`}>
                        <Button className="w-full">Take Test</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">No tests found</h3>
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

export default MockTestsPage;
