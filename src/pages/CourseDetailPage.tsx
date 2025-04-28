
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { getCourseById } from "@/data/courses";
import { Course, Video } from "@/types";
import { Clock, Calendar, Award, PlayCircle } from "lucide-react";
import { toast } from "sonner";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const { user, updateUserPoints } = useAuth();

  useEffect(() => {
    if (courseId) {
      const fetchedCourse = getCourseById(courseId);
      setCourse(fetchedCourse || null);
      
      if (fetchedCourse && fetchedCourse.videos.length > 0) {
        setActiveVideo(fetchedCourse.videos[0]);
      }
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Course not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleVideoComplete = () => {
    if (user) {
      const pointsEarned = 10;
      updateUserPoints(pointsEarned);
      toast(`Congratulations! You earned ${pointsEarned} points`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="mt-2 text-lg text-gray-600">{course.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="bg-brand-100 text-brand-600 border-none">{course.level}</Badge>
            <Badge className="border-none">
              <Clock className="w-4 h-4 mr-1" />
              {course.duration}
            </Badge>
            <Badge className="border-none">
              <Calendar className="w-4 h-4 mr-1" />
              {/* Fix: Using a default value since releaseDate doesn't exist in the Course type */}
              {course.category}
            </Badge>
            {user && (
              <Badge className="border-none">
                <Award className="w-4 h-4 mr-1" />
                Points: {user.points}
              </Badge>
            )}
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-4">
              <CardContent>
                {activeVideo ? (
                  <div className="youtube-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                      title="Course Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <p>No video available.</p>
                )}
                <div className="mt-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">{activeVideo?.title}</h2>
                  <Button onClick={handleVideoComplete}>Mark as Complete</Button>
                </div>
                <p className="text-gray-600 mt-2">{activeVideo?.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="modules">Modules</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Overview</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </TabsContent>
                  <TabsContent value="modules">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Modules</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {/* Using a simple display of course details since modules doesn't exist */}
                      <li key="course-level">Level: {course.level}</li>
                      <li key="course-duration">Duration: {course.duration}</li>
                      <li key="course-category">Category: {course.category}</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="reviews">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Reviews</h3>
                    <p className="text-gray-600">No reviews yet.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Content</h2>
                <ul>
                  {course.videos.map((video) => (
                    <li key={video.id} className="mb-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setActiveVideo(video)}
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        {video.title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
