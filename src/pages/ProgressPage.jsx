import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Award, Clock, BookOpen, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function ProgressPage({ competencies }) {
  const navigate = useNavigate();

  const growthData = [
    { month: 'May', score: 62 },
    { month: 'Jun', score: 65 },
    { month: 'Jul', score: 68 },
    { month: 'Aug', score: 70 },
    { month: 'Sep', score: 72 },
    { month: 'Oct', score: 76 }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">MoSPI Verified Transcript</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-1">Competency Growth & Progress</h1>
          <p className="text-xs text-slate-400 mt-1">
            Historical trajectory of your statistical skill improvements and official achievements.
          </p>
        </div>

        <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-700 flex items-center">
          <ShieldCheck className="w-4 h-4 mr-1.5 text-teal-400" /> Transcript Status: Active & Syncing
        </span>
      </div>

      {/* Before / After Highlight Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-teal-500/50 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-teal-300 font-bold uppercase">Recent Skill Milestone</span>
          <h3 className="text-xl font-bold text-white font-serif">Sampling Techniques Proficiency Upgrade</h3>
          <p className="text-xs text-slate-300">
            Assessed baseline: <strong className="text-slate-400">58%</strong> → Post-Quiz score: <strong className="text-teal-300">67% (+9% Net Upgrade)</strong>
          </p>
        </div>

        <div className="px-6 py-3 rounded-2xl bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shrink-0">
          Rank Up: Level 3 Advanced
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Learning Hours", val: "14.5 hrs", icon: Clock, color: "text-blue-400" },
          { label: "Courses Completed", val: "8 Modules", icon: BookOpen, color: "text-teal-400" },
          { label: "Assessments Taken", val: "12 Quizzes", icon: Award, color: "text-purple-400" },
          { label: "Average Quiz Score", val: "84%", icon: TrendingUp, color: "text-emerald-400" }
        ].map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg text-center">
              <Icon className={`w-5 h-5 mx-auto mb-2 ${s.color}`} />
              <div className="text-xl font-extrabold text-white font-serif">{s.val}</div>
              <span className="text-[10px] text-slate-400 font-medium block mt-1">{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Growth Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white">Competency Growth Over Time</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 11 }} domain={[50, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '11px' }} />
              <Line type="monotone" dataKey="score" stroke="#0d9488" strokeWidth={3} dot={{ fill: '#0d9488', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white">Official Achievement Badges Unlocked</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Fast Learner", desc: "Completed 3 iGOT modules within 7 days", icon: Sparkles, color: "text-amber-400 bg-amber-950/60 border-amber-700" },
            { title: "Assessment Pro", desc: "Scored 84%+ across 5 consecutive AI quizzes", icon: Award, color: "text-teal-400 bg-teal-950/60 border-teal-700" },
            { title: "Skill Builder", desc: "Closed high-priority sampling gap by +9%", icon: TrendingUp, color: "text-indigo-400 bg-indigo-950/60 border-indigo-700" }
          ].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className={`p-4 rounded-2xl border ${badge.color} space-y-2`}>
                <Icon className="w-6 h-6" />
                <h4 className="text-xs font-bold text-white">{badge.title}</h4>
                <p className="text-[11px] text-slate-300">{badge.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
