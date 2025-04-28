
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, Award, FileText, Clock } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About ElevateCareer</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're dedicated to helping you master in-demand technical skills and advance your career through quality education and practical assessments.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At ElevateCareer, we believe that quality education should be accessible to everyone. Our mission is to bridge the gap between academia and industry by providing practical, hands-on learning experiences that prepare you for real-world technical challenges.
                </p>
                <p className="text-lg text-gray-600">
                  We focus on creating comprehensive courses and assessments that not only teach you the concepts but also help you apply them in practical scenarios, making you job-ready and competitive in today's tech landscape.
                </p>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've designed our platform to provide you with the best learning experience and help you achieve your career goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <Book className="text-brand-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Courses</h3>
                <p className="text-gray-600">
                  Our courses cover everything from fundamentals to advanced concepts, ensuring you build a strong foundation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-brand-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Realistic Assessments</h3>
                <p className="text-gray-600">
                  Our mock tests simulate real interview scenarios to prepare you for technical interviews and workplace challenges.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-brand-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gamified Learning</h3>
                <p className="text-gray-600">
                  Our points system and leaderboard keep you motivated and engaged throughout your learning journey.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-brand-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learn at Your Pace</h3>
                <p className="text-gray-600">
                  Our flexible platform allows you to learn at your own pace, making it easy to balance learning with other commitments.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're a team of passionate educators and industry professionals dedicated to helping you succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Team member"
                    className="rounded-full w-40 h-40 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Alex Johnson</h3>
                <p className="text-brand-600">Founder & CEO</p>
                <p className="text-gray-600 mt-2">
                  Former tech lead with 15+ years of experience in software development and education.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Team member"
                    className="rounded-full w-40 h-40 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Priya Sharma</h3>
                <p className="text-brand-600">Head of Content</p>
                <p className="text-gray-600 mt-2">
                  Curriculum expert with a passion for creating engaging learning experiences.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="Team member"
                    className="rounded-full w-40 h-40 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Michael Chen</h3>
                <p className="text-brand-600">Technical Director</p>
                <p className="text-gray-600 mt-2">
                  Algorithm specialist with experience at top tech companies, focusing on DSA curriculum.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Team member"
                    className="rounded-full w-40 h-40 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Emma Thompson</h3>
                <p className="text-brand-600">Community Lead</p>
                <p className="text-gray-600 mt-2">
                  Dedicated to building a supportive learning community and enhancing user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-brand-700 py-16 md:py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Career?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of students who have successfully landed their dream tech jobs by mastering our curriculum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
