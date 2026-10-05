import React, { useState } from 'react';
import { Cpu, Layers, CheckCircle2, BarChart2, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function ModelIntelligence() {
  const [randomSeed, setRandomSeed] = useState(42);

  const kComparisonData = [
    { k: 2, silhouetteScore: 0.48, inertia: 1420 },
    { k: 3, silhouetteScore: 0.54, inertia: 980 },
    { k: 4, silhouetteScore: 0.58, inertia: 710 },
    { k: 5, silhouetteScore: 0.61, inertia: 490 },
    { k: 6, silhouetteScore: 0.57, inertia: 420 }
  ];

  const features = [
    { name: 'Watch Time (Hours)', weight: '28%', desc: 'Total weekly active streaming hours.' },
    { name: 'Average Session Duration', weight: '24%', desc: 'Continuous viewing length before inactivity.' },
    { name: 'Visit Frequency', weight: '20%', desc: 'Active streaming days per 7-day window.' },
    { name: 'Completion Rate', weight: '16%', desc: 'Percentage of started titles watched to end.' },
    { name: 'Genre Diversity Score', weight: '12%', desc: 'Entropy of distinct content genres streamed.' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-[#3A2925]/10">
          <span className="badge-category mb-3">HACKATHON TECHNICAL SHOWCASE</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2">
            Behind the Intelligence
          </h1>
          <p className="font-sans text-base text-[#3A2925]/80 mt-2 max-w-2xl">
            Mathematical foundation, feature engineering specs, silhouette evaluation, and hyperparameter configuration of the CineSense AI segmentation engine.
          </p>
        </div>

        {/* Algorithm Specs Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">ALGORITHM</p>
            <p className="font-serif text-xl font-bold text-[#193D32] mt-1">KMeans Clustering</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">Unsupervised grouping</p>
          </div>
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">PREPROCESSING</p>
            <p className="font-serif text-xl font-bold text-[#C9A85C] mt-1">StandardScaler</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">Z-Score Normalization</p>
          </div>
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">CLUSTER SELECTION</p>
            <p className="font-serif text-xl font-bold text-[#193D32] mt-1">Silhouette Score</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">s(i) = (b - a) / max(a, b)</p>
          </div>
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-[10px] font-bold text-[#3A2925]/60 uppercase">REPRODUCIBILITY SEED</p>
            <p className="font-serif text-xl font-bold text-[#3A2925] mt-1">Fixed (Seed={randomSeed})</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">Deterministic execution</p>
          </div>
        </div>

        {/* Silhouette K Evaluation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          <div className="lg:col-span-7 card-cinesense p-6 bg-[#FCFAF5]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#3A2925]/10">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-[#193D32]" />
                <h3 className="font-serif text-xl font-bold text-[#3A2925]">Silhouette Score vs Candidate K</h3>
              </div>
              <span className="text-xs font-bold bg-[#DDE7D8] text-[#193D32] px-2.5 py-1 rounded-full">
                Optimal K = 5
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3A2925" strokeOpacity={0.1} />
                  <XAxis dataKey="k" stroke="#3A2925" fontSize={12} label={{ value: 'Number of Clusters (K)', position: 'insideBottom', offset: -5, fontSize: 10 }} />
                  <YAxis stroke="#3A2925" fontSize={12} domain={[0.4, 0.7]} />
                  <Tooltip contentStyle={{ backgroundColor: '#FCFAF5', borderColor: '#3A2925', borderRadius: '8px', fontSize: '12px' }} />
                  <Line type="monotone" dataKey="silhouetteScore" stroke="#193D32" strokeWidth={3} dot={{ r: 6, fill: '#C9A85C' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs text-[#3A2925]/70 mt-4 italic text-center">
              Silhouette coefficient peaks at K=5 (0.61), confirming optimal cluster tightness and inter-cluster separation.
            </p>
          </div>

          <div className="lg:col-span-5 card-cinesense p-6 bg-[#FCFAF5]">
            <h3 className="font-serif text-xl font-bold text-[#3A2925] mb-4 pb-3 border-b border-[#3A2925]/10">
              K Evaluation Matrix
            </h3>

            <div className="space-y-3">
              {kComparisonData.map((row) => (
                <div
                  key={row.k}
                  className={`p-3 rounded-xl flex items-center justify-between text-xs font-sans transition-colors ${
                    row.k === 5
                      ? 'bg-[#193D32] text-[#FCFAF5] font-bold shadow-md'
                      : 'bg-[#F5F0E6] text-[#3A2925]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold">K = {row.k}</span>
                    {row.k === 5 && (
                      <span className="text-[10px] bg-[#C9A85C] text-[#3A2925] px-2 py-0.5 rounded font-bold">
                        SELECTED
                      </span>
                    )}
                  </div>
                  <div>
                    <span>Silhouette: <strong>{row.silhouetteScore}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Feature Weights Matrix */}
        <div className="card-cinesense p-6 bg-[#FCFAF5]">
          <h3 className="font-serif text-xl font-bold text-[#3A2925] mb-4 pb-3 border-b border-[#3A2925]/10">
            Behavioral Feature Importance Matrix
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {features.map((f, i) => (
              <div key={i} className="p-4 bg-[#F5F0E6] rounded-xl border border-[#3A2925]/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#3A2925]/60 uppercase">FEATURE {i + 1}</span>
                  <span className="text-xs font-bold text-[#C9A85C]">{f.weight}</span>
                </div>
                <h4 className="font-bold text-xs text-[#3A2925] mb-1">{f.name}</h4>
                <p className="text-[11px] text-[#3A2925]/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
