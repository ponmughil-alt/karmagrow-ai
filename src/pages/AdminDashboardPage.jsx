import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Award, AlertTriangle, TrendingUp, BarChart3, Upload, ArrowRight, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { MOCK_ADMIN_STATS } from '../services/mockData';

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">MoSPI Executive Oversight</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-1">Admin Dashboard & Workforce Capability</h1>
          <p className="text-xs text-slate-400 mt-1">
            Nationwide competency metrics across Ministry of Statistics & Programme Implementation personnel.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={() => navigate('/admin/analytics')}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-md flex items-center space-x-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span>View Workforce Intelligence</span>
          </button>
        </div>
      </div>

      {/* 4 Admin Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total MoSPI Personnel", val: MOCK_ADMIN_STATS.totalEmployees.toLocaleString(), sub: "Registered Workforce", icon: Users, color: "text-blue-400" },
          { label: "Active Learners", val: MOCK_ADMIN_STATS.activeLearners.toLocaleString(), sub: "84.3% Active Rate", icon: BookOpen, color: "text-teal-400" },
          { label: "Average Competency", val: `${MOCK_ADMIN_STATS.averageCompetency}%`, sub: "Target: 85%", icon: TrendingUp, color: "text-emerald-400" },
          { label: "High Priority Gaps", val: MOCK_ADMIN_STATS.highPriorityGaps.toString(), sub: "Requires Training Intervention", icon: AlertTriangle, color: "text-rose-400" }
        ].map((c, idx) => {
          const Icon = c.icon;
          return (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-3xl shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{c.label}</span>
                <Icon className={`w-4 h-4 ${c.color}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-serif">{c.val}</div>
              <span className="text-[10px] text-slate-500 block">{c.sub}</span>
            </div>
          );
        })}
      </div>

      {/* Department Competency & Gap Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Department Average Competency Chart (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white">Department Average Competency Index</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_ADMIN_STATS.departmentBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 10 }} domain={[50, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '11px' }} />
                <Bar dataKey="avgScore" name="Avg Score %" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Organizational Competency Gaps (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white">Top Skill Deficiencies Across Workforce</h3>
            <button onClick={() => navigate('/admin/analytics')} className="text-xs text-indigo-400 hover:underline">View Analytics</button>
          </div>

          <div className="space-y-3">
            {MOCK_ADMIN_STATS.gapDistribution.map((g, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{g.name}</span>
                  <span className="text-rose-400 font-bold">{g.gapPercentage}% Personnel Affected</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: `${g.gapPercentage}%` }}></div>
                </div>
                <span className="text-[10px] text-slate-500 block">{g.affectedCount} Employees Need Training</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
