import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, User, ArrowRight, X } from 'lucide-react';
import { MOCK_ADMIN_EMPLOYEES } from '../services/mockData';

export default function AdminEmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedEmp, setSelectedEmp] = useState(null);

  const filteredEmployees = MOCK_ADMIN_EMPLOYEES.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || emp.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">MoSPI Workforce Directory</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-1">Employee Competency Directory</h1>
          <p className="text-xs text-slate-400 mt-1">
            Search and inspect individual workforce competency profiles across official departments.
          </p>
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search employee name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs text-white rounded-xl px-3 py-2"
          >
            <option value="All">All Departments</option>
            <option value="Statistical Operations">Statistical Operations</option>
            <option value="Survey Operations">Survey Operations</option>
            <option value="Economic Statistics">Economic Statistics</option>
            <option value="Data Processing">Data Processing</option>
          </select>
        </div>
      </div>

      {/* Employee Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800">
              <tr>
                <th className="p-4">Employee ID</th>
                <th className="p-4">Name & Designation</th>
                <th className="p-4">Department</th>
                <th className="p-4">Competency Index</th>
                <th className="p-4">Top Skill Gap</th>
                <th className="p-4">Learning Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-teal-400">{emp.id}</td>
                  <td className="p-4">
                    <span className="font-bold text-white block">{emp.name}</span>
                    <span className="text-[10px] text-slate-400">{emp.role}</span>
                  </td>
                  <td className="p-4 text-slate-300">{emp.department}</td>
                  <td className="p-4 font-bold text-teal-300">{emp.competencyScore}%</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold">
                      {emp.topGap}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">{emp.learningStatus}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedEmp(emp)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-slate-950 border border-slate-800 hover:border-indigo-500/50"
                    >
                      Inspect Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Employee Detail Modal */}
      {selectedEmp && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 text-white relative">
            <button onClick={() => setSelectedEmp(null)} className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400">
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-300">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">{selectedEmp.name}</h3>
                <p className="text-xs text-slate-400">{selectedEmp.role} • {selectedEmp.department}</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-400">Overall Competency:</span><span className="font-bold text-teal-400">{selectedEmp.competencyScore}%</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Primary Gap:</span><span className="font-bold text-rose-400">{selectedEmp.topGap}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Status:</span><span className="text-indigo-300">{selectedEmp.learningStatus}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Last Active:</span><span>{selectedEmp.lastActive}</span></div>
            </div>

            <button
              onClick={() => setSelectedEmp(null)}
              className="w-full py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Close Employee Inspection
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
