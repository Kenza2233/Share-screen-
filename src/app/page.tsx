"use client";

import React, { useState } from "react";
import ScreenShare from "@/components/ScreenShare";
import CodeViewer from "@/components/CodeViewer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"stream" | "files" | "analytics">("stream");

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Navbar / Header */}
      <nav className="p-5 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black italic shadow-lg shadow-blue-900/40">C</div>
            <h1 className="text-xl font-black tracking-tighter uppercase text-white">
            Cloud<span className="text-blue-500">Phone</span> Dash
            </h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Online</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-mono text-gray-400">
            ID: CP-0192-X
          </div>
        </div>
      </nav>

      {/* Dashboard Grid */}
      <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto">

        {/* Left Section: Visual Feed & Controls */}
        <section className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Live Stream</h2>
            <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-3 bg-blue-500/40 rounded-full"></div>)}
            </div>
          </div>
          <ScreenShare />

          <div className="bg-gray-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-xs font-black mb-4 uppercase tracking-widest text-gray-500">Owner Remote</h3>
            <div className="grid grid-cols-3 gap-3">
              {['Home', 'Back', 'Recent', 'Volume +', 'Volume -', 'Power'].map(action => (
                <button key={action} className="py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-bold transition-all active:scale-95 uppercase tracking-tighter">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section: Owner Views (Multi-Tab) */}
        <section className="lg:col-span-7 space-y-6 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/5 w-fit">
            <button
                onClick={() => setActiveTab("stream")}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'stream' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Terminal
            </button>
            <button
                onClick={() => setActiveTab("files")}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'files' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
            >
                File Manager
            </button>
            <button
                onClick={() => setActiveTab("analytics")}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Analytics
            </button>
          </div>

          <div className="flex-1 min-h-[550px]">
            {activeTab === 'stream' && <CodeViewer />}
            {activeTab === 'files' && (
                <div className="h-full bg-gray-900/40 rounded-2xl border border-white/5 p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl mb-4">📂</div>
                    <h3 className="font-bold text-lg mb-2">Cloud File Manager</h3>
                    <p className="text-xs text-gray-500 max-w-xs">Akses fail sistem secara langsung. Pastikan anda menyemak fail sebelum melakukan sebarang perubahan.</p>
                    <div className="mt-8 w-full max-w-md space-y-2">
                        {['/system', '/data', '/cache', '/storage'].map(dir => (
                            <div key={dir} className="flex justify-between p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] font-mono">
                                <span className="text-blue-400">{dir}</span>
                                <span className="text-gray-600">drwxr-xr-x</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeTab === 'analytics' && (
                <div className="h-full bg-gray-900/40 rounded-2xl border border-white/5 p-8">
                    <h3 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-gray-400">System Performance</h3>
                    <div className="space-y-6">
                        {[
                            { label: 'CPU LOAD', val: 12, color: 'bg-blue-500' },
                            { label: 'RAM USAGE', val: 54, color: 'bg-purple-500' },
                            { label: 'NETWORK IO', val: 78, color: 'bg-green-500' },
                            { label: 'BATTERY', val: 92, color: 'bg-yellow-500' }
                        ].map(stat => (
                            <div key={stat.label}>
                                <div className="flex justify-between text-[9px] font-bold mb-2 uppercase tracking-widest">
                                    <span>{stat.label}</span>
                                    <span>{stat.val}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${stat.color}`} style={{ width: `${stat.val}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: 'Status', val: 'Protected', color: 'text-blue-400' },
                { label: 'Uptime', val: '128h 44m', color: 'text-purple-400' },
                { label: 'Region', val: 'SG-EAST', color: 'text-orange-400' },
                { label: 'Encryption', val: 'AES-256', color: 'text-green-400' }
            ].map(stat => (
                <div key={stat.label} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">{stat.label}</div>
                    <div className={`text-sm font-black ${stat.color}`}>{stat.val}</div>
                </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer / Status Bar */}
      <footer className="mt-10 p-6 border-t border-white/5 bg-black flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold">
        <div className="flex items-center gap-4">
            <span className="text-blue-500 italic">Cloud Phone Pro</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <span>Version 2.4.0-Stable</span>
        </div>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Support Center</a>
            <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">API Access</a>
        </div>
      </footer>
    </main>
  );
}
