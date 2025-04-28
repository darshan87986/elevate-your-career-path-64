
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-brand-600 text-2xl font-bold">Elevate<span className="text-brand-800">Career</span></span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">About Us</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/courses" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">Courses</Link>
                <Link to="/mock-tests" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">Mock Tests</Link>
                <Link to="/leaderboard" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">Leaderboard</Link>
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                    <span className="mr-1">{user?.name || 'Account'}</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="px-4 py-2 text-xs text-gray-500">
                      <div className="font-medium">{user?.email}</div>
                      <div className="mt-1">Points: {user?.points}</div>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                    <button 
                      onClick={handleLogout} 
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Button asChild variant="outline" className="mr-2">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link 
                to="/courses" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
                onClick={toggleMobileMenu}
              >
                Courses
              </Link>
              <Link 
                to="/mock-tests" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
                onClick={toggleMobileMenu}
              >
                Mock Tests
              </Link>
              <Link 
                to="/leaderboard" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
                onClick={toggleMobileMenu}
              >
                Leaderboard
              </Link>
              <Link 
                to="/dashboard" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
                onClick={toggleMobileMenu}
              >
                Dashboard
              </Link>
              <button 
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }} 
                className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md"
                onClick={toggleMobileMenu}
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 text-base font-medium text-brand-600 hover:bg-gray-50 rounded-md"
                onClick={toggleMobileMenu}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
