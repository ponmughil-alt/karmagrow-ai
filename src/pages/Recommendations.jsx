import React, { useState } from 'react';
import { SAMPLE_RECOMMENDATIONS_CATALOG } from '../services/sampleData';
import { Sparkles, Award, Film, Info, Filter } from 'lucide-react';

export default function Recommendations() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filteredRecs = selectedFilter === 'ALL'
    ? SAMPLE_RECOMMENDATIONS_CATALOG
    : SAMPLE_RECOMMENDATIONS_CATALOG.filter(r => r.targetSegment.toUpperCase().includes(selectedFilter));

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#3A2925]/10">
          <div>
            <span className="badge-category mb-3">AI CONTENT PERSONALIZATION</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2">
              Personalized Recommendations
            </h1>
            <p className="font-sans text-base text-[#3A2925]/80 mt-2 max-w-xl">
              Transparent, rule-anchored content recommendations tailored dynamically to discovered behavioral segment profiles.
            </p>
          </div>

          {/* Segment Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {['ALL', 'BINGE', 'CASUAL', 'EXPLORERS', 'REGULARS', 'NIGHT'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  selectedFilter === filter
                    ? 'bg-[#193D32] text-[#FCFAF5]'
                    : 'bg-[#FCFAF5] text-[#3A2925]/70 hover:text-[#3A2925] border border-[#3A2925]/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecs.map((rec) => (
            <div key={rec.id} className="card-cinesense p-6 bg-[#FCFAF5] flex flex-col justify-between group hover:border-[#C9A85C]">
              <div>
                {/* Visual Header Box */}
                <div
                  className="w-full h-36 rounded-xl mb-4 p-4 flex flex-col justify-between text-white relative overflow-hidden shadow-inner"
                  style={{ background: rec.imageBg }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[#C9A85C]">
                      {rec.tag}
                    </span>
                    <span className="text-xs font-bold bg-[#C9A85C] text-[#3A2925] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {rec.matchScore}% Match
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] opacity-80 uppercase tracking-widest">{rec.category}</span>
                    <h3 className="font-serif text-xl font-bold leading-tight">{rec.title}</h3>
                  </div>
                </div>

                {/* Target Segment */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-[#3A2925]/60 font-semibold">TARGET SEGMENT:</span>
                  <span className="font-bold text-[#193D32] bg-[#DDE7D8] px-2 py-0.5 rounded">
                    {rec.targetSegment}
                  </span>
                </div>

                {/* Reason Explanation */}
                <div className="p-3 bg-[#F5F0E6] rounded-xl text-xs text-[#3A2925]/85 mb-4 border border-[#3A2925]/5 leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold text-[#193D32] mb-1">
                    <Info className="w-3.5 h-3.5 text-[#C9A85C]" />
                    <span>WHY RECOMMENDED:</span>
                  </div>
                  “{rec.reason}”
                </div>
              </div>

              <div className="pt-3 border-t border-[#3A2925]/10 flex items-center justify-between text-xs">
                <span className="text-[#3A2925]/60">{rec.duration}</span>
                <button className="btn-primary text-xs py-2 px-4">
                  STREAM TITLE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
