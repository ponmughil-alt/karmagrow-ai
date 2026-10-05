import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Eye, EyeOff, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('analyst@cinesense.ai');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (onLogin) onLogin({ email, role: 'Analyst' });
    navigate('/dashboard');
  };

  const handleDemoSignIn = () => {
    if (onLogin) onLogin({ email: 'demo@cinesense.ai', role: 'Demo User' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center p-4">
      <div className="card-cinesense max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 bg-[#FCFAF5] overflow-hidden shadow-2xl">
        
        {/* Left Branding Panel (Deep Forest / Espresso) */}
        <div className="md:col-span-5 bg-[#193D32] text-[#FCFAF5] p-8 sm:p-12 flex flex-col justify-between relative">
          
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2.5 mb-12 text-decoration-none">
              <div className="w-9 h-9 rounded-lg bg-[#C9A85C] flex items-center justify-center text-[#193D32]">
                <Sparkles className="w-5 h-5 fill-[#193D32]" />
              </div>
              <span className="font-serif text-2xl font-semibold text-[#FCFAF5]">
                CineSense <span className="text-[#C9A85C] italic font-normal">AI</span>
              </span>
            </Link>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight mb-4">
              Turn Viewer Behavior <br />
              <span className="italic text-[#C9A85C]">Into Intelligence.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#DDE7D8]/80 leading-relaxed mb-8">
              Discover meaningful audience segments and personalized experiences with AI-powered audience intelligence.
            </p>
          </div>

          {/* Abstract Data Cluster Visualizer Graphic */}
          <div className="relative z-10 p-4 bg-[#122e25] rounded-xl border border-[#C9A85C]/30 text-xs font-mono">
            <div className="flex items-center justify-between text-[#C9A85C] mb-2 text-[10px]">
              <span>AUTHENTICATION</span>
              <span>● ENCRYPTED</span>
            </div>
            <p className="text-[#DDE7D8]/90 text-[11px]">
              RBAC permissions granted for OTT Analyst workspace & model API console.
            </p>
          </div>

          {/* Background Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A85C]/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Right Form Panel (Cream Background) */}
        <div className="md:col-span-7 p-8 sm:p-12 bg-[#FCFAF5] flex flex-col justify-center">
          
          <div className="mb-8">
            <span className="badge-category text-[10px] mb-2">WELCOME BACK</span>
            <h1 className="font-serif text-3xl font-bold text-[#3A2925]">
              Sign in to CineSense AI
            </h1>
            <p className="text-xs text-[#3A2925]/70 mt-1">
              Continue to your audience intelligence dashboard.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-bold text-[#3A2925] uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F5F0E6] border border-[#3A2925]/20 rounded-lg px-4 py-3 text-sm text-[#3A2925] focus:outline-none focus:border-[#193D32]"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3A2925] uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F5F0E6] border border-[#3A2925]/20 rounded-lg px-4 py-3 text-sm text-[#3A2925] focus:outline-none focus:border-[#193D32]"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3A2925]/60 hover:text-[#3A2925]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs py-1">
              <label className="flex items-center gap-2 cursor-pointer text-[#3A2925]">
                <input type="checkbox" defaultChecked className="rounded accent-[#193D32]" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[#193D32] font-semibold hover:underline">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-sm justify-center gap-2 shadow-md">
              <span>SIGN IN</span>
              <ArrowRight className="w-4 h-4 text-[#C9A85C]" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative text-center my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3A2925]/10"></div>
            </div>
            <span className="relative bg-[#FCFAF5] px-3 text-xs text-[#3A2925]/50 font-bold uppercase">OR</span>
          </div>

          {/* Secondary Actions */}
          <div className="space-y-3">
            <button
              onClick={handleDemoSignIn}
              className="btn-gold w-full py-3 text-xs justify-center flex items-center gap-2 shadow-sm"
            >
              <UserCheck className="w-4 h-4" />
              <span>CONTINUE AS DEMO USER</span>
            </button>
          </div>

          <p className="text-center text-xs text-[#3A2925]/70 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-[#193D32] hover:underline">
              Create an account
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}
