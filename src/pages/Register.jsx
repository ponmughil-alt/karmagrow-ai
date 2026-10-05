import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Register({ onLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Analyst');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (onLogin) onLogin({ email, role, name: fullName });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center p-4">
      <div className="card-cinesense max-w-xl w-full p-8 sm:p-12 bg-[#FCFAF5] shadow-2xl">
        
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-decoration-none">
            <div className="w-8 h-8 rounded-lg bg-[#193D32] flex items-center justify-center text-[#C9A85C]">
              <Sparkles className="w-4 h-4 fill-[#C9A85C]" />
            </div>
            <span className="font-serif text-2xl font-semibold text-[#3A2925]">
              CineSense <span className="text-[#193D32] italic">AI</span>
            </span>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-[#3A2925]">
            Create an Account
          </h1>
          <p className="text-xs text-[#3A2925]/70 mt-1">
            Access CineSense AI audience segmentation platform.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#3A2925] uppercase mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#F5F0E6] border border-[#3A2925]/20 rounded-lg px-4 py-2.5 text-sm text-[#3A2925] focus:outline-none focus:border-[#193D32]"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3A2925] uppercase mb-1">
              Work Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F5F0E6] border border-[#3A2925]/20 rounded-lg px-4 py-2.5 text-sm text-[#3A2925] focus:outline-none focus:border-[#193D32]"
              placeholder="jane@ottplatform.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3A2925] uppercase mb-1">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#F5F0E6] border border-[#3A2925]/20 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#3A2925] focus:outline-none focus:border-[#193D32]"
            >
              <option value="Analyst">OTT Analyst</option>
              <option value="Content Manager">Content Manager</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3A2925] uppercase mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#F5F0E6] border border-[#3A2925]/20 rounded-lg px-4 py-2.5 text-sm text-[#3A2925] focus:outline-none focus:border-[#193D32]"
              placeholder="••••••••••••"
            />
          </div>

          <button type="submit" className="btn-primary w-full py-3 text-sm justify-center gap-2 mt-4 shadow-md">
            <span>CREATE ACCOUNT</span>
            <ArrowRight className="w-4 h-4 text-[#C9A85C]" />
          </button>
        </form>

        <p className="text-center text-xs text-[#3A2925]/70 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-[#193D32] hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}
