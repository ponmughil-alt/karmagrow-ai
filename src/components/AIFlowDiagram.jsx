import React, { useState } from 'react';
import { User, Database, BrainCircuit, Target, BookOpen, Award, CheckCircle, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

export default function AIFlowDiagram() {
  const [activeStep, setActiveStep] = useState(3);

  const steps = [
    {
      id: 1,
      title: "Employee Competency Profile",
      icon: User,
      color: "bg-blue-500",
      description: "Aggregates employee designation, department (e.g. Survey Operations), self-assessments, and prior training history.",
      output: "Raw Competency Signals"
    },
    {
      id: 2,
      title: "MoSPI Role Framework",
      icon: Database,
      color: "bg-indigo-500",
      description: "Maps government statistical standards (NQAF, PLFS, CPI protocols) and target proficiency requirements per designation.",
      output: "Standard Competency Matrix"
    },
    {
      id: 3,
      title: "AI Analysis Engine",
      icon: BrainCircuit,
      color: "bg-teal-500",
      description: "Uses multi-variate gap detection algorithms to pinpoint exact competency deficiencies and calculate AI Priority Scores.",
      output: "Sampling Techniques Gap = 32%"
    },
    {
      id: 4,
      title: "Personalized Roadmap Generator",
      icon: Target,
      color: "bg-amber-500",
      description: "Constructs 5-phase learning pathways tailored to employee schedule, current level, and urgency.",
      output: "Adaptive Phase 1 - 5 Path"
    },
    {
      id: 5,
      title: "iGOT Karmayogi Recommender",
      icon: BookOpen,
      color: "bg-emerald-500",
      description: "Filters 4.6K+ government learning modules using vector match scoring to recommend exact official courses.",
      output: "96% Match Course Recommendation"
    },
    {
      id: 6,
      title: "AI Quiz & Document Extractor",
      icon: Award,
      color: "bg-purple-500",
      description: "Generates custom MCQs from uploaded MoSPI statistical documents and administers adaptive assessments.",
      output: "Evaluated Performance & +9% Upgrade"
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <h3 className="text-lg font-bold text-slate-100">KarmaGrow AI Architecture & Processing Engine</h3>
          </div>
          <p className="text-xs text-slate-400">
            Interactive pipeline visualization detailing how employee competency gaps are dynamically analyzed and closed.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-700">
          SIH Prototype Architecture
        </span>
      </div>

      {/* Horizontal Flow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                isActive
                  ? 'bg-slate-800 border-teal-500 shadow-lg shadow-teal-500/10 scale-105'
                  : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">0{step.id}</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200 line-clamp-1">{step.title}</h4>
              <p className="text-[10px] text-teal-400 font-medium mt-1 truncate">{step.output}</p>
            </div>
          );
        })}
      </div>

      {/* Detailed View of Active Step */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <BrainCircuit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase text-teal-400 tracking-wider">
              Selected Pipeline Module #{steps[activeStep - 1].id}
            </span>
            <h4 className="text-sm font-bold text-white">{steps[activeStep - 1].title}</h4>
            <p className="text-xs text-slate-400 max-w-2xl mt-1">{steps[activeStep - 1].description}</p>
          </div>
        </div>

        <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 text-right">
          <span className="text-[10px] text-slate-500 block font-medium">Pipeline Output Signal</span>
          <span className="text-xs font-bold text-teal-300">{steps[activeStep - 1].output}</span>
        </div>
      </div>
    </div>
  );
}
