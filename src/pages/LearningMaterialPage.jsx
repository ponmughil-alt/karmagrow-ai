import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Sparkles, BookOpen, MessageSquare, Award, PlayCircle, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function LearningMaterialPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('section-1');
  const [aiSummary, setAiSummary] = useState(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  const handleGenerateSummary = () => {
    setIsSummarizing(true);
    setTimeout(() => {
      setIsSummarizing(false);
      setAiSummary("AI Key Takeaways: (1) Stratified sampling is essential for reducing variance across heterogeneous states. (2) Sample frames must be updated every census cycle. (3) Design effect (Deff) measures precision loss vs SRS.");
    }, 1200);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 text-slate-100 font-sans">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">MoSPI Official Learning Document</span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white font-serif mt-1">Introduction to Sampling Techniques in Official Statistics</h1>
        </div>

        {/* AI Action Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={handleGenerateSummary}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-teal-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center space-x-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Summarize with AI</span>
          </button>

          <button
            onClick={() => navigate('/quiz-generator')}
            className="px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md flex items-center space-x-1"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Generate Quiz</span>
          </button>
        </div>
      </div>

      {/* Main Document Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Document Outline (3 cols) */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Document Outline</h3>
          
          <nav className="space-y-1 text-xs">
            {[
              { id: 'section-1', title: '1. Learning Objectives' },
              { id: 'section-2', title: '2. Probability Sampling Concepts' },
              { id: 'section-3', title: '3. Stratified Random Sampling' },
              { id: 'section-4', title: '4. Multi-stage NSS Field Design' },
              { id: 'section-5', title: '5. Non-Sampling Error Controls' }
            ].map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-all ${
                  activeSection === sec.id
                    ? 'bg-teal-950 text-teal-300 border border-teal-800 font-bold'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Document Stats</span>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>Source: MoSPI Training Manual 2026</p>
              <p>Est. Reading Time: 12 mins</p>
              <p>Target Skill: Sampling Techniques</p>
            </div>
          </div>
        </div>

        {/* Center Main Document Viewer (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* AI Summary Banner if generated */}
          {aiSummary && (
            <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-700/60 text-xs text-indigo-200 space-y-1">
              <div className="flex items-center space-x-1.5 font-bold text-teal-300">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Karma AI Executive Summary</span>
              </div>
              <p className="leading-relaxed">{aiSummary}</p>
            </div>
          )}

          {/* Reading Content */}
          <div className="space-y-4 text-slate-200 text-xs sm:text-sm leading-relaxed">
            
            <h2 className="text-lg font-bold text-white font-serif border-b border-slate-800 pb-2">
              1. Fundamental Principles of Survey Sampling Frame Selection
            </h2>

            <p>
              In official statistical operations conducted by the National Sample Survey Office (NSSO), selecting an accurate sample frame is the cornerstone of unbiased population estimation. Simple Random Sampling (SRS) often proves cost-inefficient across large geographic territories due to excessive enumerator travel expenses.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">Key Learning Objectives</h4>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-teal-400" /> Understand sample frames in national surveys (PLFS, HCES)</li>
                <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-teal-400" /> Differentiate stratified random sampling from cluster sampling</li>
                <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-teal-400" /> Calculate optimal allocation across urban and rural strata</li>
                <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-teal-400" /> Minimize non-sampling non-response errors in field schedules</li>
              </ul>
            </div>

            <h3 className="text-sm font-bold text-white mt-4 font-serif">
              2. Stratified Sampling Mechanics in Official Household Surveys
            </h3>

            <p>
              Stratification involves partitioning the entire population into non-overlapping subgroups called <strong>strata</strong> based on demographic or economic indicators (e.g. household monthly per capita expenditure). Independent simple random samples are then selected from each stratum.
            </p>

            <blockquote className="p-3 border-l-2 border-teal-400 bg-slate-950/60 text-slate-300 italic text-xs">
              "By grouping homogeneous units into strata, the variance of the overall population estimate is significantly lower than that of simple random sampling of identical size."
            </blockquote>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => navigate('/ai-assistant')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 hover:bg-slate-800 flex items-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
              <span>Ask AI Assistant About This Topic</span>
            </button>

            <button
              onClick={() => navigate('/quiz-generator')}
              className="px-5 py-2 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 flex items-center space-x-1"
            >
              <span>Test Me on This</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Embedded Mini AI Assistant (3 cols) */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <h3 className="text-xs font-bold text-white">Karma AI Quick Coach</h3>
            </div>

            <p className="text-[11px] text-slate-400 mb-3">Click a quick prompt to ask Karma AI about this document:</p>

            <div className="space-y-2 text-xs">
              {[
                "Explain stratified sampling simply",
                "What is Design Effect (Deff)?",
                "Give me a real NSS survey example"
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate('/ai-assistant')}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:border-teal-500/50 hover:text-white transition-all text-[11px]"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center space-y-2">
            <span className="text-[10px] text-slate-400 block font-medium">Ready for assessment?</span>
            <button
              onClick={() => navigate('/quiz-generator')}
              className="w-full py-2 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Generate AI Quiz (5 Questions)
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
