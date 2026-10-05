import React from 'react';
import { Upload, Cpu, BarChart3, Layers, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Upload Viewer Data',
      desc: 'Ingest raw OTT stream events, viewing history, session durations, and user engagement logs.',
      icon: Upload
    },
    {
      num: '02',
      title: 'Extract Behavioral Features',
      desc: 'Compute watch time, session lengths, visit frequency, completion rates, and genre diversity scores.',
      icon: Cpu
    },
    {
      num: '03',
      title: 'Analyze Viewing Patterns',
      desc: 'Apply Z-score standardization and evaluate optimal cluster separation via Silhouette analysis.',
      icon: BarChart3
    },
    {
      num: '04',
      title: 'Discover Audience Segments',
      desc: 'Unsupervised K-Means automatically groups viewers into distinct behavioral personas without manual rules.',
      icon: Layers
    },
    {
      num: '05',
      title: 'Generate Recommendations',
      desc: 'Synthesize transparent, personalized content recommendations tailored to each segment profile.',
      icon: Sparkles
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-[#FCFAF5] border-b border-[#3A2925]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-category mb-3">HOW CINESENSE THINKS</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2 mb-4">
            From Viewer Behavior <br />
            <span className="italic text-[#193D32]">to Audience Intelligence.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#3A2925]/70 max-w-2xl mx-auto">
            Our multi-stage AI pipeline automatically converts unstructured stream telemetry into high-value audience segments.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="card-cinesense p-6 flex flex-col justify-between relative group hover:border-[#193D32]/30"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#C9A85C] group-hover:text-[#193D32] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#DDE7D8]/60 flex items-center justify-center text-[#193D32]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-sans text-base font-bold text-[#3A2925] mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-[#3A2925]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector indicator for non-last step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#C9A85C]">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
