import React, { useState } from 'react';
import { Code, CheckCircle2, Play, Copy, Server, Terminal, Activity } from 'lucide-react';

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState('recommend');
  const [testUserId, setTestUserId] = useState('U1001');
  const [testWatchTime, setTestWatchTime] = useState(8.5);
  const [testSession, setTestSession] = useState(72);
  const [responseJson, setResponseJson] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleRequest = {
    user_id: testUserId,
    watch_time_hours: Number(testWatchTime),
    avg_session_mins: Number(testSession),
    top_genres: ["Drama", "Thriller"]
  };

  const handleRunApiTest = () => {
    setLoading(true);
    setTimeout(() => {
      let segId = 1;
      let segName = "The Binge Enthusiasts";
      let recs = ["Dark Horizon (Thriller Series)", "The Silicon Experiment (Sci-Fi Movie)"];

      if (testWatchTime < 3) {
        segId = 2;
        segName = "The Casual Viewers";
        recs = ["Quick Laughs: Season 4", "Bite-Sized Comedy Special"];
      } else if (testSession > 80) {
        segId = 5;
        segName = "The Night Owls";
        recs = ["Midnight Chronicles", "Dark Cyberpunk Film"];
      }

      setResponseJson({
        status: "success",
        timestamp: new Date().toISOString(),
        user_id: testUserId,
        segment_id: segId,
        segment_name: segName,
        silhouette_score: 0.61,
        recommendations: recs
      });
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#3A2925]/10">
          <div>
            <span className="badge-category mb-3">REST API INTERFACE</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2">
              Built to Connect.
            </h1>
            <p className="font-sans text-base text-[#3A2925]/80 mt-2 max-w-xl">
              Integrate CineSense AI directly into your OTT client player, content recommendation engine, or data pipeline via OpenAPI endpoints.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#FCFAF5] px-3 py-2 rounded-xl border border-[#3A2925]/10 flex items-center gap-2 shadow-sm text-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[#3A2925]">API STATUS: ONLINE</span>
            </div>
            <div className="bg-[#FCFAF5] px-3 py-2 rounded-xl border border-[#3A2925]/10 flex items-center gap-2 shadow-sm text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#193D32]" />
              <span className="text-[#193D32]">MODEL: LOADED</span>
            </div>
          </div>
        </div>

        {/* API Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Endpoint Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <div
              onClick={() => setActiveTab('recommend')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                activeTab === 'recommend'
                  ? 'bg-[#193D32] text-[#FCFAF5] border-[#193D32] shadow-lg'
                  : 'bg-[#FCFAF5] text-[#3A2925] border-[#3A2925]/10 hover:border-[#193D32]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold bg-[#C9A85C] text-[#3A2925] px-2 py-0.5 rounded">
                  POST
                </span>
                <span className="text-[11px] font-mono opacity-70">/api/v1/recommend</span>
              </div>
              <h4 className="font-bold text-sm">Personalize Recommendations</h4>
              <p className="text-[11px] opacity-80">Infer segment & output personalized content.</p>
            </div>

            <div
              onClick={() => setActiveTab('segment')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                activeTab === 'segment'
                  ? 'bg-[#193D32] text-[#FCFAF5] border-[#193D32] shadow-lg'
                  : 'bg-[#FCFAF5] text-[#3A2925] border-[#3A2925]/10 hover:border-[#193D32]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold bg-[#5E7567] text-[#FCFAF5] px-2 py-0.5 rounded">
                  POST
                </span>
                <span className="text-[11px] font-mono opacity-70">/api/v1/segment</span>
              </div>
              <h4 className="font-bold text-sm">Classify Viewer Segment</h4>
              <p className="text-[11px] opacity-80">Classify viewer vector into K-Means cluster.</p>
            </div>

            <div
              onClick={() => setActiveTab('health')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                activeTab === 'health'
                  ? 'bg-[#193D32] text-[#FCFAF5] border-[#193D32] shadow-lg'
                  : 'bg-[#FCFAF5] text-[#3A2925] border-[#3A2925]/10 hover:border-[#193D32]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">
                  GET
                </span>
                <span className="text-[11px] font-mono opacity-70">/api/v1/health</span>
              </div>
              <h4 className="font-bold text-sm">System & Model Health Check</h4>
              <p className="text-[11px] opacity-80">Verify API status & loaded ML model state.</p>
            </div>
          </div>

          {/* Interactive Console / Code Runner */}
          <div className="lg:col-span-8 card-cinesense p-6 bg-[#FCFAF5]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3A2925]/10">
              <h3 className="font-serif text-xl font-bold text-[#3A2925] flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#193D32]" />
                API Request Sandbox
              </h3>
              <button
                onClick={handleRunApiTest}
                disabled={loading}
                className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 text-[#C9A85C] fill-[#C9A85C]" />
                <span>{loading ? 'EXECUTING...' : 'SEND REQUEST'}</span>
              </button>
            </div>

            {/* Input Param Controls */}
            <div className="grid grid-cols-3 gap-3 mb-4 bg-[#F5F0E6] p-3 rounded-xl">
              <div>
                <label className="text-[10px] font-bold text-[#3A2925]/60 block mb-1">USER ID</label>
                <input
                  type="text"
                  value={testUserId}
                  onChange={(e) => setTestUserId(e.target.value)}
                  className="w-full bg-[#FCFAF5] border border-[#3A2925]/20 rounded px-2 py-1 text-xs font-mono font-bold text-[#3A2925]"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#3A2925]/60 block mb-1">WATCH TIME (HRS)</label>
                <input
                  type="number"
                  step="0.5"
                  value={testWatchTime}
                  onChange={(e) => setTestWatchTime(e.target.value)}
                  className="w-full bg-[#FCFAF5] border border-[#3A2925]/20 rounded px-2 py-1 text-xs font-mono font-bold text-[#3A2925]"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#3A2925]/60 block mb-1">AVG SESSION (MIN)</label>
                <input
                  type="number"
                  value={testSession}
                  onChange={(e) => setTestSession(e.target.value)}
                  className="w-full bg-[#FCFAF5] border border-[#3A2925]/20 rounded px-2 py-1 text-xs font-mono font-bold text-[#3A2925]"
                />
              </div>
            </div>

            {/* Request Payload Display */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-[#3A2925]/60 uppercase block mb-1">REQUEST BODY</span>
              <pre className="bg-[#3A2925] text-[#FCFAF5] p-3 rounded-xl font-mono text-xs overflow-x-auto">
{JSON.stringify(sampleRequest, null, 2)}
              </pre>
            </div>

            {/* Response Payload Display */}
            <div>
              <span className="text-[10px] font-bold text-[#3A2925]/60 uppercase block mb-1">RESPONSE OUTPUT</span>
              <pre className="bg-[#122e25] text-emerald-300 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-[#C9A85C]/30 min-h-[140px]">
{responseJson ? JSON.stringify(responseJson, null, 2) : '// Click "SEND REQUEST" to execute live API test...'}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
