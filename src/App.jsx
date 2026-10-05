import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GuidedDemoBanner from './components/GuidedDemoBanner';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import CompetenciesPage from './pages/CompetenciesPage';
import GapAnalysisPage from './pages/GapAnalysisPage';
import LearningPathPage from './pages/LearningPathPage';
import IGotRecommendationsPage from './pages/IGotRecommendationsPage';
import LearningMaterialPage from './pages/LearningMaterialPage';
import AIAssistantPage from './pages/AIAssistantPage';
import QuizGeneratorPage from './pages/QuizGeneratorPage';
import QuizInterfacePage from './pages/QuizInterfacePage';
import QuizResultsPage from './pages/QuizResultsPage';
import ProgressPage from './pages/ProgressPage';
import NotificationsPage from './pages/NotificationsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminEmployeesPage from './pages/AdminEmployeesPage';
import AdminAnalyticsPage from './pages/AdminAnalyticsPage';
import AdminUploadMaterialPage from './pages/AdminUploadMaterialPage';
import AIFlowVisualizationPage from './pages/AIFlowVisualizationPage';
import ProfilePage from './pages/ProfilePage';

// Mock Data
import { MOCK_USER, MOCK_COMPETENCIES, MOCK_NOTIFICATIONS } from './services/mockData';

export default function App() {
  const [user, setUser] = useState(MOCK_USER);
  const [competencies, setCompetencies] = useState(MOCK_COMPETENCIES);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [quizResults, setQuizResults] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const handleToggleRole = () => {
    if (location.pathname.startsWith('/admin')) {
      setUser(prev => prev ? { ...prev, role: 'Employee' } : MOCK_USER);
      navigate('/dashboard');
    } else {
      setUser(prev => prev ? { ...prev, role: 'Administrator' } : { ...MOCK_USER, role: 'Administrator' });
      navigate('/admin');
    }
  };

  // Called when quiz is completed -> Updates Sampling Techniques from 58% to 67%
  const handleQuizSubmit = (results) => {
    setQuizResults(results);
    setCompetencies(prev => prev.map(c => {
      if (c.name === 'Sampling Techniques') {
        const newLevel = results.afterScore || 67;
        const newGap = c.requiredLevel - newLevel;
        return {
          ...c,
          currentLevel: newLevel,
          gap: newGap,
          trend: `+9% post assessment`,
          priority: newGap > 25 ? 'HIGH' : newGap > 10 ? 'MEDIUM' : 'LOW'
        };
      }
      return c;
    }));

    // Add notification
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: "Assessment Evaluated — Competency Upgraded!",
        message: `Your score in Sampling Techniques was recorded at ${results.score}%. Competency updated from 58% to ${results.afterScore || 67}%.`,
        timestamp: "Just now",
        type: "success",
        read: false
      },
      ...prev
    ]);
  };

  const isPublicPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/onboarding';

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 selection:bg-teal-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar user={user} onLogout={handleLogout} notifications={notifications} />

      <div className="flex flex-1">
        {/* Persistent Sidebar on Authenticated Pages */}
        {!isPublicPage && user && (
          <Sidebar user={user} onToggleRole={handleToggleRole} />
        )}

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto min-w-0">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/onboarding" element={<OnboardingPage onLogin={handleLogin} />} />
            
            {/* Employee Portal Routes */}
            <Route path="/dashboard" element={<DashboardPage user={user} competencies={competencies} />} />
            <Route path="/competencies" element={<CompetenciesPage competencies={competencies} />} />
            <Route path="/gap-analysis" element={<GapAnalysisPage competencies={competencies} />} />
            <Route path="/learning-path" element={<LearningPathPage />} />
            <Route path="/igot-recommendations" element={<IGotRecommendationsPage />} />
            <Route path="/learning-material" element={<LearningMaterialPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="/quiz-generator" element={<QuizGeneratorPage />} />
            <Route path="/quiz" element={<QuizInterfacePage onQuizSubmit={handleQuizSubmit} />} />
            <Route path="/quiz-results" element={<QuizResultsPage quizResults={quizResults} />} />
            <Route path="/progress" element={<ProgressPage competencies={competencies} />} />
            <Route path="/notifications" element={<NotificationsPage />} />

            {/* Admin Portal Routes */}
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/employees" element={<AdminEmployeesPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
            <Route path="/admin/upload-material" element={<AdminUploadMaterialPage />} />

            {/* Presentation & Profile Routes */}
            <Route path="/ai-flow" element={<AIFlowVisualizationPage />} />
            <Route path="/profile" element={<ProfilePage user={user} onUpdateUser={setUser} />} />
          </Routes>
        </main>
      </div>

      {/* SIH Guided Demo Floating Controller */}
      <GuidedDemoBanner onResetState={() => {
        setCompetencies(MOCK_COMPETENCIES);
        setQuizResults(null);
        navigate('/');
      }} />

    </div>
  );
}
