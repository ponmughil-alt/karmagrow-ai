import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_SAMPLE_VIEWERS, SAMPLE_RECOMMENDATIONS_CATALOG } from '../services/sampleData';
import { analyzeAudienceDataset } from '../services/mlEngine';
import { User, Clock, Film, Award, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';

export default function ViewerProfile({ analysisResults }) {
  const { id } = useParams();
  const data = analysisResults || analyzeAudienceDataset(INITIAL_SAMPLE_VIEWERS);
  
  const [selectedUserId, setSelectedUserId] = useState(id || 'U1001');

  // Find target viewer
  const viewer = INITIAL_SAMPLE_VIEWERS.find(v => v.user_id === selectedUserId) || INITIAL_SAMPLE_VIEWERS[0];

  // Determine assigned segment
  let assignedSegment = data.segments[0];
  if (viewer.watch_time_hours > 7 && viewer.avg_session_mins > 60) {
    assignedSegment = data.segments.find(s => s.name.includes('Binge')) || data.segments[0];
  } else if (viewer.watch_time_hours < 3) {
    assignedSegment = data.segments.find(s => s.name.includes('Casual')) || data.segments[1];
  } else if (viewer.genre_diversity_score > 0.8) {
    assignedSegment = data.segments.find(s => s.name.includes('Explorers')) || data.segments[2];
  }

  // Filter recommendations tailored to this viewer
  const tailoredRecs = SAMPLE_RECOMMENDATIONS_CATALOG.filter(
    r => r.targetSegment.toLowerCase().includes(assignedSegment.name.toLowerCase().replace('the ', '')) || r.matchScore > 90
  );

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/segments" className="btn-secondary text-xs py-2 px-4 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-[#193D32]" />
            <span>BACK TO SEGMENTS</span>
          </Link>

          {/* Viewer Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#3A2925]">Select Viewer:</span>
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="bg-[#FCFAF5] border border-[#3A2925]/20 rounded-lg px-3 py-1.5 text-xs font-bold text-[#3A2925] focus:outline-none focus:border-[#193D32]"
            >
              {INITIAL_SAMPLE_VIEWERS.map(v => (
                <option key={v.user_id} value={v.user_id}>
                  {v.user_id} ({v.top_genres ? v.top_genres[0] : 'Viewer'})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Viewer Card Header */}
        <div className="card-cinesense p-8 bg-[#FCFAF5] mb-10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#3A2925]/10 pb-6 mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#193D32] text-[#C9A85C] flex items-center justify-center font-serif text-2xl font-bold">
                {viewer.user_id.slice(-2)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="badge-category text-[10px]">VIEWER TELEMETRY PROFILE</span>
                  <span className="text-xs font-bold text-[#193D32] bg-[#DDE7D8] px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-bold text-[#3A2925] mt-1">
                  Viewer {viewer.user_id}
                </h1>
              </div>
            </div>

            <div className="p-4 bg-[#F5F0E6] rounded-xl border border-[#3A2925]/10">
              <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">AUTOMATIC SEGMENT ASSIGNMENT</p>
              <p className="font-serif text-lg font-bold text-[#193D32]">{assignedSegment.name}</p>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center bg-[#F5F0E6] p-4 rounded-xl mb-6">
            <div>
              <p className="text-[10px] font-bold text-[#3A2925]/60">WATCH TIME</p>
              <p className="text-lg font-serif font-bold text-[#193D32]">{viewer.watch_time_hours} hrs</p>
            </div>
            <div className="border-l border-[#3A2925]/10">
              <p className="text-[10px] font-bold text-[#3A2925]/60">AVG SESSION</p>
              <p className="text-lg font-serif font-bold text-[#3A2925]">{viewer.avg_session_mins} min</p>
            </div>
            <div className="border-l border-[#3A2925]/10">
              <p className="text-[10px] font-bold text-[#3A2925]/60">VISITS</p>
              <p className="text-lg font-serif font-bold text-[#3A2925]">{viewer.visit_frequency_per_week} / wk</p>
            </div>
            <div className="border-l border-[#3A2925]/10">
              <p className="text-[10px] font-bold text-[#3A2925]/60">COMPLETION</p>
              <p className="text-lg font-serif font-bold text-[#C9A85C]">{Math.round((viewer.completion_rate || 0.85) * 100)}%</p>
            </div>
            <div className="border-l border-[#3A2925]/10 col-span-2 sm:col-span-1">
              <p className="text-[10px] font-bold text-[#3A2925]/60">GENRE DIVERSITY</p>
              <p className="text-lg font-serif font-bold text-[#5E7567]">{viewer.genre_diversity_score || 0.45}</p>
            </div>
          </div>

          {/* Top Genres */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#3A2925]/70">Top Genres:</span>
            {(viewer.top_genres || ['Drama', 'Thriller']).map(g => (
              <span key={g} className="text-xs bg-[#E8DDCB] text-[#3A2925] px-2.5 py-1 rounded-md font-semibold">
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Personalized Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#C9A85C]" />
            <h2 className="font-serif text-2xl font-bold text-[#3A2925]">
              Personalized for this Viewer
            </h2>
          </div>
          <p className="text-xs text-[#3A2925]/70 mb-6 font-sans">
            AI recommendations powered by cluster affinity and viewing completion patterns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tailoredRecs.slice(0, 2).map((rec) => (
              <div key={rec.id} className="card-cinesense p-6 bg-[#FCFAF5] flex flex-col justify-between border-l-4 border-l-[#C9A85C]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold bg-[#DDE7D8] text-[#193D32] px-2 py-0.5 rounded">
                      {rec.category}
                    </span>
                    <span className="text-xs font-bold text-[#C9A85C] flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {rec.matchScore}% Match
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#3A2925] mb-2">
                    {rec.title}
                  </h3>

                  <div className="p-3 bg-[#F5F0E6] rounded-lg text-xs text-[#3A2925]/80 mb-4 border border-[#3A2925]/5">
                    <span className="font-bold text-[#193D32] block mb-1">REASONING:</span>
                    “{rec.reason}”
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-3 border-t border-[#3A2925]/10">
                  <span className="text-[#3A2925]/60">{rec.duration}</span>
                  <button className="btn-primary text-xs py-1.5 px-3">
                    PLAY PREVIEW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
