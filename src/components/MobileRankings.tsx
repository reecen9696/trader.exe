"use client";

interface MobileRankingsProps {
  onClose: () => void;
}

export default function MobileRankings({ onClose }: MobileRankingsProps) {
  return (
    <div className="fixed inset-0 bg-[#CBDBFC] z-50 md:hidden">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold nes-font">Bot Rankings</h1>
        <button onClick={onClose} className="nes-btn">
          <span>✕</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 h-full">
        <div className="nes-table-responsive h-full">
          <div className="nes-table is-bordered bg-white h-full p-6">
            <div className="nes-container">
              <h3 className="text-lg mb-4">Rankings</h3>
              <p className="text-sm">Rankings content will go here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
