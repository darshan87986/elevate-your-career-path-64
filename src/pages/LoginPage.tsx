
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { z } from "zod";
import { toast } from "sonner";

// Define the login form schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required")
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    // Clear auth error when user makes any changes
    if (authError) {
      setAuthError(null);
    }
  };

  const validateForm = () => {
    try {
      loginSchema.parse(formData);
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: Partial<LoginFormData> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            const path = error.path[0].toString();
            formattedErrors[path as keyof LoginFormData] = error.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setAuthError(null);
    
    try {
      console.log("Attempting login with:", formData.email);
      await login(formData.email, formData.password);
      console.log("Login success, redirecting to dashboard");
      toast.success("Welcome back! You're now logged in.");
      
      // Add a small delay before navigating to ensure state updates
      setTimeout(() => {
        navigate("/dashboard");
      }, 100);
    } catch (error: any) {
      console.error("Login error:", error);
      setAuthError(error.message || "Failed to login. Please check your credentials.");
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated) {
    console.log("User is already authenticated, redirecting to dashboard");
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-brand-600 hover:text-brand-500">
                Sign up
              </Link>
            </p>
          </div>
          
          {authError && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {authError}
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-500">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
