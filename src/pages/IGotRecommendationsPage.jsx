import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Sparkles, ExternalLink, ChevronDown, ChevronUp, Star, Users, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOCK_IGOT_COURSES } from '../services/mockData';

export default function IGotRecommendationsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [expandedCourse, setExpandedCourse] = useState('igot-101');

  const filteredCourses = MOCK_IGOT_COURSES.filter(c => {
    if (filter === 'High Priority') return c.priority === 'HIGH';
    if (filter === 'Recommended') return c.matchScore >= 90;
    return true;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-700 flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-blue-400" /> iGOT Karmayogi Catalog Synchronization
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">Recommended iGOT Learning</h1>
          <p className="text-xs text-slate-400 mt-1">
            Official capacity building modules matched by AI to your statistical competency profile.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl max-w-sm text-xs text-slate-400">
          <p className="text-[11px] font-medium leading-tight">
            <strong className="text-teal-300">Product Note:</strong> KarmaGrow AI acts as an AI competency intelligence layer complementing <strong>iGOT Karmayogi</strong>.
          </p>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {['All', 'High Priority', 'Recommended'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === tab
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Cards List */}
      <div className="space-y-6">
        {filteredCourses.map((course) => {
          const isExpanded = expandedCourse === course.id;

          return (
            <div
              key={course.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-teal-500/40 transition-all space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                      {course.matchScore}% Match
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{course.provider}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-serif">{course.title}</h3>
                  
                  <div className="flex items-center space-x-4 text-xs text-slate-400">
                    <span>Level: {course.level}</span>
                    <span>Duration: {course.duration}</span>
                    <span className="flex items-center"><Star className="w-3.5 h-3.5 text-amber-400 mr-1 fill-amber-400" /> {course.rating}</span>
                    <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> {course.enrolledCount} enrolled</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 hover:bg-slate-800 flex items-center space-x-1"
                  >
                    <span>Why this course?</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => navigate('/learning-material')}
                    className="px-5 py-2 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md flex items-center space-x-1"
                  >
                    <span>View Course</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Expandable "Why this course?" AI Explanation */}
              {isExpanded && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-300">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Karma AI Recommendation Rationale</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{course.whyRecommended}</p>
                  
                  <div className="pt-2 border-t border-slate-900">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Course Curriculum Highlights:</span>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((m, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          Module {idx + 1}: {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
