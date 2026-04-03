import ScreenShare from "@/components/ScreenShare";
import CodeViewer from "@/components/CodeViewer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar / Header */}
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter uppercase text-blue-500">
          Cloud Phone Dash
        </h1>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">Owner Online</span>
          </div>
          <div className="bg-gray-800 px-3 py-1 rounded text-xs">
            Device ID: CP-0192-X
          </div>
        </div>
      </nav>

      {/* Dashboard Grid */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {/* Left Section: Screen Sharing */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-300">Live Stream</h2>
            <span className="text-xs text-blue-400 font-mono">Status: Live</span>
          </div>
          <ScreenShare />
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <h3 className="text-sm font-bold mb-2">Kawalan Peranti</h3>
            <div className="grid grid-cols-3 gap-2">
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-xs transition text-center">Home</button>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-xs transition text-center">Back</button>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-xs transition text-center">Recent</button>
            </div>
          </div>
        </section>

        {/* Right Section: Code Viewer */}
        <section className="space-y-4 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-300">Owner Access</h2>
            <span className="text-xs text-green-400 font-mono">Access: Full</span>
          </div>
          <div className="flex-1 min-h-[400px]">
            <CodeViewer />
          </div>
        </section>

      </div>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-black/80 backdrop-blur-md flex justify-between text-[10px] uppercase tracking-widest text-gray-500">
        <div>System v1.0.4 - Secure Connection Active</div>
        <div>Uptime: 24h 12m 04s</div>
      </footer>
    </main>
  );
}
