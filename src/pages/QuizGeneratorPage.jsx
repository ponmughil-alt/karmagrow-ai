import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Award, CheckCircle2, Loader2, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function QuizGeneratorPage() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('Sampling Techniques');
  const [difficulty, setDifficulty] = useState('Medium');
  const [questionCount, setQuestionCount] = useState(5);
  const [questionType, setQuestionType] = useState('MCQ');
  const [source, setSource] = useState('MoSPI Official Training Manual 2026');

  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [genStep, setGenStep] = useState(0);

  const steps = [
    "Reading MoSPI source document...",
    "Extracting statistical concepts & equations...",
    "Identifying core learning objectives...",
    "Formulating 5 adaptive MCQs...",
    "Validating answer keys & explanations..."
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setGenStep(0);

    const interval = setInterval(() => {
      setGenStep(prev => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setGenerated(true);
        }, 500);
        return prev;
      });
    }, 400);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-700 flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-teal-400" /> MoSPI AI Question Extractor
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">AI Assessment Generator</h1>
        <p className="text-xs text-slate-400 mt-1">
          Automatically synthesize adaptive MCQs from uploaded MoSPI statistical manuals and guidelines.
        </p>
      </div>

      {!generated && !isGenerating && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Target Competency Topic</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              >
                <option value="Sampling Techniques">Sampling Techniques (High Priority Gap)</option>
                <option value="Data Visualization">Data Visualization</option>
                <option value="Statistical Analysis">Statistical Analysis</option>
                <option value="Data Quality">Data Quality & Governance</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Source Document Material</label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              >
                <option value="MoSPI Official Training Manual 2026">MoSPI Official Training Manual 2026</option>
                <option value="NSSO PLFS Survey Field Manual">NSSO PLFS Survey Field Manual</option>
                <option value="NQAF Compliance Guidelines">NQAF Compliance Guidelines</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                {['Easy', 'Medium', 'Hard'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDifficulty(d)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      difficulty === d
                        ? 'bg-teal-500 text-slate-950 border-teal-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Number of Questions</label>
              <div className="grid grid-cols-3 gap-2">
                {[5, 10, 20].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuestionCount(num)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      questionCount === num
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {num} Qs
                  </button>
                ))}
              </div>
            </div>

          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 hover:opacity-90 shadow-xl shadow-teal-500/20 flex items-center justify-center space-x-2 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Assessment Now</span>
          </button>
        </div>
      )}

      {/* AI Processing Animation */}
      {isGenerating && (
        <div className="bg-slate-900 border border-teal-500/50 rounded-3xl p-10 text-center space-y-6 shadow-2xl">
          <Loader2 className="w-10 h-10 text-teal-400 animate-spin mx-auto" />
          <h3 className="text-lg font-bold text-white font-serif">Synthesizing Adaptive Assessment...</h3>
          <p className="text-xs text-teal-300 font-mono">{steps[genStep]}</p>

          <div className="max-w-md mx-auto space-y-2">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl text-xs flex items-center justify-between border ${
                  idx <= genStep ? 'bg-slate-950 border-teal-800 text-teal-300' : 'bg-slate-950/40 border-slate-800 text-slate-600'
                }`}
              >
                <span>{st}</span>
                {idx <= genStep && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assessment Generated Summary Card */}
      {generated && (
        <div className="bg-slate-900 border border-teal-500/60 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-teal-950 border-2 border-teal-400 flex items-center justify-center mx-auto text-teal-400 shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-serif">Assessment Generated Successfully!</h2>
            <p className="text-xs text-slate-300 mt-1">Target Topic: <strong className="text-teal-300">{topic}</strong></p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div>
              <span className="text-[10px] text-slate-400 block">Total Qs</span>
              <span className="text-lg font-bold text-white">5 MCQs</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Est. Time</span>
              <span className="text-lg font-bold text-teal-400">10 mins</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Difficulty</span>
              <span className="text-lg font-bold text-amber-400">{difficulty}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/quiz')}
            className="w-full max-w-md mx-auto py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-xl flex items-center justify-center space-x-2 transition-all"
          >
            <span>Start Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
