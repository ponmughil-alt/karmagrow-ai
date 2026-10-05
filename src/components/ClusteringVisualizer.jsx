import React, { useState } from 'react';
import { Layers, Zap, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ClusteringVisualizer() {
  const [activeTab, setActiveTab] = useState('clusters');

  // Sample data points representing viewers with x, y coordinates and assigned cluster color
  const samplePoints = [
    // Cluster 1 (Binge Enthusiasts - Forest)
    { id: 1, x: 75, y: 25, cluster: 1, color: '#193D32', label: 'Binge Enthusiast' },
    { id: 2, x: 82, y: 30, cluster: 1, color: '#193D32', label: 'Binge Enthusiast' },
    { id: 3, x: 78, y: 18, cluster: 1, color: '#193D32', label: 'Binge Enthusiast' },
    { id: 4, x: 88, y: 22, cluster: 1, color: '#193D32', label: 'Binge Enthusiast' },

    // Cluster 2 (Casual Viewers - Gold)
    { id: 5, x: 20, y: 75, cluster: 2, color: '#C9A85C', label: 'Casual Viewer' },
    { id: 6, x: 25, y: 82, cluster: 2, color: '#C9A85C', label: 'Casual Viewer' },
    { id: 7, x: 18, y: 68, cluster: 2, color: '#C9A85C', label: 'Casual Viewer' },
    { id: 8, x: 28, y: 78, cluster: 2, color: '#C9A85C', label: 'Casual Viewer' },

    // Cluster 3 (Genre Explorers - Sage/Green)
    { id: 9, x: 50, y: 80, cluster: 3, color: '#5E7567', label: 'Genre Explorer' },
    { id: 10, x: 55, y: 85, cluster: 3, color: '#5E7567', label: 'Genre Explorer' },
    { id: 11, x: 45, y: 76, cluster: 3, color: '#5E7567', label: 'Genre Explorer' },

    // Cluster 4 (Loyal Regulars - Espresso)
    { id: 12, x: 30, y: 30, cluster: 4, color: '#3A2925', label: 'Loyal Regular' },
    { id: 13, x: 35, y: 25, cluster: 4, color: '#3A2925', label: 'Loyal Regular' },
    { id: 14, x: 28, y: 35, cluster: 4, color: '#3A2925', label: 'Loyal Regular' },

    // Cluster 5 (Night Owls - Beige)
    { id: 15, x: 80, y: 80, cluster: 5, color: '#8C6D46', label: 'Night Owl' },
    { id: 16, x: 85, y: 75, cluster: 5, color: '#8C6D46', label: 'Night Owl' },
    { id: 17, x: 76, y: 88, cluster: 5, color: '#8C6D46', label: 'Night Owl' }
  ];

  return (
    <section className="py-20 px-4 bg-[#F5F0E6] border-b border-[#3A2925]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5">
            <span className="badge-category mb-3">AUTOMATIC AI SEGMENTATION</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2 mb-6 leading-tight">
              No Labels. <br />
              No Guesswork. <br />
              <span className="italic text-[#193D32]">Just Behavioral Intelligence.</span>
            </h2>

            <p className="font-sans text-base text-[#3A2925]/80 mb-6 leading-relaxed">
              CineSense AI uses unsupervised machine learning (K-Means + Z-Score Standardization) 
              to automatically discover hidden viewer patterns directly from telemetry data.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#193D32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#3A2925]">No Manual Audience Tagging</h4>
                  <p className="text-xs text-[#3A2925]/70">The AI groups viewers based on true behavioral vectors rather than arbitrary demographics.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A85C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#3A2925]">Dynamic Cluster Discovery</h4>
                  <p className="text-xs text-[#3A2925]/70">Silhouette scoring automatically selects optimal segment granularity.</p>
                </div>
              </div>
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="inline-flex p-1 bg-[#E8DDCB]/60 rounded-xl border border-[#3A2925]/10">
              <button
                onClick={() => setActiveTab('raw')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'raw' ? 'bg-[#193D32] text-[#FCFAF5]' : 'text-[#3A2925]/70 hover:text-[#3A2925]'
                }`}
              >
                RAW VIEWERS
              </button>
              <button
                onClick={() => setActiveTab('clusters')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'clusters' ? 'bg-[#193D32] text-[#FCFAF5]' : 'text-[#3A2925]/70 hover:text-[#3A2925]'
                }`}
              >
                DISCOVERED CLUSTERS
              </button>
            </div>
          </div>

          {/* Right Interactive Dot Matrix Visualizer */}
          <div className="lg:col-span-7">
            <div className="card-cinesense p-6 relative bg-[#FCFAF5] overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3A2925]/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#193D32] animate-pulse"></div>
                  <span className="font-serif font-bold text-sm text-[#3A2925]">
                    {activeTab === 'raw' ? 'Unstructured Viewer Telemetry' : 'K-Means Behavioral Clusters (K=5)'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#3A2925]/60 bg-[#DDE7D8]/60 px-2.5 py-1 rounded-full">
                  100% Automated
                </span>
              </div>

              {/* Matrix Canvas Simulation */}
              <div className="relative w-full h-80 bg-[#F5F0E6]/50 rounded-xl border border-[#3A2925]/10 p-4 flex items-center justify-center overflow-hidden">
                
                {/* Axis Labels */}
                <span className="absolute bottom-2 right-4 text-[10px] font-bold text-[#3A2925]/50 tracking-wider">
                  WATCH TIME (HOURS) →
                </span>
                <span className="absolute top-4 left-2 text-[10px] font-bold text-[#3A2925]/50 tracking-wider -rotate-90 origin-top-left">
                  SESSION DURATION (MIN) →
                </span>

                {/* Rendered Cluster Dots */}
                {samplePoints.map((pt) => {
                  const isClustered = activeTab === 'clusters';
                  // In raw view, show uniform color; in cluster view, show cluster color
                  const dotColor = isClustered ? pt.color : '#5E7567';
                  const leftPos = isClustered ? pt.x : (pt.id * 5) % 85 + 5;
                  const topPos = isClustered ? pt.y : (pt.id * 7) % 85 + 5;

                  return (
                    <div
                      key={pt.id}
                      className="absolute transition-all duration-700 ease-out group cursor-pointer"
                      style={{ left: `${leftPos}%`, top: `${topPos}%` }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-150 transition-transform"
                        style={{ backgroundColor: dotColor }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FCFAF5]"></span>
                      </div>
                      
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#3A2925] text-[#FCFAF5] text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">
                        {isClustered ? `Segment: ${pt.label}` : `Raw Viewer #${pt.id}`}
                      </div>
                    </div>
                  );
                })}

                {/* Cluster Centroid Rings when in cluster view */}
                {activeTab === 'clusters' && (
                  <>
                    <div className="absolute left-[78%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-dashed border-[#193D32]/40 rounded-full pointer-events-none animate-pulse"></div>
                    <div className="absolute left-[22%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-dashed border-[#C9A85C]/40 rounded-full pointer-events-none animate-pulse"></div>
                    <div className="absolute left-[50%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed border-[#5E7567]/40 rounded-full pointer-events-none animate-pulse"></div>
                  </>
                )}
              </div>

              {/* Cluster Legend Footer */}
              <div className="mt-4 pt-3 border-t border-[#3A2925]/10 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#193D32]"></span>
                  <span className="font-semibold text-[#3A2925]">Binge</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C9A85C]"></span>
                  <span className="font-semibold text-[#3A2925]">Casual</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5E7567]"></span>
                  <span className="font-semibold text-[#3A2925]">Explorers</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3A2925]"></span>
                  <span className="font-semibold text-[#3A2925]">Loyal</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8C6D46]"></span>
                  <span className="font-semibold text-[#3A2925]">Night Owls</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
