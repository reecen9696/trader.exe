"use client";

export default function BotStats() {
  return (
    <div className="h-full bg-white border-4 border-black flex flex-col">
      {/* Custom Heading Section (unchanged colors/styling) */}
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
            <span className="text-black font-bold text-sm">Bot Stats</span>
          </div>
        </div>
      </div>

      {/* Content Area: only layout adjusted */}
      <div className="flex-1 p-3 flex flex-col">
        {/* TOP: Bot Info */}
        <div>
          <div className="space-y-1 text-xs">
            <div>
              <span className="font-bold">Bot Name:</span> AlphaTrader Pro
            </div>
            <div>
              <span className="font-bold">Owner:</span> @tradeMaster
            </div>
          </div>
        </div>

        {/* CENTER: Core Stats */}
        <div className="mt-auto mb-auto">
          <div className="space-y-2 pr-2">
            {/* IQ */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold">IQ</span>
                <span>85/100</span>
              </div>
              <progress
                className="nes-progress is-success solid-border"
                value="85"
                max="100"
              ></progress>
            </div>

            {/* Stress */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold">Stress</span>
                <span>30/100</span>
              </div>
              <progress
                className="nes-progress is-warning solid-border"
                value="30"
                max="100"
              ></progress>
            </div>

            {/* Charisma */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold">Charisma</span>
                <span>72/100</span>
              </div>
              <progress
                className="nes-progress is-primary solid-border"
                value="72"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        {/* BOTTOM: Performance & Trading Details */}
        <div className="mt-auto">
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="font-bold">PnL:</span>
              <span className="text-green-600">+$2,847.32</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Win %:</span>
              <span>68.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Liquidity:</span>
              <div className="flex items-center gap-1">
                <span>$15,420</span>
                <img
                  src="/usdc.png"
                  alt="USDC"
                  className="w-3 h-3 rounded-full"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Pairs:</span>
              <span>USDC, SOL, ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Indicators:</span>
              <span>RWA 2CA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
