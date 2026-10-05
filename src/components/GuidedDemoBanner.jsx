import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Play, ChevronRight, ChevronLeft, Sparkles, X, RotateCcw, CheckCircle2 } from 'lucide-react';

export const DEMO_STEPS = [
  { step: 1, title: 'Landing Page', path: '/', description: 'SIH Project Overview & iGOT Integration' },
  { step: 2, title: 'Login Page', path: '/login', description: 'Split-screen Login with Demo Accounts' },
  { step: 3, title: 'Employee Onboarding', path: '/onboarding', description: 'Multi-step Initial Self-Assessment' },
  { step: 4, title: 'Employee Dashboard', path: '/dashboard', description: 'Competency Radar & Skill Gaps Overview' },
  { step: 5, title: 'AI Gap Analysis', path: '/gap-analysis', description: 'AI Gap Scanner & Priority Score (Sampling: 32%)' },
  { step: 6, title: 'Personalized Roadmap', path: '/learning-path', description: '5-Phase Adaptive Pathway Roadmap' },
  { step: 7, title: 'iGOT Recommendations', path: '/igot-recommendations', description: 'AI-Matched iGOT Karmayogi Courses' },
  { step: 8, title: 'Learning Material Viewer', path: '/learning-material', description: 'Interactive Document & AI Assistant' },
  { step: 9, title: 'AI Quiz Generator', path: '/quiz-generator', description: 'Instant Question Extraction from Documents' },
  { step: 10, title: 'Interactive Quiz', path: '/quiz', description: 'Timed Adaptive Exam Interface' },
  { step: 11, title: 'Quiz Results', path: '/quiz-results', description: '84% Score & Live Impact (58% → 67%)' },
  { step: 12, title: 'Competency Progress', path: '/progress', description: 'Before/After Growth & Badges' },
  { step: 13, title: 'Admin Analytics', path: '/admin/analytics', description: 'Workforce Intelligence & Intervention' }
];

export default function GuidedDemoBanner({ onResetState }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const currentStepIndex = DEMO_STEPS.findIndex(s => s.path === location.pathname);
  const currentStep = currentStepIndex >= 0 ? DEMO_STEPS[currentStepIndex] : null;

  const handleNext = () => {
    if (currentStepIndex >= 0 && currentStepIndex < DEMO_STEPS.length - 1) {
      navigate(DEMO_STEPS[currentStepIndex + 1].path);
    } else {
      navigate(DEMO_STEPS[0].path);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      navigate(DEMO_STEPS[currentStepIndex - 1].path);
    }
  };

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-amber-500 to-indigo-600 text-white p-3 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center space-x-2 border-2 border-white/20"
        title="Open SIH Guided Demo Controller"
      >
        <Sparkles className="w-5 h-5 animate-spin text-amber-200" />
        <span className="text-xs font-bold pr-1">SIH Demo Controller</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-[480px] z-50 bg-slate-900/95 backdrop-blur-md border border-amber-500/40 rounded-2xl shadow-2xl p-4 text-white">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-extrabold uppercase tracking-wider flex items-center">
            <Sparkles className="w-3 h-3 mr-1 text-amber-400" /> SIH Demo Mode
          </div>
          <span className="text-xs text-slate-400">
            Step {currentStepIndex >= 0 ? currentStepIndex + 1 : 1} of {DEMO_STEPS.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {onResetState && (
            <button
              onClick={onResetState}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              title="Reset Demo State"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            title="Minimize"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Current Step Title & Action */}
      <div className="py-2.5 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-bold text-amber-300">
            {currentStep ? currentStep.title : 'KarmaGrow AI Prototype'}
          </h4>
          <p className="text-[11px] text-slate-300 line-clamp-1">
            {currentStep ? currentStep.description : 'Use Guided Demo to navigate SIH presentation flow'}
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex <= 0}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-xs font-bold shadow-md transition-transform active:scale-95 text-white"
          >
            <span>Next Step</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Jump Selector */}
      <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
        <label className="text-[10px] text-slate-400 font-medium">Jump to Flow Step:</label>
        <select
          value={currentStepIndex >= 0 ? currentStepIndex : 0}
          onChange={(e) => navigate(DEMO_STEPS[Number(e.target.value)].path)}
          className="bg-slate-800 border border-slate-700 text-[11px] text-slate-200 rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 max-w-[280px]"
        >
          {DEMO_STEPS.map((s, idx) => (
            <option key={s.path} value={idx}>
              {s.step}. {s.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
