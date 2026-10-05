import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { INITIAL_SAMPLE_VIEWERS } from '../services/sampleData';
import { analyzeAudienceDataset } from '../services/mlEngine';
import { BarChart2, PieChart as PieIcon, Activity, Clock } from 'lucide-react';

export default function Analytics({ analysisResults }) {
  const data = analysisResults || analyzeAudienceDataset(INITIAL_SAMPLE_VIEWERS);

  // Distribution Pie Data
  const pieData = data.segments.map((seg, idx) => ({
    name: seg.name,
    value: seg.count,
    color: ['#193D32', '#C9A85C', '#5E7567', '#3A2925', '#8C6D46'][idx % 5]
  }));

  // Watch Time Bar Data
  const watchTimeBarData = data.segments.map(seg => ({
    segment: seg.name.replace('The ', ''),
    watchTime: seg.avgWatchTime,
    session: seg.avgSessionMins
  }));

  // Radar Data for Genre & Completion Attributes
  const radarData = [
    { attribute: 'Watch Time', Binge: 95, Casual: 25, Explorers: 60, Regulars: 65, NightOwls: 80 },
    { attribute: 'Session Length', Binge: 90, Casual: 20, Explorers: 50, Regulars: 55, NightOwls: 95 },
    { attribute: 'Visit Frequency', Binge: 80, Casual: 30, Explorers: 65, Regulars: 98, NightOwls: 45 },
    { attribute: 'Completion Rate', Binge: 92, Casual: 50, Explorers: 78, Regulars: 88, NightOwls: 84 },
    { attribute: 'Genre Diversity', Binge: 45, Casual: 65, Explorers: 95, Regulars: 50, NightOwls: 35 }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-[#3A2925]/10">
          <span className="badge-category mb-3">OTT VIEWER TELEMETRY ANALYTICS</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2">
            See the Behavior Behind the Numbers.
          </h1>
          <p className="font-sans text-base text-[#3A2925]/80 mt-2 max-w-xl">
            Detailed statistical analysis across key viewer metrics: watch time, session length, visit frequency, and completion rates.
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-xs font-bold text-[#3A2925]/60 uppercase">TOTAL ANALYZED VIEWERS</p>
            <p className="font-serif text-3xl font-bold text-[#193D32] mt-1">{data.totalViewers}</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">100% telemetry coverage</p>
          </div>
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-xs font-bold text-[#3A2925]/60 uppercase">DISCOVERED PERSONAS</p>
            <p className="font-serif text-3xl font-bold text-[#C9A85C] mt-1">{data.segmentCount}</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">Optimal K-Means clusters</p>
          </div>
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-xs font-bold text-[#3A2925]/60 uppercase">SILHOUETTE SCORE</p>
            <p className="font-serif text-3xl font-bold text-[#193D32] mt-1">{data.silhouetteScore}</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">High cluster separation</p>
          </div>
          <div className="card-cinesense p-5 bg-[#FCFAF5]">
            <p className="text-xs font-bold text-[#3A2925]/60 uppercase">AVG COMPLETION RATE</p>
            <p className="font-serif text-3xl font-bold text-[#3A2925] mt-1">82.4%</p>
            <p className="text-[10px] text-[#3A2925]/70 mt-1">Across all segments</p>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Chart 1: Segment Distribution Pie Chart */}
          <div className="lg:col-span-5 card-cinesense p-6 bg-[#FCFAF5]">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#3A2925]/10">
              <PieIcon className="w-5 h-5 text-[#193D32]" />
              <h3 className="font-serif text-xl font-bold text-[#3A2925]">Audience Distribution</h3>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#FCFAF5', borderColor: '#3A2925', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#3A2925]/10 text-xs">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="font-semibold text-[#3A2925] truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Watch Time Bar Chart */}
          <div className="lg:col-span-7 card-cinesense p-6 bg-[#FCFAF5]">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#3A2925]/10">
              <BarChart2 className="w-5 h-5 text-[#C9A85C]" />
              <h3 className="font-serif text-xl font-bold text-[#3A2925]">Average Watch Time (Hours/Wk)</h3>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={watchTimeBarData}>
                  <XAxis dataKey="segment" stroke="#3A2925" fontSize={11} />
                  <YAxis stroke="#3A2925" fontSize={11} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#FCFAF5', borderColor: '#3A2925', borderRadius: '8px', fontSize: '12px' }}
                  />
                  <Bar dataKey="watchTime" fill="#193D32" radius={[6, 6, 0, 0]}>
                    {watchTimeBarData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#193D32' : '#C9A85C'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs text-[#3A2925]/60 mt-4 text-center italic">
              Comparison of average weekly watch time per audience segment.
            </p>
          </div>

        </div>

        {/* Behavioral Radar Matrix */}
        <div className="card-cinesense p-6 bg-[#FCFAF5]">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#3A2925]/10">
            <Activity className="w-5 h-5 text-[#5E7567]" />
            <h3 className="font-serif text-xl font-bold text-[#3A2925]">Multi-Attribute Behavioral Radar</h3>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#3A2925" strokeOpacity={0.15} />
                <PolarAngleAxis dataKey="attribute" stroke="#3A2925" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#3A2925" fontSize={10} />
                <Radar name="Binge Enthusiasts" dataKey="Binge" stroke="#193D32" fill="#193D32" fillOpacity={0.3} />
                <Radar name="Casual Viewers" dataKey="Casual" stroke="#C9A85C" fill="#C9A85C" fillOpacity={0.3} />
                <Radar name="Genre Explorers" dataKey="Explorers" stroke="#5E7567" fill="#5E7567" fillOpacity={0.3} />
                <Tooltip contentStyle={{ backgroundColor: '#FCFAF5', borderColor: '#3A2925', borderRadius: '8px', fontSize: '12px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
