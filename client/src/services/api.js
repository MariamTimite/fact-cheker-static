import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle authentication errors
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    // Handle other errors
    if (error.response?.data?.message) {
      console.error('API Error:', error.response.data.message);
    } else {
      console.error('API Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
};

export const factCheckAPI = {
  submit: (factCheckData) => api.post('/factcheck/submit', factCheckData),
  getAll: (params) => api.get('/factcheck', { params }),
  getById: (id) => api.get(`/factcheck/${id}`),
  verify: (id, verificationData) => api.put(`/factcheck/${id}/verify`, verificationData),
  comment: (id, commentData) => api.post(`/factcheck/${id}/comment`, commentData),
  like: (id) => api.post(`/factcheck/${id}/like`),
  getTrending: (limit) => api.get('/factcheck/trending', { params: { limit } }),
};

export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
  getStats: () => api.get('/users/stats'),
  getLeaderboard: (params) => api.get('/users/leaderboard', { params }),
  getById: (id) => api.get(`/users/${id}`),
  getFactChecks: (id, params) => api.get(`/users/${id}/factchecks`, { params }),
};

export const contentAPI = {
  analyze: (contentData) => api.post('/content/analyze', contentData),
  getSources: (params) => api.get('/content/sources', { params }),
  report: (reportData) => api.post('/content/report', reportData),
  getCategories: () => api.get('/content/categories'),
  getTrendingTopics: (limit) => api.get('/content/trending-topics', { params: { limit } }),
};

export default api; 