"use client";

import React, { useRef, useState, useEffect } from "react";

const ScreenShare: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streamType, setStreamType] = useState<"none" | "cloud" | "local">("none");
  const [error, setError] = useState<string | null>(null);
  const [latency, setLatency] = useState(24);
  const [isApiSupported, setIsApiSupported] = useState(true);

  useEffect(() => {
    setIsApiSupported(!!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia));

    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 15) + 20);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startLocalShare = async () => {
    if (!isApiSupported) {
      setError("Pelayar anda tidak menyokong perkongsian skrin real.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStreamType("local");
      setError(null);
      stream.getVideoTracks()[0].onended = () => stopStream();
    } catch (err: any) {
      console.error(err);
      setError(err.name === "NotAllowedError" ? "Kebenaran ditolak." : "Gagal berkongsi skrin.");
    }
  };

  const startCloudStream = () => {
    stopStream();
    setStreamType("cloud");
    setError(null);
  };

  const stopStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setStreamType("none");
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 w-full max-w-md mx-auto">
      <div className="flex justify-between w-full mb-4 items-center px-2">
        <div>
            <h2 className="text-lg font-black text-white italic tracking-tighter uppercase">Cloud Remote</h2>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${streamType !== "none" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
                <span className="text-[10px] text-gray-400 font-mono uppercase">
                    {streamType === "none" ? "Disconnected" : `Live: ${streamType.toUpperCase()}`}
                </span>
            </div>
        </div>
        <div className="flex items-center gap-3">
            {streamType !== "none" && (
                <div className="bg-red-500/10 text-red-500 text-[8px] font-black border border-red-500/20 px-2 py-0.5 rounded tracking-widest animate-pulse">ROOT ACTIVE</div>
            )}
            <div className="text-right">
                <div className="text-[10px] text-blue-400 font-bold uppercase">Latency</div>
                <div className="text-xs font-mono text-white">{latency}ms</div>
            </div>
        </div>
      </div>

      {/* Phone Frame */}
      <div className="relative w-full aspect-[9/19] bg-[#050505] rounded-[3.5rem] overflow-hidden border-[12px] border-[#1a1a1a] shadow-inner ring-1 ring-white/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-b-3xl z-30 flex items-center justify-center">
            <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Stream Content */}
        {streamType === "cloud" ? (
          <div className="w-full h-full bg-black flex flex-col relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black pointer-events-none"></div>
             <div className="relative z-10 flex flex-col h-full p-6 pt-10 text-white">
                <div className="flex justify-between text-[10px] font-bold opacity-60">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                        <span>5G</span>
                        <div className="w-4 h-2 border border-white/40 rounded-[2px]"></div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center mt-10">
                    <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-4xl mb-6 shadow-2xl ring-1 ring-white/10">
                        📱
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="font-bold text-xl tracking-tight">Android Cloud</h3>
                        <p className="text-xs text-blue-400 font-medium italic">Root Access Protocol Active</p>
                    </div>

                    <div className="mt-12 w-full grid grid-cols-3 gap-4 px-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 animate-pulse" style={{animationDelay: `${i*0.1}s`}}></div>
                        ))}
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="h-12 flex items-center justify-around opacity-40">
                    <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                    <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-r-[12px] border-r-white"></div>
                </div>
                <div className="h-1 w-32 bg-white/20 rounded-full self-center mb-2"></div>
             </div>
          </div>
        ) : streamType === "local" ? (
          <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 p-10 text-center">
            <div className="text-4xl mb-4 grayscale opacity-50">📡</div>
            <p className="text-sm font-bold text-white/40 mb-1 tracking-tight">Menunggu Sambungan...</p>
            <p className="text-[9px] uppercase tracking-widest opacity-30">Pilih Punca Media Di Bawah</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-col w-full gap-3 px-2">
        {streamType === "none" ? (
          <>
            <button
              onClick={startCloudStream}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-2xl transition shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 uppercase"
            >
              🚀 Sambungkan Cloud Phone
            </button>
            <div className="flex gap-2">
                <button
                onClick={startLocalShare}
                disabled={!isApiSupported}
                className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 text-gray-300 font-bold text-[10px] rounded-xl transition border border-white/5 uppercase"
                >
                🖥️ Share Screen (Desktop)
                </button>
            </div>
          </>
        ) : (
          <button
            onClick={stopStream}
            className="w-full py-4 bg-red-600/10 text-red-500 border border-red-600/20 hover:bg-red-600/20 font-black text-sm rounded-2xl transition uppercase"
          >
            ⏹️ Putuskan Sambungan
          </button>
        )}
      </div>

      {error && (
        <div className="mt-4 w-full p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-[10px] text-red-400 font-bold flex items-center gap-2">
            <span>⚠️</span> {error}
        </div>
      )}
    </div>
  );
};

export default ScreenShare;
