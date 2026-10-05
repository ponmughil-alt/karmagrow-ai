import React, { useState } from 'react';
import { User, ShieldCheck, Award, BookOpen, Clock, Edit, CheckCircle2, X } from 'lucide-react';
import { MOCK_USER } from '../services/mockData';

export default function ProfilePage({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || 'Ponmughil R');
  const [designation, setDesignation] = useState(user?.designation || 'Senior Statistical Analyst');

  const handleSave = (e) => {
    e.preventDefault();
    if (onUpdateUser) {
      onUpdateUser({ ...user, name, designation });
    }
    setIsEditing(false);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">MoSPI Verified Personnel Profile</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-1">Employee Profile</h1>
        </div>

        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center space-x-1.5"
        >
          <Edit className="w-3.5 h-3.5" />
          <span>Edit Profile Details</span>
        </button>
      </div>

      {/* Main Profile Identity Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={user?.profilePhoto || MOCK_USER.profilePhoto}
            alt={user?.name}
            className="w-20 h-20 rounded-2xl border-2 border-teal-400 object-cover shadow-lg shrink-0"
          />

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-white font-serif">{user?.name || MOCK_USER.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-950 text-teal-300 border border-teal-800 flex items-center">
                <ShieldCheck className="w-3 h-3 mr-1" /> MoSPI Verified
              </span>
            </div>
            <p className="text-xs font-semibold text-teal-300">{user?.designation || MOCK_USER.designation}</p>
            <p className="text-xs text-slate-400">{user?.department || MOCK_USER.department} • {user?.ministry || MOCK_USER.ministry}</p>
            <p className="text-[11px] font-mono text-slate-500">Employee ID: {user?.id || MOCK_USER.id}</p>
          </div>
        </div>

        {/* 4 Quick Performance Pill Box */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Competency Index</span>
            <span className="text-xl font-bold text-teal-400">{user?.overallCompetency || 72}%</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Learning Streak</span>
            <span className="text-xl font-bold text-amber-400">12 Days 🔥</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Courses Completed</span>
            <span className="text-xl font-bold text-blue-400">{user?.completedCoursesCount || 8} Modules</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Quiz Average</span>
            <span className="text-xl font-bold text-purple-400">{user?.quizAverageScore || 84}%</span>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleSave} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 text-white relative">
            <button type="button" onClick={() => setIsEditing(false)} className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400">
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-bold font-serif">Edit Profile</h3>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 rounded-xl text-xs text-slate-400 bg-slate-800">Cancel</button>
              <button type="submit" className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-teal-400">Save Changes</button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
