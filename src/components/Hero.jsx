import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Play, Users, Clock, Award, Activity, Film } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-[#F5F0E6] flex flex-col justify-center items-center px-4 py-16 overflow-hidden border-b border-[#3A2925]/10">
      
      {/* Background Soft Sage Gradients & Abstract Cinematic Vignettes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DDE7D8]/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-[#E8DDCB]/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Abstract Left Cinematic Frame (Low Opacity Tinted Cinema Graphic) */}
      <div className="absolute top-12 left-6 hidden lg:block opacity-25 pointer-events-none mix-blend-multiply">
        <svg width="220" height="280" viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="220" height="280" rx="16" fill="#193D32" fillOpacity="0.1" />
          <path d="M20 40H200M20 80H200M20 120H200M20 160H200M20 200H200M20 240H200" stroke="#3A2925" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="110" cy="140" r="45" stroke="#C9A85C" strokeWidth="3" fill="#DDE7D8" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Abstract Right Cinematic Frame */}
      <div className="absolute bottom-16 right-6 hidden lg:block opacity-25 pointer-events-none mix-blend-multiply">
        <svg width="240" height="260" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="260" rx="16" fill="#5E7567" fillOpacity="0.12" />
          <circle cx="60" cy="60" r="24" fill="#C9A85C" fillOpacity="0.3" />
          <circle cx="180" cy="60" r="24" fill="#193D32" fillOpacity="0.2" />
          <rect x="40" y="120" width="160" height="100" rx="8" stroke="#3A2925" strokeWidth="2" fill="#FCFAF5" fillOpacity="0.5" />
        </svg>
      </div>

      {/* Hero Center Wrapper */}
      <div className="max-w-4xl text-center z-10 relative px-2">
        
        {/* Category Label */}
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <span className="badge-category shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A85C]" />
            AI • AUDIENCE INTELLIGENCE • PERSONALIZATION
          </span>
        </div>

        {/* Main Display Typography */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] text-[#3A2925] mb-6 tracking-tight">
          Understand Every Viewer. <br className="hidden sm:inline" />
          <span className="italic font-light text-[#193D32]">Personalize Every Experience.</span>
        </h1>

        {/* Supporting Message */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#3A2925]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          CineSense AI transforms raw OTT viewing behavior into meaningful audience segments, 
          actionable insights, and personalized recommendations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link to="/dataset" className="btn-primary w-full sm:w-auto text-sm py-3.5 px-8 shadow-md">
            <span>ANALYZE YOUR AUDIENCE</span>
            <ArrowRight className="w-4 h-4 text-[#C9A85C]" />
          </Link>
          <Link to="/dashboard" className="btn-secondary w-full sm:w-auto text-sm py-3.5 px-8">
            <Play className="w-4 h-4 text-[#193D32] fill-[#193D32]" />
            <span>EXPLORE DASHBOARD</span>
          </Link>
        </div>
      </div>

      {/* Floating Hero Cards Around Central Content */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 z-20 relative mt-4">
        
        {/* Card 1: Discovered Segments */}
        <div className="card-cinesense p-4 animate-float-1 border-l-4 border-l-[#C9A85C]">
          <div className="flex items-center gap-2 text-[#193D32] mb-1">
            <Users className="w-4 h-4 text-[#C9A85C]" />
            <span className="text-2xl font-serif font-bold text-[#3A2925]">5</span>
          </div>
          <p className="text-xs font-semibold text-[#3A2925]">Audience Segments</p>
          <p className="text-[10px] text-[#3A2925]/60 mt-0.5">Automatically discovered</p>
        </div>

        {/* Card 2: Engagement Rate */}
        <div className="card-cinesense p-4 animate-float-2 border-l-4 border-l-[#193D32]">
          <div className="flex items-center gap-2 text-[#193D32] mb-1">
            <Activity className="w-4 h-4 text-[#193D32]" />
            <span className="text-2xl font-serif font-bold text-[#3A2925]">92%</span>
          </div>
          <p className="text-xs font-semibold text-[#3A2925]">Viewer Engagement</p>
          <p className="text-[10px] text-[#3A2925]/60 mt-0.5">Active completion rate</p>
        </div>

        {/* Card 3: Avg Watch Time */}
        <div className="card-cinesense p-4 animate-float-3 border-l-4 border-l-[#5E7567]">
          <div className="flex items-center gap-2 text-[#193D32] mb-1">
            <Clock className="w-4 h-4 text-[#5E7567]" />
            <span className="text-2xl font-serif font-bold text-[#3A2925]">8.4 hrs</span>
          </div>
          <p className="text-xs font-semibold text-[#3A2925]">Avg Watch Time</p>
          <p className="text-[10px] text-[#3A2925]/60 mt-0.5">Per binge viewer</p>
        </div>

        {/* Card 4: AI Match */}
        <div className="card-cinesense p-4 animate-float-4 border-l-4 border-l-[#C9A85C]">
          <div className="flex items-center gap-2 text-[#193D32] mb-1">
            <Award className="w-4 h-4 text-[#C9A85C]" />
            <span className="text-2xl font-serif font-bold text-[#3A2925]">94%</span>
          </div>
          <p className="text-xs font-semibold text-[#3A2925]">AI Rec Match</p>
          <p className="text-[10px] text-[#3A2925]/60 mt-0.5">Precision confidence</p>
        </div>

        {/* Card 5: Behavioral Clusters Visual */}
        <div className="card-cinesense p-4 animate-float-1 border-l-4 border-l-[#193D32]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#3A2925]">Behavioral</span>
            <span className="w-2 h-2 rounded-full bg-[#193D32] animate-ping"></span>
          </div>
          <div className="flex items-center gap-1 my-1.5">
            <span className="w-2 h-2 rounded-full bg-[#193D32]"></span>
            <span className="w-2 h-2 rounded-full bg-[#C9A85C]"></span>
            <span className="w-2 h-2 rounded-full bg-[#5E7567]"></span>
            <span className="w-2 h-2 rounded-full bg-[#3A2925]"></span>
          </div>
          <p className="text-[10px] text-[#3A2925]/60">Unsupervised K-Means</p>
        </div>

        {/* Card 6: Personalized Content */}
        <div className="card-cinesense p-4 animate-float-2 border-l-4 border-l-[#5E7567]">
          <div className="flex items-center gap-2 mb-1">
            <Film className="w-4 h-4 text-[#193D32]" />
            <span className="text-xs font-bold text-[#3A2925]">Personalized</span>
          </div>
          <p className="text-xs text-[#3A2925]/80 font-medium">Tailored per segment</p>
          <p className="text-[10px] text-[#3A2925]/60 mt-0.5">Transparent rationale</p>
        </div>
      </div>

      {/* Gentle Curving Film Strip Element Near Lower Edge */}
      <div className="filmstrip-bg"></div>
    </section>
  );
}
