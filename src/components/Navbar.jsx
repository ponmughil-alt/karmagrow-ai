import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Sparkles, User, ShieldCheck, LogOut, ChevronDown, Menu, X, CheckCircle2 } from 'lucide-react';

export default function Navbar({ user, onLogout, notifications = [] }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Government Emblem */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-teal-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-xl tracking-tight text-white font-serif">
                    Karma<span className="text-teal-400">Grow</span> <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI</span>
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium tracking-wide">MoSPI Statistical Competency System</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center pl-4 border-l border-slate-800 space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/60 text-blue-200 border border-blue-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5 animate-ping"></span>
                iGOT Karmayogi Integrated
              </span>
            </div>
          </div>

          {/* Search Bar */}
          {user && (
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search competencies, iGOT courses, statistical skills..."
                  className="w-full pl-9 pr-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Right Header Action Icons & User Info */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                {/* Guided Demo Shortcut Link */}
                <Link
                  to="/ai-flow"
                  className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-teal-300 bg-teal-950/60 border border-teal-700/60 hover:bg-teal-900/80 transition-all shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                  SIH AI Architecture
                </Link>

                {/* Notifications Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifMenu(!showNotifMenu)}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors relative"
                    title="Notifications"
                  >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-slate-900"></span>
                    )}
                  </button>

                  {showNotifMenu && (
                    <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50">
                      <div className="px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">Notifications ({unreadCount} new)</span>
                        <Link to="/notifications" className="text-[11px] text-teal-400 hover:underline" onClick={() => setShowNotifMenu(false)}>View All</Link>
                      </div>
                      <div className="max-h-64 overflow-y-auto divide-y divide-slate-800/50">
                        {notifications.slice(0, 3).map((n) => (
                          <div key={n.id} className="p-3 hover:bg-slate-800/50 transition-colors cursor-pointer" onClick={() => { navigate('/notifications'); setShowNotifMenu(false); }}>
                            <p className="text-xs font-medium text-slate-200">{n.title}</p>
                            <p className="text-[11px] text-slate-400 line-clamp-1">{n.message}</p>
                            <span className="text-[10px] text-slate-500 mt-1 block">{n.timestamp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* User Role Badge & Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <img
                      src={user.profilePhoto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border border-teal-500/40 object-cover"
                    />
                    <div className="hidden md:block text-left">
                      <p className="text-xs font-semibold text-slate-200 leading-tight">{user.name}</p>
                      <p className="text-[10px] text-teal-400 font-medium">{user.role || 'Employee'}</p>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1 z-50 divide-y divide-slate-800">
                      <div className="px-4 py-3">
                        <p className="text-xs font-bold text-slate-200">{user.name}</p>
                        <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                        <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                          <ShieldCheck className="w-3 h-3 mr-1" /> MoSPI Verified
                        </span>
                      </div>
                      <div className="py-1">
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          <User className="w-4 h-4 mr-2 text-slate-400" /> Employee Profile
                        </Link>
                        <Link
                          to="/dashboard"
                          className="flex items-center px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Employee Portal
                        </Link>
                        <Link
                          to="/admin"
                          className="flex items-center px-4 py-2 text-xs text-teal-400 hover:bg-slate-800 hover:text-teal-300 font-medium"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Admin Dashboard
                        </Link>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setShowProfileMenu(false);
                            onLogout();
                          }}
                          className="w-full flex items-center px-4 py-2 text-xs text-rose-400 hover:bg-rose-950/30"
                        >
                          <LogOut className="w-4 h-4 mr-2" /> Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-sm transition-all"
                >
                  Demo Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
