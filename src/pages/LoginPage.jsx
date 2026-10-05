import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, ArrowRight, Lock, Mail, UserCheck, Shield } from 'lucide-react';
import { MOCK_USER } from '../services/mockData';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('employee@karmagrow.demo');
  const [password, setPassword] = useState('demo123');
  const [role, setRole] = useState('Employee'); // 'Employee' or 'Administrator'

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      ...MOCK_USER,
      email: email || 'employee@karmagrow.demo',
      role: role
    };
    onLogin(userData);
    if (role === 'Administrator') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  const handleDemoLogin = (targetRole = 'Employee') => {
    const demoEmail = targetRole === 'Administrator' ? 'admin@karmagrow.demo' : 'employee@karmagrow.demo';
    setEmail(demoEmail);
    setPassword('demo123');
    setRole(targetRole);
    
    const userData = {
      ...MOCK_USER,
      email: demoEmail,
      role: targetRole,
      name: targetRole === 'Administrator' ? 'Dr. Rajesh Vardhan (Admin)' : 'Ponmughil R'
    };
    onLogin(userData);
    if (targetRole === 'Administrator') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row text-slate-100 font-sans">
      
      {/* Left Branding Column */}
      <div className="md:w-1/2 p-8 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border-r border-slate-800">
        <div>
          <Link to="/" className="flex items-center space-x-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-teal-400 p-0.5 shadow-lg">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-teal-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-serif">
                Karma<span className="text-teal-400">Grow</span> AI
              </span>
              <p className="text-xs text-slate-400 font-medium">MoSPI Official Statistical System</p>
            </div>
          </Link>

          <div className="space-y-6 max-w-lg">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-700/60 text-teal-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>SIH Presentation Prototype</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold text-white font-serif leading-tight">
              Identify the Gap. <br />
              Learn the Right Skill. <br />
              <span className="text-teal-400">Grow with Purpose.</span>
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              AI-enabled competency gap detection and personalized learning platform for India's Official Statistical System, designed for direct integration with <strong>iGOT Karmayogi</strong>.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              {[
                "Role-based competency mapping for Survey Operations & Economics",
                "Real-time simulated AI Gap Analysis & Priority Scoring",
                "Instant AI Quiz Generator from MoSPI statistical manuals",
                "Live competency score upgrades and verified transcript reporting"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-teal-950 border border-teal-600 flex items-center justify-center shrink-0">
                    <UserCheck className="w-3 h-3 text-teal-400" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-slate-500">
          © 2026 Ministry of Statistics & Programme Implementation (MoSPI) / KarmaGrow AI Prototype.
        </div>
      </div>

      {/* Right Login Form Column */}
      <div className="md:w-1/2 p-6 sm:p-12 lg:p-20 flex items-center justify-center bg-slate-950">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          
          <div>
            <h2 className="text-2xl font-bold text-white font-serif">Official Sign In</h2>
            <p className="text-xs text-slate-400 mt-1">Access your MoSPI competency intelligence portal</p>
          </div>

          {/* Role Selection Switcher */}
          <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setRole('Employee')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                role === 'Employee'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Employee Access
            </button>
            <button
              type="button"
              onClick={() => setRole('Administrator')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                role === 'Administrator'
                  ? 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Admin / Manager
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Official Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="employee@karmagrow.demo"
                  required
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 cursor-pointer text-slate-400">
                <input type="checkbox" defaultChecked className="rounded border-slate-800 bg-slate-950 text-teal-500 focus:ring-0" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Demo Mode: Password reset is disabled. Please use Demo Login."); }} className="text-teal-400 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick 1-Click Demo Login Box */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
              SIH Presentation Quick Demo Sign In
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('Employee')}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500/60 text-left transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-teal-400">Employee Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <p className="text-[10px] text-slate-400">Ponmughil R (Analyst)</p>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('Administrator')}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 text-left transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-indigo-400">Admin Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <p className="text-[10px] text-slate-400">Dr. Rajesh V. (MoSPI Admin)</p>
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 pt-2">
            Don't have an account?{' '}
            <Link to="/onboarding" className="text-teal-400 font-semibold hover:underline">
              Start Onboarding Wizard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
