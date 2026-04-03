"use client";

import React, { useState } from "react";

const CodeViewer: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "// Sistem Diaktifkan",
    "// Menunggu arahan dari Owner...",
  ]);
  const [command, setCommand] = useState("");

  const sendCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const newLogs = [
      ...logs,
      `> ${command}`,
      `// Menjalankan: ${command}...`,
      `// Berjaya: ${new Date().toLocaleTimeString()}`,
    ];
    setLogs(newLogs.slice(-15)); // Simpan 15 log terakhir
    setCommand("");
  };

  return (
    <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg h-full border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Terminal Owner
      </h2>

      <div className="flex-1 bg-black p-4 rounded border border-green-900 overflow-auto font-mono text-green-400 text-xs min-h-[300px]">
        {logs.map((log, i) => (
          <div key={i} className={log.startsWith(">") ? "text-white font-bold" : ""}>
            {log}
          </div>
        ))}
        <div className="mt-2 animate-pulse">_</div>
      </div>

      <form onSubmit={sendCommand} className="mt-4 flex gap-2">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Taip arahan di sini (e.g. restart, logs, unlock)"
          className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded text-sm font-bold transition"
        >
          HANTAR
        </button>
      </form>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => setCommand("adb shell input keyevent 26")}
          className="text-[10px] bg-gray-700 hover:bg-gray-600 p-1 rounded text-gray-300 transition"
        >
          Toggle Power
        </button>
        <button
          onClick={() => setCommand("adb logcat *:E")}
          className="text-[10px] bg-gray-700 hover:bg-gray-600 p-1 rounded text-gray-300 transition"
        >
          Get Error Logs
        </button>
      </div>
    </div>
  );
};

export default CodeViewer;
