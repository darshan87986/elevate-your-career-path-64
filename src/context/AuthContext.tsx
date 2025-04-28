
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

type User = {
  id: string;
  email: string;
  name: string;
  education?: string;
  points: number;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, education: string) => Promise<void>;
  logout: () => void;
  updateUserPoints: (points: number) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  // Mock login functionality (will be replaced with Supabase Auth)
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // This is a mock - replace with actual Supabase auth
      if (email && password) {
        // In a real app, we'd validate against Supabase here
        const mockUser = {
          id: 'mock-id-123',
          email,
          name: email.split('@')[0],
          points: 0
        };
        
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        toast({
          title: "Logged in successfully",
          description: "Welcome back to ElevateCareer!"
        });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error instanceof Error ? error.message : "Unknown error occurred"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock signup functionality (will be replaced with Supabase Auth)
  const signup = async (name: string, email: string, password: string, education: string) => {
    try {
      setIsLoading(true);
      // This is a mock - replace with actual Supabase auth
      if (name && email && password) {
        // In a real app, we'd create a user in Supabase here
        const mockUser = {
          id: 'mock-id-' + Math.random().toString(36).substr(2, 9),
          email,
          name,
          education,
          points: 0
        };
        
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        toast({
          title: "Account created",
          description: "Welcome to ElevateCareer!"
        });
      } else {
        throw new Error('Please fill in all required fields');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: error instanceof Error ? error.message : "Unknown error occurred"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
  };

  const updateUserPoints = (points: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        points: user.points + points
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading, 
        login, 
        signup, 
        logout,
        updateUserPoints
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
