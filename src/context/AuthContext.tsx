import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { User } from '@supabase/supabase-js';

type Profile = {
  id: string;
  name: string;
  email: string;
  education?: string;
  points: number;
};

type AuthContextType = {
  user: Profile | null;
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
  const [user, setUser] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Check for existing session and fetch user profile on mount
  useEffect(() => {
    const getInitialSession = async () => {
      try {
        setIsLoading(true);
        
        // Set up auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            console.log("Auth state changed:", event, session?.user?.id);
            if (session?.user) {
              // Fetch profile data
              const { data: profile, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();
                
              if (profile) {
                console.log("Profile data fetched:", profile);
                setUser(profile);
              } else {
                console.error("Profile fetch error:", error);
                setUser(null);
              }
            } else {
              setUser(null);
            }
          }
        );

        // Check for existing session
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          console.log("Existing session found:", session.user.id);
          // Fetch profile data
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
            
          if (profile) {
            console.log("Initial profile data:", profile);
            setUser(profile);
          } else {
            console.error("Initial profile fetch error:", error);
          }
        }

        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error retrieving session:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    getInitialSession();
  }, []);

  // Login functionality using Supabase Auth
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error("Login error:", error);
        throw error;
      }
      
      if (!data.user || !data.session) {
        throw new Error("Failed to get user data after login");
      }
      
      console.log("Login successful:", data.user.id);
      
      return data;
    } catch (error: any) {
      console.error("Login function error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup functionality using Supabase Auth
  const signup = async (name: string, email: string, password: string, education: string) => {
    try {
      setIsLoading(true);
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            education
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast("Account created successfully! Please check your email to confirm your registration.");
    } catch (error: any) {
      toast("Sign up failed: " + (error.message || "Unknown error occurred"));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout functionality using Supabase Auth
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      toast("Logged out successfully");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast("Logout failed: " + (error.message || "Unknown error occurred"));
    }
  };

  // Update user points
  const updateUserPoints = async (points: number) => {
    if (!user) return;

    try {
      const newPoints = user.points + points;
      
      const { error } = await supabase
        .from('profiles')
        .update({ points: newPoints })
        .eq('id', user.id);
      
      if (error) {
        throw error;
      }
      
      setUser({ ...user, points: newPoints });
    } catch (error: any) {
      console.error("Error updating points:", error);
      toast("Failed to update points: " + (error.message || "Unknown error occurred"));
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
