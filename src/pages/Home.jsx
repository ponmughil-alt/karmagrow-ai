import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ClusteringVisualizer from '../components/ClusteringVisualizer';
import Footer from '../components/Footer';
import { ArrowRight, Sparkles, Film, BarChart2, ShieldCheck, Code, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const featuredSegments = [
    {
      num: '01',
      title: 'THE BINGE ENTHUSIASTS',
      watchTime: '8.4 hrs',
      sessionMins: '72 min',
      completion: '91%',
      desc: 'High watch time, long continuous sessions, and high completion rates.',
      genres: ['Drama', 'Thriller', 'Sci-Fi']
    },
    {
      num: '02',
      title: 'THE CASUAL VIEWERS',
      watchTime: '2.2 hrs',
      sessionMins: '18 min',
      completion: '54%',
      desc: 'Bite-sized viewing, short session duration, moderate visit frequency.',
      genres: ['Comedy', 'Animation', 'Shorts']
    },
    {
      num: '03',
      title: 'THE GENRE EXPLORERS',
      watchTime: '5.4 hrs',
      sessionMins: '44 min',
      completion: '79%',
      desc: 'High genre diversity score, frequent cross-genre content discovery.',
      genres: ['Documentary', 'Indie', 'Foreign']
    },
    {
      num: '04',
      title: 'THE LOYAL REGULARS',
      watchTime: '6.2 hrs',
      sessionMins: '50 min',
      completion: '88%',
      desc: 'Frequent daily visits with highly predictable viewing schedules.',
      genres: ['Sports', 'News', 'Daily Series']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. How CineSense Thinks Section */}
      <HowItWorks />

      {/* 3. Automatic Clustering Visualizer */}
      <ClusteringVisualizer />

      {/* 4. Audience Segments Preview */}
      <section className="py-20 px-4 bg-[#FCFAF5] border-b border-[#3A2925]/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-category mb-3">DISCOVERED PERSONAS</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#3A2925]">
                Meet Your Discovered <br />
                <span className="italic text-[#193D32]">Audience Segments</span>
              </h2>
            </div>
            <Link to="/segments" className="btn-secondary text-xs flex items-center gap-1.5 self-start sm:self-auto">
              <span>EXPLORE ALL SEGMENTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#193D32]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSegments.map((seg) => (
              <div key={seg.num} className="card-cinesense p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#3A2925]/10">
                    <span className="font-serif text-2xl font-bold text-[#C9A85C]">{seg.num}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#DDE7D8] text-[#193D32] px-2 py-0.5 rounded">
                      Persona
                    </span>
                  </div>

                  <h3 className="font-sans text-sm font-bold text-[#3A2925] mb-2 tracking-wide">
                    {seg.title}
                  </h3>

                  <p className="text-xs text-[#3A2925]/75 mb-4 leading-relaxed">
                    {seg.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-1 bg-[#F5F0E6] p-2.5 rounded-lg mb-4 text-center">
                    <div>
                      <p className="text-[10px] text-[#3A2925]/60 font-medium">WATCH</p>
                      <p className="text-xs font-bold text-[#193D32]">{seg.watchTime}</p>
                    </div>
                    <div className="border-x border-[#3A2925]/10">
                      <p className="text-[10px] text-[#3A2925]/60 font-medium">SESSION</p>
                      <p className="text-xs font-bold text-[#3A2925]">{seg.sessionMins}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#3A2925]/60 font-medium">COMPLETION</p>
                      <p className="text-xs font-bold text-[#C9A85C]">{seg.completion}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {seg.genres.map(g => (
                      <span key={g} className="text-[10px] bg-[#E8DDCB]/60 text-[#3A2925] px-2 py-0.5 rounded font-medium">
                        {g}
                      </span>
                    ))}
                  </div>

                  <Link to="/segments" className="text-xs font-bold text-[#193D32] hover:text-[#C9A85C] flex items-center gap-1 group">
                    <span>VIEW SEGMENT DETAILS</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Hackathon & Technical Callout Banner */}
      <section className="py-20 px-4 bg-[#193D32] text-[#F5F0E6] relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 relative">
          <div>
            <span className="inline-block px-3 py-1 bg-[#C9A85C]/20 border border-[#C9A85C]/40 rounded-full text-xs font-mono text-[#C9A85C] mb-4">
              ENTERPRISE ML & REST API
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FCFAF5] mb-4 leading-tight">
              Behind the <br />
              <span className="italic text-[#C9A85C]">Intelligence</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#DDE7D8]/80 mb-6 leading-relaxed">
              CineSense AI exposes a robust REST API for seamless OTT platform integration. 
              Evaluate cluster silhouette metrics, algorithm hyper-parameters, and reproducibility test suites.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/model" className="btn-gold text-xs py-3 px-6 flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                <span>MODEL INTELLIGENCE</span>
              </Link>
              <Link to="/api" className="btn-secondary text-xs text-[#FCFAF5] border-[#F5F0E6]/30 hover:border-[#FCFAF5] py-3 px-6 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>API DOCUMENTATION</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#122e25] border border-[#C9A85C]/30 rounded-2xl p-6 font-mono text-xs text-[#DDE7D8] shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F5F0E6]/10 text-[11px] text-[#C9A85C]">
              <span>POST /api/v1/recommend</span>
              <span className="flex items-center gap-1 text-emerald-400">● 200 OK</span>
            </div>
            <pre className="overflow-x-auto text-[11px] leading-relaxed text-[#FCFAF5]/90">
{`{
  "user_id": "U1001",
  "segment_id": 1,
  "segment_name": "The Binge Enthusiasts",
  "silhouette_score": 0.61,
  "recommendations": [
    {
      "title": "Dark Horizon",
      "match_confidence": 0.96,
      "reason": "High watch time (8.5h) + long sessions (74m)"
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
