import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Sparkles,
  TrendingUp,
  Target,
  BookOpen,
  Award,
  ArrowRight,
  AlertTriangle,
  PlayCircle,
  BrainCircuit,
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts';

export default function DashboardPage({ user, competencies, onNavigate }) {
  const navigate = useNavigate();

  // Radar chart data for competencies
  const radarData = competencies.map(c => ({
    subject: c.name,
    Current: c.currentLevel,
    Required: c.requiredLevel
  }));

  // Weekly progress chart data
  const weeklyData = [
    { day: 'Mon', score: 68, hours: 1.2 },
    { day: 'Tue', score: 70, hours: 1.5 },
    { day: 'Wed', score: 72, hours: 2.0 },
    { day: 'Thu', score: 72, hours: 1.0 },
    { day: 'Fri', score: 74, hours: 2.5 },
    { day: 'Sat', score: 78, hours: 3.0 },
    { day: 'Sun', score: 84, hours: 2.2 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Top Greeting Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-700">
              Senior Statistical Analyst • MoSPI
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">
            Good morning, {user?.name || 'Ponmughil'} 👋
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Here is your personalized competency growth overview & AI learning pipeline.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <Link
            to="/gap-analysis"
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md shadow-teal-500/20 flex items-center space-x-2 transition-all"
          >
            <BrainCircuit className="w-4 h-4" />
            <span>View AI Gap Analysis</span>
          </Link>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { title: "Overall Competency", value: `${user?.overallCompetency || 72}%`, sub: "+4% from last month", icon: TrendingUp, color: "text-teal-400", bg: "bg-teal-950/40 border-teal-800/60" },
          { title: "Identified Skill Gaps", value: "4", sub: "1 High Priority Gap", icon: Target, color: "text-amber-400", bg: "bg-amber-950/40 border-amber-800/60" },
          { title: "Courses Completed", value: `${user?.completedCoursesCount || 8}`, sub: "iGOT Karmayogi", icon: BookOpen, color: "text-blue-400", bg: "bg-blue-950/40 border-blue-800/60" },
          { title: "Quiz Average Score", value: `${user?.quizAverageScore || 84}%`, sub: "Last test: 84%", icon: Award, color: "text-purple-400", bg: "bg-purple-950/40 border-purple-800/60" }
        ].map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className={`p-5 rounded-2xl border bg-slate-900 shadow-lg ${card.bg}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{card.title}</span>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <Icon className={`w-4 h-4 ${card.color}`} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-serif">{card.value}</div>
              <p className="text-[11px] text-slate-400 mt-1">{card.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Grid: Competency Overview Radar Chart & Skill Gap Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* A. Competency Radar Chart */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Competency Radar vs Role Requirement</h3>
              <p className="text-[11px] text-slate-400">Comparing current level against target official statistics threshold</p>
            </div>
            <Link to="/competencies" className="text-xs text-teal-400 hover:underline font-semibold flex items-center">
              View All <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                <Radar name="Current Proficiency" dataKey="Current" stroke="#0d9488" fill="#0d9488" fillOpacity={0.5} />
                <Radar name="Required Level" dataKey="Required" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '11px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* B. Skill Gap Summary */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <h3 className="text-sm font-bold text-white">Top Identified Skill Gaps</h3>
                <p className="text-[11px] text-slate-400">Prioritized by AI based on role impact</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
                1 High Priority
              </span>
            </div>

            <div className="space-y-3">
              {[
                { name: "Sampling Techniques", gap: 32, current: 58, req: 90, priority: "HIGH", color: "bg-rose-500", text: "text-rose-400" },
                { name: "Data Visualization", gap: 18, current: 72, req: 90, priority: "MEDIUM", color: "bg-amber-500", text: "text-amber-400" },
                { name: "Statistical Reporting", gap: 9, current: 81, req: 90, priority: "LOW", color: "bg-teal-500", text: "text-teal-400" }
              ].map((gapItem, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{gapItem.name}</span>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-700 ${gapItem.text}`}>
                      {gapItem.priority} PRIORITY
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Current: {gapItem.current}%</span>
                    <span className="font-bold text-slate-200">Gap: {gapItem.gap}%</span>
                    <span>Target: {gapItem.req}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${gapItem.color} rounded-full`} style={{ width: `${gapItem.current}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/gap-analysis')}
            className="w-full mt-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md flex items-center justify-center space-x-2 transition-all"
          >
            <span>View Full AI Gap Analysis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Grid: C. Today's Learning & D. AI Recommendation Insight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* C. Today's Learning */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">In Progress Course</span>
            <span className="text-[10px] font-medium text-slate-400 flex items-center">
              <Clock className="w-3 h-3 mr-1" /> 25 min remaining
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Sampling Techniques — Fundamentals</h3>
            <p className="text-xs text-slate-400 mt-1">Module 2: Probability & Stratified Sample Frame Selection</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Module Progress</span>
              <span className="font-bold text-teal-300">60%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div className="h-full bg-teal-400 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          <button
            onClick={() => navigate('/learning-material')}
            className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center justify-center space-x-2 transition-all shadow-md"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Continue Learning Material</span>
          </button>
        </div>

        {/* D. AI Insight Recommendation Card */}
        <div className="bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-900 border border-indigo-700/50 rounded-3xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            </div>
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Karma AI Insight</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            "Based on your recent survey methodology assessment, improving <strong className="text-teal-300">Sampling Techniques</strong> could increase your overall role competency index by approximately <strong className="text-amber-300">14%</strong>."
          </p>

          <button
            onClick={() => navigate('/learning-path')}
            className="py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center space-x-2 transition-all shadow-md self-start"
          >
            <span>View Recommended Path</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* E. Weekly Learning & Assessment Score Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white">Weekly Learning Engagement & Performance Score</h3>
            <p className="text-[11px] text-slate-400">Hours spent studying vs average quiz scores this week</p>
          </div>
          <span className="text-xs font-semibold text-teal-400">Streak: 12 Days 🔥</span>
        </div>

        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 11 }} domain={[0, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '11px' }} />
              <Bar dataKey="score" name="Assessment Score %" fill="#0d9488" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
