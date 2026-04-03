"use client";

import React, { useRef, useState, useEffect } from "react";

const ScreenShare: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startSharing = async () => {
    setIsSimulating(false);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      setError("Pelayar anda tidak menyokong perkongsian skrin.");
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
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex justify-between w-full mb-4 items-center">
        <h2 className="text-xl font-bold text-white">Cloud Phone Screen</h2>
        {isSimulating && (
          <span className="bg-yellow-600 text-white text-[10px] px-2 py-0.5 rounded animate-pulse">
            SIMULASI
          </span>
        )}
      </div>

      <div className="relative w-full aspect-[9/16] max-w-[300px] bg-black rounded-[2rem] overflow-hidden border-[8px] border-gray-800 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"></div>

        {isSimulating ? (
          <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex flex-col items-center justify-center p-6 text-center">
             <div className="w-16 h-16 bg-white/20 rounded-2xl mb-4 animate-bounce flex items-center justify-center text-3xl">📱</div>
             <p className="text-white font-bold text-lg mb-2">Peranti Cloud Aktif</p>
             <p className="text-white/60 text-xs">Menerima data dari pelayan...</p>
             <div className="mt-8 grid grid-cols-3 gap-3 w-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square bg-white/10 rounded-lg animate-pulse"></div>
                ))}
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-6 text-center">
            <p className="mb-2">Skrin belum dikongsi</p>
            <p className="text-[10px] opacity-50 text-white italic">Klik butang di bawah untuk memulakan</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {!isSharing ? (
          <>
            <button
              onClick={startSharing}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition text-sm"
            >
              Kongsi Skrin Real
            </button>
            <button
              onClick={startSimulation}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition text-sm"
            >
              Simulasi Demo
            </button>
          </>
        ) : (
          <button
            onClick={stopSharing}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
          >
            Tutup Sambungan
          </button>
        )}
      </div>
      {error && <p className="mt-4 text-red-500 text-sm bg-red-500/10 px-3 py-1 rounded border border-red-500/20">{error}</p>}
    </div>
  );
};

export default ScreenShare;
