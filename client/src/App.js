import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

// Context
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/common/Loading';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import FactCheck from './pages/FactCheck';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Trending from './pages/Trending';
import Education from './pages/Education';
import API from './pages/API';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FactCheckDetail from './pages/FactCheckDetail';
import UserProfileDetail from './pages/UserProfileDetail';
import SearchResults from './pages/SearchResults';
import CategoryPage from './pages/CategoryPage';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Documentation from './pages/Documentation';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Status from './pages/Status';
import Cookies from './pages/Cookies';
import License from './pages/License';

// Styles
import './styles/globals.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <AuthProvider>
              <div className="App min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
                <Header />
                <main className="pt-16">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/fact-check" element={<FactCheck />} />
                    <Route path="/fact-check/:id" element={<FactCheckDetail />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/api" element={<API />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/:id" element={<UserProfileDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/license" element={<License />} />
                  </Routes>
                </main>
                <Footer />
                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 4000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                    success: {
                      duration: 3000,
                      theme: {
                        primary: '#10b981',
                        secondary: '#059669',
                      },
                    },
                    error: {
                      duration: 5000,
                      theme: {
                        primary: '#ef4444',
                        secondary: '#dc2626',
                      },
                    },
                  }}
                />
              </div>
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App; 