
import React, { useState, useEffect } from 'react';
import { getIcon } from '../constants';
import { User, CourseType } from '../types';
import { authService } from '../authService';
import { AlertCircle, CheckSquare } from 'lucide-react';

interface SignInProps {
  onLogin: (user: User) => void;
}

const SAVED_LOGIN_KEY = 'math_course_saved_login';

const SignIn: React.FC<SignInProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Form Fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  
  // Multi-course selection state
  const [selectedCourses, setSelectedCourses] = useState<CourseType[]>(['DSAT']);
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-fill saved credentials on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVED_LOGIN_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.username) setUsername(parsed.username);
        if (parsed.password) setPassword(parsed.password);
      }
    } catch (e) {
      console.warn("Could not load saved login credentials", e);
    }
  }, []);

  const saveCredentialsIfRemembered = (u: string, p: string) => {
    if (rememberMe) {
      try {
        localStorage.setItem(SAVED_LOGIN_KEY, JSON.stringify({ username: u, password: p }));
      } catch (e) {
        console.warn("Could not save login credentials", e);
      }
    } else {
      try {
        localStorage.removeItem(SAVED_LOGIN_KEY);
      } catch (_) {}
    }
  };

  const availableCourses: CourseType[] = ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'];

  const handleCourseToggle = (c: CourseType) => {
    if (selectedCourses.includes(c)) {
        // Prevent deselecting if it's the only one
        if (selectedCourses.length > 1) {
            setSelectedCourses(selectedCourses.filter(sc => sc !== c));
        }
    } else {
        setSelectedCourses([...selectedCourses, c]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        // Validation
        if (username.length < 3) {
            setError('Username must be at least 3 characters.');
            setLoading(false);
            return;
        }
        if (password.length < 3) {
            setError('Password must be at least 3 characters.');
            setLoading(false);
            return;
        }
        if (selectedCourses.length === 0) {
            setError('Please select at least one course.');
            setLoading(false);
            return;
        }

        const newUser: User = {
            username: username.trim(),
            password: password,
            name: name.trim(),
            role: 'student',
            tier: 'free', // New accounts default to free
            course: selectedCourses[0], // Fallback/Primary legacy
            courses: selectedCourses,
            progress: {},
            bookmarks: [],
            mistakes: [],
            history: [],
            isActive: true,
            pricePerSession: 0, // Free account default
        };

        const success = await authService.createUser(newUser);
        
        if (success) {
            // Auto login
            const loggedInUser = await authService.login(username.trim(), password);
            if (loggedInUser) {
                saveCredentialsIfRemembered(username.trim(), password);
                onLogin(loggedInUser);
            } else {
                // Should not happen if create was successful
                setError('Account created but login failed. Please try signing in.');
                setIsSignUp(false);
            }
        } else {
            setError('Username already exists. Please choose another.');
        }

      } else {
        // Login
        const user = await authService.login(username.trim(), password);
        if (user) {
          saveCredentialsIfRemembered(username.trim(), password);
          onLogin(user);
        } else {
          setError('Invalid username or password');
        }
      }
    } catch (err) {
      console.error(err instanceof Error ? err.message : String(err));
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
        const user = await authService.loginWithGoogle();
        if (user) {
            onLogin(user);
        } else {
            // Fallback generic error
            setError('Google sign in failed or cancelled.');
        }
    } catch (e: any) {
        console.error("Google Sign In Error Details:", e instanceof Error ? e.message : String(e));
        
        if (e.code === 'auth/unauthorized-domain') {
            setError(
                `CONFIGURATION REQUIRED: The domain "${window.location.hostname}" is not authorized. Please go to Firebase Console > Authentication > Settings > Authorized Domains and add this domain.`
            );
        } else if (e.code === 'auth/operation-not-allowed') {
             setError(
                'CONFIGURATION REQUIRED: Google Sign-In is not enabled. Go to Firebase Console > Authentication > Sign-in method and enable Google.'
            );
        } else if (e.code === 'auth/popup-closed-by-user') {
            setError('Sign-in cancelled by user.');
        } else {
            setError(e.message || 'An unexpected error occurred during Google sign in.');
        }
    } finally {
        setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setUsername('');
    setPassword('');
    setName('');
    setSelectedCourses(['DSAT']);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100 transition-all duration-300">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            {getIcon('GraduationCap', 'w-8 h-8')}
          </div>
        </div>
        
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
            {isSignUp ? 'Create Free Account' : 'Achieve 700+'}
        </h2>
        <p className="text-center text-gray-500 mb-8 font-medium">with Eng Rabaa Farrag in Math</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {isSignUp && (
            <div className="animate-in slide-in-from-top-4 fade-in duration-300 space-y-5">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                        placeholder="e.g. Ahmed Ali"
                        required={isSignUp}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Courses</label>
                    <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
                        {availableCourses.map((c) => (
                            <label key={c} className="flex items-center space-x-2 cursor-pointer select-none">
                                <div 
                                    onClick={() => handleCourseToggle(c)}
                                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${selectedCourses.includes(c) ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300 text-transparent'}`}
                                >
                                    <CheckSquare className="w-3.5 h-3.5" />
                                </div>
                                <span className={`text-sm font-bold ${selectedCourses.includes(c) ? 'text-purple-700' : 'text-gray-600'}`}>{c}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              placeholder="Choose a username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer accent-purple-600"
              />
              <span className="text-sm font-bold text-gray-600">Remember me</span>
            </label>
          </div>

          {error && (
            <div className={`p-4 rounded-xl text-sm font-medium text-center animate-in fade-in flex items-start gap-3 ${error.includes('CONFIGURATION') ? 'bg-orange-50 text-orange-800' : 'bg-red-50 text-red-600'}`}>
              <AlertCircle className={`w-5 h-5 flex-shrink-0 ${error.includes('CONFIGURATION') ? 'text-orange-600' : 'text-red-500'}`} />
              <span className="text-left">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-100 flex justify-center items-center"
          >
            {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
                isSignUp ? "Create Account" : "Sign In"
            )}
          </button>
        </form>

        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
        </div>

        <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-bold transition-all hover:bg-gray-50 flex justify-center items-center gap-3 shadow-sm hover:shadow-md"
        >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
        </button>
        
        <div className="mt-6 text-center">
            <button 
                onClick={toggleMode}
                className="text-purple-600 hover:text-purple-800 font-bold text-sm hover:underline transition-all"
            >
                {isSignUp 
                    ? "Already have an account? Sign In" 
                    : "Don't have an account? Create Free Account"}
            </button>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-100 pt-4">
          <p>Instructed with Eng Rabaa Farrag</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
