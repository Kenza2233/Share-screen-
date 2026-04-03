"use client";

import React, { useState } from "react";

const CodeViewer: React.FC = () => {
  const [isRoot, setIsRoot] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "// Sistem Diaktifkan",
    "// Menunggu arahan dari Owner...",
  ]);
  const [command, setCommand] = useState("");

  const sendCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    let response = [`${isRoot ? "#" : ">"} ${command}`, `// Menjalankan: ${command}...`];

    if (command === "su" || command === "sudo") {
        setIsRoot(true);
        response.push("// KEBENARAN ROOT DIBERIKAN", "// Mod Kawalan Penuh Aktif");
    } else if (command === "exit" && isRoot) {
        setIsRoot(false);
        response.push("// KELUAR DARI MOD ROOT");
    } else {
        response.push(`// Berjaya: ${new Date().toLocaleTimeString()}`);
    }

    setLogs([...logs, ...response].slice(-18));
    setCommand("");
  };

  return (
    <div className="flex flex-col p-4 bg-gray-900/80 rounded-2xl shadow-2xl h-full border border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-black text-white flex items-center gap-2 uppercase tracking-widest">
          <span className={`w-2 h-2 rounded-full ${isRoot ? "bg-red-500 animate-ping" : "bg-green-500 animate-pulse"}`}></span>
          {isRoot ? "Root Terminal" : "Owner Terminal"}
        </h2>
        {isRoot && (
            <span className="text-[9px] bg-red-600/20 text-red-400 px-2 py-0.5 rounded border border-red-500/20 font-black uppercase">Full Access</span>
        )}
      </div>

      <div className="flex-1 bg-black/80 p-4 rounded-xl border border-white/5 overflow-auto font-mono text-[11px] min-h-[350px] scrollbar-thin scrollbar-thumb-white/10">
        {logs.map((log, i) => (
          <div key={i} className={
            log.startsWith(">") || log.startsWith("#")
            ? "text-blue-400 font-bold mt-1"
            : log.includes("ROOT") || log.includes("Full Access")
            ? "text-red-500 font-black"
            : "text-green-500/80"
          }>
            {log}
          </div>
        ))}
        <div className="mt-2 flex gap-2 items-center">
            <span className="text-white/40 font-bold">{isRoot ? "root@cloudphone:#" : "owner@cloudphone:>"}</span>
            <span className="w-1.5 h-4 bg-white/20 animate-pulse"></span>
        </div>
      </div>

      <form onSubmit={sendCommand} className="mt-4 flex gap-2">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder={isRoot ? "Taip arahan root..." : "Taip 'su' untuk root access"}
          className="flex-1 bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-xl text-[10px] font-black transition-all active:scale-95 uppercase ${
            isRoot ? "bg-red-600 hover:bg-red-500 text-white" : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
        >
          Run
        </button>
      </form>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => setCommand("su")}
          className="text-[9px] bg-white/5 hover:bg-white/10 p-2 rounded-lg text-gray-400 font-bold border border-white/5 transition"
        >
          Request Root
        </button>
        <button
          onClick={() => setCommand("rm -rf /cache")}
          disabled={!isRoot}
          className="text-[9px] bg-white/5 hover:bg-white/10 p-2 rounded-lg text-gray-400 font-bold border border-white/5 transition disabled:opacity-30"
        >
          Clear Cache (Root Only)
        </button>
      </div>
    </div>
  );
};

export default CodeViewer;
