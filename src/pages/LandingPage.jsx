import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Target,
  Award,
  TrendingUp,
  CheckCircle2,
  BookOpen,
  Database,
  Layers,
  Zap,
  Activity,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Footer from '../components/Footer';
import AIFlowDiagram from '../components/AIFlowDiagram';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Banner Notice for SIH */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 border-b border-indigo-700/50 py-2 px-4 text-center text-xs text-indigo-200 flex items-center justify-center space-x-2">
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span className="font-semibold text-white">Smart India Hackathon (SIH) Prototype:</span>
        <span>KarmaGrow AI — Intelligent Competency Gap Detection & Learning Platform for MoSPI / iGOT Karmayogi</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-teal-400 text-xs font-semibold shadow-inner">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>MoSPI Capacity Building & iGOT Integration Layer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-serif leading-tight">
              Empowering Employees Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400">AI-Driven Competency Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Identify competency gaps, discover personalized learning pathways, and continuously improve workforce capabilities across India's Official Statistical System.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/25 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/dashboard"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:text-white flex items-center justify-center space-x-2 transition-all"
              >
                <span>Explore Interactive Prototype</span>
              </Link>
            </div>
          </div>

          {/* Hero Visual Mockup Diagram Flow */}
          <div className="mt-16 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-bold text-slate-400 ml-2">KarmaGrow AI Competency Pipeline Engine</span>
              </div>
              <span className="text-xs font-mono text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-800">iGOT Synchronized</span>
            </div>

            {/* Step Pipeline Flow */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
              {[
                { step: "01", label: "Employee", sub: "Designation & Role", icon: Building2, color: "text-blue-400" },
                { step: "02", label: "AI Analysis", sub: "Gap Detection Engine", icon: BrainCircuit, color: "text-teal-400" },
                { step: "03", label: "Skill Gap", sub: "Priority Scoring (32%)", icon: Target, color: "text-amber-400" },
                { step: "04", label: "Learning Rec", sub: "iGOT Karmayogi Match", icon: BookOpen, color: "text-emerald-400" },
                { step: "05", label: "Assessment", sub: "AI Quiz Generator", icon: Award, color: "text-indigo-400" },
                { step: "06", label: "Improvement", sub: "Verified Competency", icon: TrendingUp, color: "text-purple-400" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative group p-4 bg-slate-950/80 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all">
                    <div className="text-[10px] font-mono font-bold text-slate-500 mb-1">{item.step}</div>
                    <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h4 className="text-xs font-bold text-slate-100">{item.label}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section A: Why KarmaGrow AI? */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white font-serif">Why KarmaGrow AI?</h2>
            <p className="text-sm text-slate-400 mt-2">
              Transforming traditional training assignment into an intelligent, data-driven workforce development ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Powered Gap Detection",
                desc: "Automatically compares role standards (e.g. Sampling in NSSO) against real employee performance to detect exact gap percentages.",
                icon: BrainCircuit,
                color: "from-blue-500/20 to-teal-500/20 border-teal-500/30"
              },
              {
                title: "Personalized Learning",
                desc: "Generates custom 5-phase learning roadmaps tailored to employee designation, schedule, and urgency.",
                icon: Target,
                color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30"
              },
              {
                title: "Intelligent Assessments",
                desc: "Converts MoSPI guidelines, PDF manuals, and training materials into adaptive AI MCQs for real-time validation.",
                icon: Award,
                color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30"
              },
              {
                title: "Continuous Tracking",
                desc: "Updates competency transcripts automatically post-assessment, reflecting real skill upgrades (58% → 67%).",
                icon: TrendingUp,
                color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30"
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-b ${card.color} border bg-slate-950/70 hover:scale-105 transition-all shadow-lg`}>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section B: How It Works */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white font-serif">How It Works</h2>
            <p className="text-sm text-slate-400 mt-2">A 5-step continuous learning loop built for government workforce scaling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { num: "01", step: "Assess", title: "Self & Manager Rating", desc: "Initial competency self-assessment across statistical domains." },
              { num: "02", step: "Detect", title: "AI Priority Analysis", desc: "AI calculates priority scores and pinpoints high-impact skill gaps." },
              { num: "03", step: "Learn", title: "iGOT Path Execution", desc: "Follow personalized roadmap matched with official iGOT courses." },
              { num: "04", step: "Test", title: "Adaptive Quiz", desc: "Take AI-generated quizzes derived from MoSPI manuals." },
              { num: "05", step: "Improve", title: "Competency Upgrade", desc: "Verified score update and official transcript certification." }
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 relative">
                <span className="text-2xl font-black font-mono text-teal-400/40 block mb-2">{s.num}</span>
                <span className="inline-block px-2 py-0.5 rounded bg-teal-950 text-teal-300 text-[10px] font-bold uppercase mb-2">
                  {s.step}
                </span>
                <h4 className="text-xs font-bold text-white mb-1">{s.title}</h4>
                <p className="text-[11px] text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Integration Ecosystem */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white font-serif">Integration Ecosystem</h2>
            <p className="text-sm text-slate-400 mt-2">
              KarmaGrow AI acts as an intelligent personalization and analytics layer complementing existing public learning platforms like <strong>iGOT Karmayogi</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "KarmaGrow AI", tag: "Intelligence Engine", desc: "Gap detection, adaptive pathing, and quiz generation." },
              { title: "iGOT Karmayogi", tag: "Course Repository", desc: "Official capacity building courses and government certifications." },
              { title: "MoSPI Data Framework", tag: "Domain Competency", desc: "Official statistical frameworks (PLFS, CPI, NQAF)." },
              { title: "Employee Analytics", tag: "Workforce Oversight", desc: "Admin dashboards tracking organizational capability gaps." }
            ].map((box, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all">
                <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold block mb-1">{box.tag}</span>
                <h3 className="text-base font-bold text-white mb-2">{box.title}</h3>
                <p className="text-xs text-slate-400">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive AI Architecture Diagram Component */}
          <div className="mt-12">
            <AIFlowDiagram />
          </div>
        </div>
      </section>

      {/* Section D: Impact Statistics */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { metric: "32%", label: "Faster Skill Development", sub: "Compared to manual course selection" },
              { metric: "78%", label: "Recommendation Accuracy", sub: "AI matched to role requirements" },
              { metric: "4.6K+", label: "iGOT Resources Mapped", sub: "Indexed across statistical modules" },
              { metric: "92%", label: "Assessment Engagement", sub: "Through adaptive AI quizzes" }
            ].map((m, idx) => (
              <div key={idx} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 font-serif mb-1">
                  {m.metric}
                </div>
                <div className="text-xs font-bold text-white mb-1">{m.label}</div>
                <div className="text-[10px] text-slate-400">{m.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-center text-slate-500 mt-4">* Prototype demo benchmarks based on MoSPI survey operations scenario.</p>
        </div>
      </section>

      {/* Section E: Final CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-serif">Start Your Competency Journey Today</h2>
          <p className="text-sm text-slate-300">
            Experience how KarmaGrow AI transforms competency development for India's Official Statistical System.
          </p>
          <div className="pt-2">
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-xl shadow-teal-500/20 transition-all"
            >
              <span>Launch Demo Platform</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
