import React from 'react';
import { Sparkles, Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <span className="font-extrabold text-lg text-white font-serif">KarmaGrow <span className="text-teal-400">AI</span></span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            AI-enabled competency gap detection and personalized learning platform for India's Official Statistical System. Integrated with iGOT Karmayogi.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Core Platform</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="/gap-analysis" className="hover:text-teal-400 transition-colors">AI Gap Detection</a></li>
            <li><a href="/learning-path" className="hover:text-teal-400 transition-colors">Personalized Path</a></li>
            <li><a href="/igot-recommendations" className="hover:text-teal-400 transition-colors">iGOT Integration</a></li>
            <li><a href="/quiz-generator" className="hover:text-teal-400 transition-colors">AI Quiz Generator</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Statistical Ecosystem</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="https://mospi.gov.in" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors flex items-center">MoSPI Official <ExternalLink className="w-3 h-3 ml-1" /></a></li>
            <li><a href="https://igotkarmayogi.gov.in" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors flex items-center">iGOT Karmayogi Portal <ExternalLink className="w-3 h-3 ml-1" /></a></li>
            <li><a href="/ai-flow" className="hover:text-teal-400 transition-colors">SIH Architecture Map</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Product Positioning</h4>
          <p className="text-xs text-slate-400 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
            KarmaGrow AI acts as an intelligent competency intelligence layer supporting India's public capacity building mission under Mission Karmayogi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 KarmaGrow AI — Smart India Hackathon (SIH) Prototype.</p>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <span className="flex items-center"><Shield className="w-3.5 h-3.5 mr-1 text-teal-400" /> MoSPI Capacity Building Framework</span>
        </div>
      </div>
    </footer>
  );
}
