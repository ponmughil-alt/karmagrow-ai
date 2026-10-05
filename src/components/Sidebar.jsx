import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Target,
  BrainCircuit,
  Milestone,
  BookOpen,
  FileText,
  MessageSquareCode,
  Sparkles,
  Award,
  TrendingUp,
  Bell,
  Users,
  BarChart3,
  Upload,
  Workflow,
  Shield,
  HelpCircle,
  Settings
} from 'lucide-react';

export default function Sidebar({ user, onToggleRole }) {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  const employeeLinks = [
    { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { to: '/competencies', label: 'My Competencies', icon: Target },
    { to: '/gap-analysis', label: 'AI Gap Analysis', icon: BrainCircuit, badge: 'AI' },
    { to: '/learning-path', label: 'Learning Path', icon: Milestone },
    { to: '/igot-recommendations', label: 'iGOT Resources', icon: BookOpen },
    { to: '/learning-material', label: 'Learning Material', icon: FileText },
    { to: '/ai-assistant', label: 'AI Assistant', icon: MessageSquareCode },
    { to: '/quiz-generator', label: 'AI Quiz Generator', icon: Sparkles },
    { to: '/quiz', label: 'Assessments', icon: Award },
    { to: '/progress', label: 'Competency Progress', icon: TrendingUp },
    { to: '/notifications', label: 'Notifications', icon: Bell },
  ];

  const adminLinks = [
    { to: '/admin', label: 'Admin Overview', icon: LayoutDashboard },
    { to: '/admin/employees', label: 'Workforce Directory', icon: Users },
    { to: '/admin/analytics', label: 'Competency Analytics', icon: BarChart3, badge: 'AI' },
    { to: '/admin/upload-material', label: 'Upload Learning Data', icon: Upload },
    { to: '/ai-flow', label: 'AI Engine Architecture', icon: Workflow },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 min-h-[calc(100vh-4rem)] text-slate-300">
      
      {/* Role Selector Header */}
      <div className="p-4 border-b border-slate-800">
        <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isAdminPath ? 'bg-indigo-400' : 'bg-teal-400'}`}></div>
            <span className="text-xs font-bold text-slate-200">
              {isAdminPath ? 'Admin Portal' : 'Employee Portal'}
            </span>
          </div>
          <button
            onClick={onToggleRole}
            className="text-[10px] font-semibold text-teal-400 hover:text-teal-300 px-2 py-0.5 rounded bg-teal-950/60 border border-teal-700/50 hover:bg-teal-900/80 transition-all"
          >
            Switch to {isAdminPath ? 'Employee' : 'Admin'}
          </button>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
          {isAdminPath ? 'Management & Analytics' : 'Competency Growth'}
        </p>

        {(isAdminPath ? adminLinks : employeeLinks).map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`
              }
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-teal-400/20 text-teal-300 border border-teal-500/30">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

        {!isAdminPath && (
          <div className="pt-4 border-t border-slate-800 mt-4">
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              SIH Presentation Tool
            </p>
            <NavLink
              to="/ai-flow"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-indigo-400 hover:text-indigo-200 hover:bg-slate-800/60'
                }`
              }
            >
              <Workflow className="w-4 h-4 text-indigo-400" />
              <span>AI Engine Visualizer</span>
            </NavLink>
          </div>
        )}
      </div>

      {/* Footer Info / MoSPI Branding */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-800/80">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-teal-400 shrink-0" />
            <div>
              <p className="text-[11px] font-bold text-slate-300">KarmaGrow AI v2.4</p>
              <p className="text-[10px] text-slate-500">iGOT Karmayogi Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
