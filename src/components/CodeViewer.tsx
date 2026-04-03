"use client";

import React, { useState } from "react";

const CodeViewer: React.FC = () => {
  const sampleCode = `// Kod dari Cloud Phone Owner
function helloWorld() {
  console.log("Hello from Cloud Phone!");
}

const ownerInfo = {
  name: "Owner A",
  status: "Online",
  connectedDevices: 3,
};

function trackScreenShare() {
  if (isSharing) {
    console.log("Streaming to Owner Dashboard...");
  }
}

// Teruskan mengawal peranti dari sini...
`;

  const [code, setCode] = useState(sampleCode);

  return (
    <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-bold mb-4 text-white">Owner Code View</h2>
      <div className="flex-1 bg-black p-4 rounded border border-green-500 overflow-auto font-mono text-green-400 text-sm">
        <pre className="whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-gray-400 text-xs">
          Nota: Kod ini dipaparkan terus kepada pemilik peranti awan.
        </p>
        <button
          onClick={() => setCode(sampleCode + "\n// Dikemaskini: " + new Date().toLocaleTimeString())}
          className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded transition text-sm"
        >
          Muat Semula Kod
        </button>
      </div>
    </div>
  );
};

export default CodeViewer;
