"use client";

export default function DepositWithdraw() {
  return (
    <div className="h-full bg-white border-4 border-black">
      {/* Custom Heading Section */}
      <div className="flex">
        {/* Left div - Red background */}
        <div className="w-16 bg-[#AF1F1F] relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E33D44]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-black"></div>
          <div className="h-10"></div>
        </div>
        {/* Right div - Gray background with title */}
        <div className="flex-1 bg-[#9B9B8F] relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#CBDBFC]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          <div className="h-10 flex items-center px-3">
            <span className="text-black font-bold text-sm">Wallet</span>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="flex-1 p-4 flex flex-col overflow-hidden">
        {/* Balance - at top */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-black font-bold text-sm">$1,250.00</span>
            <img
              src="/usdc.png"
              alt="USDC"
              className="w-5 h-5 rounded-full"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>

        {/* Spacer to push controls to bottom */}
        <div className="flex-1 min-h-0"></div>

        {/* Controls at bottom */}
        <div className="space-y-2 flex-shrink-0">
          {/* Amount Input */}
          <div className="space-y-1">
            <label className="block text-black font-bold text-xs">
              Amount (USDC):
            </label>
            <input
              type="number"
              placeholder="Enter amount..."
              className="nes-input w-full text-xs"
              min="0"
              step="0.01"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="nes-btn is-primary flex-1 text-xs py-1">
              Deposit
            </button>
            <button className="nes-btn is-error flex-1 text-xs py-1">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
