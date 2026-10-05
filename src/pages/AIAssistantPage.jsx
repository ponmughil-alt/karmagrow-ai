import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquareCode, Sparkles, Send, User, Bot, RefreshCw, HelpCircle, Award, ArrowRight } from 'lucide-react';

export default function AIAssistantPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Namaste Ponmughil! I am your Karma AI Competency Coach. How can I assist with your official statistical training today?",
      time: '10:00 AM'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let aiReply = "In official statistics, stratified random sampling divides a heterogeneous population (e.g. households across rural/urban districts) into homogeneous subgroups (strata). This minimizes sampling variance and ensures proportional representation across state regions.";
      
      if (query.toLowerCase().includes('example')) {
        aiReply = "Real MoSPI Example: In the Periodic Labour Force Survey (PLFS), each state is stratified into rural and urban strata. Within each stratum, villages or urban frame blocks are selected as Primary Sampling Units (PSUs), followed by household selection.";
      } else if (query.toLowerCase().includes('simply') || query.toLowerCase().includes('simple')) {
        aiReply = "Simple Analogy: Imagine sorting a mixed bowl of fruits into separate bowls of apples, oranges, and bananas, then picking 2 from each bowl. That guarantees you taste every fruit, instead of randomly picking only apples!";
      } else if (query.toLowerCase().includes('test')) {
        aiReply = "Ready for practice! Click below to launch the AI Assessment Generator with 5 practice questions tailored to your gap profile.";
      }

      setMessages(prev => [...prev, {
        sender: 'ai',
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 text-slate-100 font-sans max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-400 to-indigo-600 p-0.5 shadow-lg">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white font-serif">Karma AI Learning Assistant</h1>
            <p className="text-xs text-slate-400">Your personal MoSPI statistical competency coach</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/quiz-generator')}
          className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md flex items-center space-x-1"
        >
          <Award className="w-4 h-4" />
          <span>Launch AI Assessment</span>
        </button>
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="flex flex-wrap gap-2">
        {[
          "What is stratified sampling?",
          "Explain this topic simply.",
          "Give me an example.",
          "Create 5 practice questions."
        ].map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-xs text-slate-300 transition-all"
          >
            💡 {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl h-[440px] overflow-y-auto space-y-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start space-x-3 ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
              m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-teal-950 border border-teal-500/40 text-teal-300'
            }`}>
              {m.sender === 'user' ? 'P' : <Bot className="w-4 h-4" />}
            </div>

            <div className={`max-w-xl p-4 rounded-2xl text-xs leading-relaxed ${
              m.sender === 'user'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none'
                : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              <p>{m.text}</p>
              <span className="text-[9px] text-slate-400 mt-1 block text-right">{m.time}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center space-x-2 text-xs text-teal-400">
            <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
            <span>Karma AI is composing response...</span>
          </div>
        )}
      </div>

      {/* Quick Action Pills */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleSendMessage("Explain this topic simply.")}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:bg-slate-800"
        >
          Explain Simply
        </button>
        <button
          onClick={() => handleSendMessage("Give me an example.")}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:bg-slate-800"
        >
          Give Example
        </button>
        <button
          onClick={() => navigate('/quiz-generator')}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-teal-400 hover:bg-slate-800 font-semibold"
        >
          Test Me
        </button>
      </div>

      {/* Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="relative"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask anything about your learning material or statistical concepts..."
          className="w-full pl-4 pr-12 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xl"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
