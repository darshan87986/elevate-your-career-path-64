
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Learning App</h1>
        <p className="text-xl text-gray-600 mb-8">Start your learning journey today!</p>
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/login')}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-white border border-brand-600 hover:bg-gray-100 text-brand-600 font-bold py-2 px-6 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
