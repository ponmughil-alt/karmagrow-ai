import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Flame, Award, ArrowRight, Eye, Sparkles, Filter, X } from 'lucide-react';
import { analyzeAudienceDataset } from '../services/mlEngine';
import { INITIAL_SAMPLE_VIEWERS } from '../services/sampleData';

export default function AudienceSegments({ analysisResults }) {
  const data = analysisResults || analyzeAudienceDataset(INITIAL_SAMPLE_VIEWERS);
  const [selectedSegment, setSelectedSegment] = useState(null);

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#3A2925]/10">
          <div>
            <span className="badge-category mb-3">AI CLUSTER ANALYSIS</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2">
              Meet Your Audiences
            </h1>
            <p className="font-sans text-base text-[#3A2925]/80 mt-2 max-w-xl">
              Unsupervised K-Means clustering discovered {data.segmentCount} distinct behavioral segments from viewer activity telemetry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#FCFAF5] p-3 rounded-xl border border-[#3A2925]/10 flex items-center gap-3 shadow-sm">
              <Sparkles className="w-5 h-5 text-[#C9A85C]" />
              <div>
                <p className="text-[10px] text-[#3A2925]/60 font-bold uppercase">Silhouette Score</p>
                <p className="text-sm font-bold text-[#193D32]">{data.silhouetteScore} (Optimal K={data.bestK})</p>
              </div>
            </div>
          </div>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.segments.map((segment) => (
            <div
              key={segment.id}
              className="card-cinesense p-6 bg-[#FCFAF5] flex flex-col justify-between relative group hover:border-[#193D32]/40"
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#3A2925]/10">
                  <span className="font-serif text-3xl font-bold text-[#C9A85C] group-hover:text-[#193D32] transition-colors">
                    0{segment.id}
                  </span>
                  <span className="text-[11px] font-bold bg-[#DDE7D8] text-[#193D32] px-2.5 py-1 rounded-full">
                    {segment.percentage}% OF VIEWERS ({segment.count})
                  </span>
                </div>

                {/* Name & Description */}
                <h3 className="font-serif text-2xl font-bold text-[#3A2925] mb-2 leading-tight">
                  {segment.name.toUpperCase()}
                </h3>

                <p className="text-xs text-[#3A2925]/80 mb-6 leading-relaxed min-h-[40px]">
                  {segment.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 bg-[#F5F0E6] p-3 rounded-xl mb-6 text-center border border-[#3A2925]/5">
                  <div className="p-1">
                    <p className="text-[10px] text-[#3A2925]/60 font-bold">AVG WATCH</p>
                    <p className="text-sm font-bold text-[#193D32]">{segment.avgWatchTime} hrs</p>
                  </div>
                  <div className="p-1 border-l border-[#3A2925]/10">
                    <p className="text-[10px] text-[#3A2925]/60 font-bold">AVG SESSION</p>
                    <p className="text-sm font-bold text-[#3A2925]">{segment.avgSessionMins} min</p>
                  </div>
                  <div className="p-1 border-t border-[#3A2925]/10">
                    <p className="text-[10px] text-[#3A2925]/60 font-bold">VISIT FREQ</p>
                    <p className="text-sm font-bold text-[#3A2925]">{segment.avgVisitFreq} / wk</p>
                  </div>
                  <div className="p-1 border-t border-l border-[#3A2925]/10">
                    <p className="text-[10px] text-[#3A2925]/60 font-bold">COMPLETION</p>
                    <p className="text-sm font-bold text-[#C9A85C]">{segment.avgCompletionRate}%</p>
                  </div>
                </div>

                {/* Top Genres */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase mb-2 tracking-wider">
                    Top Genre Affinities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {segment.topGenres.map((g) => (
                      <span key={g} className="text-xs bg-[#E8DDCB]/60 text-[#3A2925] px-2.5 py-1 rounded-md font-semibold">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#3A2925]/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedSegment(segment)}
                  className="btn-primary w-full text-xs justify-center py-2.5 gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C9A85C]" />
                  <span>VIEW SEGMENT DETAILS</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Drawer for Segment Viewer Drill-down */}
        {selectedSegment && (
          <div className="fixed inset-0 z-50 bg-[#3A2925]/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="card-cinesense p-6 sm:p-8 max-w-2xl w-full bg-[#FCFAF5] shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedSegment(null)}
                className="absolute top-4 right-4 p-2 text-[#3A2925]/60 hover:text-[#3A2925] rounded-lg bg-[#E8DDCB]/40"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="badge-category text-[10px]">CLUSTER 0{selectedSegment.id}</span>
                <span className="text-xs text-[#3A2925]/60">{selectedSegment.count} Viewers</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-[#3A2925] mb-3">
                {selectedSegment.name}
              </h2>
              <p className="text-xs text-[#3A2925]/80 mb-6 leading-relaxed">
                {selectedSegment.description}
              </p>

              <h4 className="font-sans font-bold text-sm text-[#3A2925] mb-3">
                Assigned Viewers in Segment
              </h4>

              <div className="space-y-2 mb-6">
                {selectedSegment.viewers.map((v) => (
                  <div key={v.user_id} className="p-3 bg-[#F5F0E6] rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#193D32]">{v.user_id}</span>
                      <span className="ml-2 text-[#3A2925]/70">Watch: {v.watch_time_hours}h | Session: {v.avg_session_mins}m</span>
                    </div>
                    <Link
                      to={`/viewer/${v.user_id}`}
                      className="text-xs font-bold text-[#C9A85C] hover:underline flex items-center gap-1"
                    >
                      Inspect Profile →
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedSegment(null)}
                  className="btn-secondary text-xs py-2 px-4"
                >
                  CLOSE
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
