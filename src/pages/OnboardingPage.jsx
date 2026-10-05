import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, BookOpen, Star, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { MOCK_USER } from '../services/mockData';

export default function OnboardingPage({ onLogin }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: 'Ponmughil R',
    employeeId: 'STAT-2026-1042',
    department: 'Statistical Operations',
    designation: 'Senior Statistical Analyst',
    experienceYears: '4',
    primaryRole: 'Survey Data Analysis & Quality Verification',
    expertise: ['Sampling Design', 'Data Validation', 'NSS Field Surveys'],
    learningPrefs: ['Video', 'Quiz', 'Hands-on Practice'],
    ratings: {
      'Sampling Techniques': 3,
      'Data Visualization': 4,
      'Statistical Analysis': 4,
      'Data Quality': 4,
      'Survey Methodology': 3,
      'Economic Indicators': 4
    }
  });

  const handleRatingChange = (comp, value) => {
    setFormData(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [comp]: value }
    }));
  };

  const handleFinishOnboarding = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onLogin({
        ...MOCK_USER,
        name: formData.name,
        department: formData.department,
        designation: formData.designation
      });
      navigate('/dashboard');
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 sm:p-6 font-sans">
      
      {/* Onboarding Container Card */}
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Step Progress Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider">MoSPI Employee Onboarding</span>
            <h2 className="text-2xl font-bold text-white font-serif">Competency Profile Creation</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            Step {step} of 4
          </span>
        </div>

        {/* Wizard Steps Bar */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 1, label: 'Personal', icon: User },
            { id: 2, label: 'Professional', icon: Briefcase },
            { id: 3, label: 'Preferences', icon: BookOpen },
            { id: 4, label: 'Self Assessment', icon: Star }
          ].map((s) => {
            const Icon = s.icon;
            const isDone = step > s.id;
            const isCurrent = step === s.id;
            return (
              <div
                key={s.id}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isCurrent
                    ? 'bg-slate-800 border-teal-500 text-teal-300'
                    : isDone
                    ? 'bg-slate-950/80 border-slate-700 text-slate-400'
                    : 'bg-slate-950/40 border-slate-800 text-slate-600'
                }`}
              >
                <Icon className="w-4 h-4 mx-auto mb-1" />
                <span className="text-[10px] font-bold block">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Employee ID</label>
                <input
                  type="text"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Department</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                >
                  <option value="Statistical Operations">Statistical Operations</option>
                  <option value="Survey Operations">Survey Operations</option>
                  <option value="Economic Statistics">Economic Statistics</option>
                  <option value="Social Statistics">Social Statistics</option>
                  <option value="Data Processing">Data Processing</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Designation</label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Years of Experience</label>
                <input
                  type="number"
                  value={formData.experienceYears}
                  onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Professional Info */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Professional Role & Expertise</h3>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Primary Role Responsibilities</label>
              <textarea
                value={formData.primaryRole}
                onChange={(e) => setFormData({ ...formData, primaryRole: e.target.value })}
                rows={3}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-2">Areas of Expertise</label>
              <div className="flex flex-wrap gap-2">
                {['Sampling Design', 'Data Validation', 'NSS Field Surveys', 'Time Series CPI', 'Questionnaire Pre-testing'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-slate-800 text-teal-300 text-xs font-semibold border border-slate-700">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Learning Preferences */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Preferred Learning Formats</h3>
            <p className="text-xs text-slate-400">Karma AI adapts course recommendations based on your learning style.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'Video Modules', desc: 'Recorded lecture series' },
                { name: 'Interactive Quizzes', desc: 'Adaptive MCQs & practice' },
                { name: 'Official Guidelines', desc: 'PDF documentation & standards' },
                { name: 'Hands-on Practice', desc: 'Dataset exercises & R code' },
                { name: 'Micro Learning', desc: '10-min daily bite-size topics' },
                { name: 'iGOT Certified Paths', desc: 'Formal government certification' }
              ].map((pref, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-teal-500/40 text-left">
                  <span className="text-xs font-bold text-white block">{pref.name}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{pref.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Initial Self Assessment */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Initial Skill Self-Rating (1 to 5)</h3>
            <p className="text-xs text-slate-400">Rate your current proficiency across key official statistical domains.</p>

            <div className="space-y-3">
              {Object.keys(formData.ratings).map((comp) => (
                <div key={comp} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">{comp}</span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(comp, star)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          formData.ratings[comp] >= star
                            ? 'bg-teal-500 text-slate-950 shadow-md'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {star}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Processing State Animation */}
        {isProcessing && (
          <div className="p-6 bg-slate-950 rounded-2xl border border-teal-500/50 text-center space-y-3">
            <Loader2 className="w-8 h-8 text-teal-400 animate-spin mx-auto" />
            <h4 className="text-sm font-bold text-white">Generating Your AI Competency Profile...</h4>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>✓ Analyzing MoSPI designation standards</p>
              <p>✓ Calculating baseline competency index (72%)</p>
              <p>✓ Identifying top priority skill gap (Sampling Techniques)</p>
            </div>
          </div>
        )}

        {/* Bottom Wizard Controls */}
        {!isProcessing && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setStep(prev => Math.max(1, prev - 1))}
              disabled={step === 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 flex items-center space-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(prev => Math.min(4, prev + 1))}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 flex items-center space-x-1 shadow-md"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinishOnboarding}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 hover:opacity-90 flex items-center space-x-2 shadow-lg shadow-teal-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate My Competency Profile</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
