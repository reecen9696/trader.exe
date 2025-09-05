"use client";

export default function GameArea() {
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
            <span className="text-black font-bold text-sm">Game Area</span>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="h-full flex items-center justify-center text-gray-500 p-4">
        <div>Game will be here...</div>
      </div>
    </div>
  );
}
