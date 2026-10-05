import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Activity, Clock, Award, Layers, BarChart2, Film, Database, Code, LogOut } from 'lucide-react';
import { INITIAL_SAMPLE_VIEWERS } from '../services/sampleData';
import { analyzeAudienceDataset } from '../services/mlEngine';

export default function Dashboard({ user, onLogout, analysisResults }) {
  const data = analysisResults || analyzeAudienceDataset(INITIAL_SAMPLE_VIEWERS);

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#193D32] text-[#F5F0E6] p-6 flex flex-col justify-between shrink-0 border-r border-[#C9A85C]/20">
        <div>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 mb-8 text-decoration-none">
            <div className="w-8 h-8 rounded-lg bg-[#C9A85C] flex items-center justify-center text-[#193D32]">
              <Sparkles className="w-4 h-4 fill-[#193D32]" />
            </div>
            <span className="font-serif text-xl font-semibold text-[#FCFAF5]">
              CineSense <span className="text-[#C9A85C] italic">AI</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <nav className="space-y-1 text-xs font-sans">
            <Link to="/dashboard" className="flex items-center gap-3 py-2.5 px-3 rounded-lg bg-[#FCFAF5]/10 text-[#FCFAF5] font-bold">
              <BarChart2 className="w-4 h-4 text-[#C9A85C]" />
              <span>Overview</span>
            </Link>
            <Link to="/segments" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Layers className="w-4 h-4" />
              <span>Audience Segments</span>
            </Link>
            <Link to="/analytics" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Activity className="w-4 h-4" />
              <span>Viewer Analytics</span>
            </Link>
            <Link to="/recommendations" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Film className="w-4 h-4" />
              <span>Recommendations</span>
            </Link>
            <Link to="/dataset" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Database className="w-4 h-4" />
              <span>Dataset Manager</span>
            </Link>
            <Link to="/model" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Sparkles className="w-4 h-4" />
              <span>Model Insights</span>
            </Link>
            <Link to="/api" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Code className="w-4 h-4" />
              <span>API Playground</span>
            </Link>
            <Link to="/evaluation" className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#FCFAF5]/5 text-[#DDE7D8]/80 hover:text-[#FCFAF5] transition-colors">
              <Award className="w-4 h-4" />
              <span>Evaluation Suite</span>
            </Link>
          </nav>
        </div>

        {/* User Info & Logout */}
        <div className="pt-6 border-t border-[#FCFAF5]/10">
          <div className="mb-3">
            <p className="text-xs font-bold text-[#FCFAF5] truncate">{user?.email || 'analyst@cinesense.ai'}</p>
            <p className="text-[10px] text-[#C9A85C] uppercase">{user?.role || 'OTT Analyst'}</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-xs font-semibold text-[#DDE7D8]/70 hover:text-[#FCFAF5] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#3A2925]">
              Audience Intelligence Dashboard
            </h1>
            <p className="text-xs text-[#3A2925]/70 mt-1">
              AI-generated insights from your latest viewer dataset.
            </p>
          </div>

          <Link to="/dataset" className="btn-primary text-xs py-2.5 px-4 self-start sm:self-auto">
            + UPLOAD NEW DATASET
          </Link>
        </div>

        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="card-cinesense p-4 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">TOTAL VIEWERS</p>
            <p className="font-serif text-2xl font-bold text-[#193D32] mt-1">{data.totalViewers}</p>
            <p className="text-[10px] text-[#3A2925]/70">Ingested telemetry</p>
          </div>
          <div className="card-cinesense p-4 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">ACTIVE SESSIONS</p>
            <p className="font-serif text-2xl font-bold text-[#3A2925] mt-1">1,420</p>
            <p className="text-[10px] text-[#3A2925]/70">7-day active window</p>
          </div>
          <div className="card-cinesense p-4 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">SEGMENTS</p>
            <p className="font-serif text-2xl font-bold text-[#C9A85C] mt-1">{data.segmentCount}</p>
            <p className="text-[10px] text-[#3A2925]/70">Discovered clusters</p>
          </div>
          <div className="card-cinesense p-4 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">AVG WATCH TIME</p>
            <p className="font-serif text-2xl font-bold text-[#193D32] mt-1">6.8 hrs</p>
            <p className="text-[10px] text-[#3A2925]/70">Per user / week</p>
          </div>
          <div className="card-cinesense p-4 bg-[#FCFAF5] col-span-2 lg:col-span-1">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">ENGAGEMENT</p>
            <p className="font-serif text-2xl font-bold text-[#5E7567] mt-1">92%</p>
            <p className="text-[10px] text-[#3A2925]/70">High completion rate</p>
          </div>
        </div>

        {/* Discovered Segments Summary Table */}
        <div className="card-cinesense p-6 bg-[#FCFAF5] mb-8">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3A2925]/10">
            <h3 className="font-serif text-xl font-bold text-[#3A2925]">Discovered Audience Persona Breakdown</h3>
            <Link to="/segments" className="text-xs font-bold text-[#193D32] hover:underline">
              View Full Segments Page →
            </Link>
          </div>

          <div className="space-y-3">
            {data.segments.map((seg) => (
              <div key={seg.id} className="p-4 bg-[#F5F0E6] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3 border border-[#3A2925]/5">
                <div>
                  <span className="font-mono text-[10px] font-bold bg-[#C9A85C] text-[#3A2925] px-2 py-0.5 rounded mr-2">
                    SEGMENT 0{seg.id}
                  </span>
                  <span className="font-serif text-base font-bold text-[#3A2925]">{seg.name}</span>
                  <p className="text-[#3A2925]/70 text-[11px] mt-0.5">{seg.description}</p>
                </div>

                <div className="flex items-center gap-4 text-center shrink-0">
                  <div>
                    <span className="text-[10px] text-[#3A2925]/60 block font-bold">VIEWERS</span>
                    <span className="font-bold text-[#193D32]">{seg.count} ({seg.percentage}%)</span>
                  </div>
                  <div className="border-l border-[#3A2925]/10 pl-4">
                    <span className="text-[10px] text-[#3A2925]/60 block font-bold">AVG WATCH</span>
                    <span className="font-bold text-[#3A2925]">{seg.avgWatchTime} hrs</span>
                  </div>
                  <div className="border-l border-[#3A2925]/10 pl-4">
                    <span className="text-[10px] text-[#3A2925]/60 block font-bold">COMPLETION</span>
                    <span className="font-bold text-[#C9A85C]">{seg.avgCompletionRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
