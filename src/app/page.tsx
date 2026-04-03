import ScreenShare from "@/components/ScreenShare";
import CodeViewer from "@/components/CodeViewer";

export default function Home() {
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
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">System Online</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-mono text-gray-400">
            ID: CP-0192-X
          </div>
        </div>
      </nav>

      {/* Dashboard Grid */}
      <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto">

        {/* Left Section: Screen Sharing (Visual Feed) */}
        <section className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Visual Feed</h2>
            <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-3 bg-blue-500/40 rounded-full"></div>)}
            </div>
          </div>
          <ScreenShare />

          <div className="bg-gray-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-xs font-black mb-4 uppercase tracking-widest text-gray-500">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-3">
              {['Home', 'Back', 'Recent', 'Volume +', 'Volume -', 'Power'].map(action => (
                <button key={action} className="py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-bold transition-all active:scale-95 uppercase tracking-tighter">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section: Code Viewer & Terminal (Data/Control) */}
        <section className="lg:col-span-7 space-y-6 flex flex-col">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Management Terminal</h2>
            <span className="text-[10px] text-green-400 font-mono bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20 uppercase">Auth: Root</span>
          </div>
          <div className="flex-1 min-h-[500px]">
            <CodeViewer />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: 'CPU Usage', val: '12%', color: 'text-blue-400' },
                { label: 'Memory', val: '4.2GB / 8GB', color: 'text-purple-400' },
                { label: 'Disk', val: '128GB Free', color: 'text-orange-400' },
                { label: 'Network', val: '840 Mbps', color: 'text-green-400' }
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
            <span className="text-blue-500">Secure Core 1.0.4</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <span>Uptime: 24h 12m 04s</span>
        </div>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Documentation</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Support</a>
        </div>
      </footer>
    </main>
  );
}
