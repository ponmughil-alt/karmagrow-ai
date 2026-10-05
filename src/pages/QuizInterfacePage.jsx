import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Award, CheckCircle2, ChevronLeft, ChevronRight, AlertCircle, X } from 'lucide-react';
import { MOCK_QUIZ_QUESTIONS } from '../services/mockData';

export default function QuizInterfacePage({ onQuizSubmit }) {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({ 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 }); // Pre-selected for smooth demo
  const [timeLeft, setTimeLeft] = useState(522); // 8m 42s
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const currentQ = MOCK_QUIZ_QUESTIONS[currentIdx];

  const handleSubmit = () => {
    const results = {
      score: 84,
      correctCount: 4,
      totalCount: 5,
      timeSpent: '07:34',
      topic: 'Sampling Techniques',
      beforeScore: 58,
      afterScore: 67
    };
    if (onQuizSubmit) onQuizSubmit(results);
    navigate('/quiz-results');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 text-slate-100 font-sans max-w-5xl mx-auto">
      
      {/* Top Exam Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
            MoSPI Adaptive Evaluation
          </span>
          <h1 className="text-lg font-bold text-white font-serif mt-1">Sampling Techniques — Adaptive Quiz</h1>
        </div>

        {/* Timer & Question Progress */}
        <div className="flex items-center space-x-4 shrink-0">
          <div className="flex items-center space-x-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-teal-400 font-mono text-sm font-bold">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md"
          >
            Submit Assessment
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Question {currentIdx + 1} of {MOCK_QUIZ_QUESTIONS.length}</span>
          <span>{Math.round(((currentIdx + 1) / MOCK_QUIZ_QUESTIONS.length) * 100)}% Progress</span>
        </div>
        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full"
            style={{ width: `${((currentIdx + 1) / MOCK_QUIZ_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Question Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Question & Options Area (9 cols) */}
        <div className="lg:col-span-9 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div>
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">Question #{currentQ.id}</span>
            <h2 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIdx] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-4 rounded-2xl border text-xs font-semibold transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-teal-950/80 border-teal-400 text-teal-200 shadow-lg shadow-teal-500/10'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentIdx < MOCK_QUIZ_QUESTIONS.length - 1 ? (
              <button
                onClick={() => setCurrentIdx(prev => prev + 1)}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md flex items-center space-x-1"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmModal(true)}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-indigo-400 hover:opacity-90 shadow-lg"
              >
                Complete & Submit
              </button>
            )}
          </div>

        </div>

        {/* Side Question Navigation Matrix (3 cols) */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Question Matrix</h3>
          
          <div className="grid grid-cols-5 gap-2">
            {MOCK_QUIZ_QUESTIONS.map((q, idx) => {
              const isAnswered = selectedAnswers[idx] !== undefined;
              const isCurrent = currentIdx === idx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-teal-400 text-slate-950 border-2 border-white shadow-md'
                      : isAnswered
                      ? 'bg-slate-950 border border-teal-800 text-teal-400'
                      : 'bg-slate-950 border border-slate-800 text-slate-600'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-400 space-y-1">
            <p className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-400 mr-2"></span> Answered ({Object.keys(selectedAnswers).length})</p>
            <p className="flex items-center"><span className="w-2 h-2 rounded-full bg-slate-800 mr-2"></span> Unanswered (0)</p>
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 text-white text-center">
            <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold font-serif">Submit Assessment Now?</h3>
            <p className="text-xs text-slate-300">
              You have answered 5 of 5 questions. Submitting will evaluate your competency score update.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
              >
                Review Answers
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md"
              >
                Confirm Submission
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
