import React, { useState } from 'react';
import { Bell, CheckCircle2, AlertTriangle, Info, Sparkles, Check } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../services/mockData';

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifs(prev => prev.map(n => ({ ...n, read: true })));
  };

  const toggleRead = (id) => {
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">MoSPI Alert Feed</span>
          <h1 className="text-2xl font-extrabold text-white font-serif mt-1">Notifications & System Alerts</h1>
        </div>

        <button
          onClick={markAllRead}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-teal-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center space-x-1"
        >
          <Check className="w-4 h-4" />
          <span>Mark All as Read</span>
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifs.map((n) => (
          <div
            key={n.id}
            onClick={() => toggleRead(n.id)}
            className={`p-5 rounded-3xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
              !n.read
                ? 'bg-slate-900 border-teal-500/50 shadow-lg shadow-teal-500/5'
                : 'bg-slate-950/80 border-slate-800 opacity-80'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2.5 rounded-2xl shrink-0 mt-0.5 ${
                n.type === 'warning' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                n.type === 'success' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                'bg-blue-950 text-blue-400 border border-blue-800'
              }`}>
                {n.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
                 n.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
                 <Info className="w-4 h-4" />}
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-bold text-white">{n.title}</h3>
                  {!n.read && (
                    <span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span>
                  )}
                </div>
                <p className="text-xs text-slate-300 mt-1">{n.message}</p>
                <span className="text-[10px] text-slate-500 mt-2 block">{n.timestamp}</span>
              </div>
            </div>

            <button className="text-[11px] font-semibold text-slate-500 hover:text-slate-300">
              {n.read ? 'Mark Unread' : 'Mark Read'}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
