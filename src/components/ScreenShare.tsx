"use client";

import React, { useRef, useState } from "react";

const ScreenShare: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startSharing = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsSharing(true);
      setError(null);

      // Handle when the user stops sharing via browser UI
      stream.getVideoTracks()[0].onended = () => {
        stopSharing();
      };
    } catch (err) {
      console.error("Error sharing screen:", err);
      setError("Gagal berkongsi skrin. Sila cuba lagi.");
    }
  };

  const stopSharing = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsSharing(false);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Cloud Phone Screen</h2>
      <div className="relative w-full aspect-video bg-black rounded overflow-hidden border-2 border-blue-500">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-contain"
        />
        {!isSharing && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Skrin belum dikongsi
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-4">
        {!isSharing ? (
          <button
            onClick={startSharing}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Mula Kongsi Skrin
          </button>
        ) : (
          <button
            onClick={stopSharing}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
          >
            Berhenti Berkongsi
          </button>
        )}
      </div>
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ScreenShare;
