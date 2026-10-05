import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { analyzeAudienceDataset } from '../services/mlEngine';

export default function AnalysisProgress({ dataset, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Loading viewer dataset & activity logs",
    "Validating numerical telemetry bounds & user records",
    "Extracting 5 key behavioral features",
    "Applying StandardScaler Z-score normalization",
    "Evaluating Silhouette score across candidate K values (2..6)",
    "Executing K-Means clustering algorithm & centroid convergence",
    "Profiling discovered audience segments & generating personalized rules"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            const results = analyzeAudienceDataset(dataset);
            onComplete(results);
          }, 800);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(timer);
  }, [dataset, onComplete, steps.length]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4 bg-[#F5F0E6]">
      <div className="card-cinesense p-8 sm:p-12 max-w-xl w-full bg-[#FCFAF5] shadow-2xl text-center">
        
        {/* Animated Icon Header */}
        <div className="w-16 h-16 rounded-full bg-[#193D32] text-[#C9A85C] flex items-center justify-center mx-auto mb-6 shadow-md animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>

        <h2 className="font-serif text-3xl font-bold text-[#3A2925] mb-2">
          Understanding Your Audience...
        </h2>
        <p className="text-xs text-[#3A2925]/70 mb-8 font-sans">
          CineSense AI is running unsupervised feature extraction & clustering on your dataset.
        </p>

        {/* Progress Step List */}
        <div className="space-y-4 text-left border-t border-b border-[#3A2925]/10 py-6 mb-8">
          {steps.map((stepText, idx) => {
            const isDone = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div key={idx} className="flex items-center gap-3">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-[#193D32] shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-5 h-5 text-[#C9A85C] animate-spin shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-[#3A2925]/20 shrink-0"></div>
                )}

                <span
                  className={`text-xs font-sans transition-colors ${
                    isDone
                      ? 'text-[#193D32] font-semibold'
                      : isCurrent
                      ? 'text-[#3A2925] font-bold'
                      : 'text-[#3A2925]/40'
                  }`}
                >
                  {stepText}
                </span>
              </div>
            );
          })}
        </div>

        {/* Status indicator footer */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDE7D8]/60 text-[#193D32] text-xs font-bold rounded-full">
          <span>5 Behavioral Groups Discovered Automatically</span>
        </div>

      </div>
    </div>
  );
}
