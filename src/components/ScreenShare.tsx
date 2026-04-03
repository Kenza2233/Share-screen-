"use client";

import React, { useRef, useState, useEffect } from "react";

const ScreenShare: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isApiSupported, setIsApiSupported] = useState(true);

  useEffect(() => {
    // Semak sokongan API sebaik sahaja komponen dimuatkan
    const supported = !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia);
    setIsApiSupported(supported);

    if (!supported) {
      setError("Nota: Pelayar ini tidak menyokong perkongsian skrin real (biasanya memerlukan HTTPS atau pelayar moden). Sila gunakan 'Simulasi Demo'.");
    }
  }, []);

  const startSharing = async () => {
    setIsSimulating(false);
    if (!isApiSupported) {
      setError("Pelayar anda tidak menyokong perkongsian skrin real.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsSharing(true);
      setError(null);

      stream.getVideoTracks()[0].onended = () => {
        stopSharing();
      };
    } catch (err: any) {
      console.error("Error sharing screen:", err);
      if (err.name === "NotAllowedError") {
        setError("Kebenaran ditolak. Sila benarkan perkongsian skrin.");
      } else {
        setError("Gagal berkongsi skrin. Sila cuba lagi.");
      }
    }
  };

  const startSimulation = () => {
    stopSharing();
    setIsSimulating(true);
    setIsSharing(true);
    setError(null);
  };

  const stopSharing = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsSharing(false);
    setIsSimulating(false);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
      <div className="flex justify-between w-full mb-4 items-center">
        <h2 className="text-xl font-bold text-white tracking-tight italic">Cloud Stream</h2>
        {isSimulating && (
          <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-1 rounded-full border border-blue-500/30 animate-pulse font-bold">
            • SIMULASI AKTIF
          </span>
        )}
      </div>

      <div className="relative w-full aspect-[9/19] max-w-[280px] bg-[#0a0a0a] rounded-[3rem] overflow-hidden border-[12px] border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Modern Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-3xl z-20 flex items-center justify-center gap-2">
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {isSimulating ? (
          <div className="w-full h-full bg-[#050505] flex flex-col relative overflow-hidden">
             {/* Dynamic BG Effect */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#000_70%)] opacity-50"></div>

             {/* Mock OS Interface */}
             <div className="relative z-10 flex flex-col h-full p-6 pt-10">
                <div className="flex justify-between items-center mb-10">
                    <div className="text-[10px] font-bold text-white/40">9:41</div>
                    <div className="flex gap-1">
                        <div className="w-3 h-2 bg-white/40 rounded-[1px]"></div>
                        <div className="w-3 h-2 bg-white/40 rounded-[1px]"></div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl mb-4 shadow-xl shadow-blue-900/20 flex items-center justify-center text-3xl">
                        📡
                    </div>
                    <h3 className="text-white font-black text-xl mb-1">Android 14</h3>
                    <p className="text-blue-400/80 text-[10px] font-mono uppercase tracking-widest">Connected via Cloud</p>

                    <div className="mt-12 w-full space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 animate-pulse" style={{animationDelay: `${i*0.2}s`}}>
                                <div className="w-4 h-4 bg-white/10 rounded-full mr-3"></div>
                                <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-1 w-24 bg-white/20 rounded-full self-center mb-2"></div>
             </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )}

        {!isSharing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center z-10">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center mb-4">
                <span className="text-2xl">📵</span>
            </div>
            <p className="text-sm font-medium mb-1">Tiada Sambungan</p>
            <p className="text-[9px] opacity-40 uppercase tracking-tighter">Sila pilih kaedah sambungan di bawah</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col w-full gap-3">
        <div className="flex gap-2">
            <button
              onClick={startSharing}
              disabled={!isApiSupported}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 ${
                isApiSupported
                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20"
                : "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
              }`}
            >
              <span>{isApiSupported ? "REAL SHARE" : "NOT SUPPORTED"}</span>
            </button>

            <button
              onClick={isSharing ? stopSharing : startSimulation}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 ${
                isSharing
                ? "bg-red-600/10 text-red-500 border border-red-500/20 hover:bg-red-600/20"
                : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              <span>{isSharing ? "DISCONNECT" : "SIMULASI DEMO"}</span>
            </button>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-950/30 border border-red-900/50 rounded-xl flex items-start gap-3">
            <span className="text-red-500 mt-0.5">⚠️</span>
            <p className="text-[10px] text-red-400 leading-relaxed font-medium">
                {error}
            </p>
        </div>
      )}
    </div>
  );
};

export default ScreenShare;
