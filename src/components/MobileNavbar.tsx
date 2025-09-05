"use client";

interface MobileNavbarProps {
  onWalletClick: () => void;
  onRankingsClick: () => void;
  onStatsClick: () => void;
  onAccountClick: () => void;
  onGameClick: () => void;
  activeView: string | null;
}

export default function MobileNavbar({
  onWalletClick,
  onRankingsClick,
  onStatsClick,
  onAccountClick,
  onGameClick,
  activeView,
}: MobileNavbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black md:hidden">
      <div className="flex">
        <button
          onClick={onGameClick}
          className={`flex-1 py-3 px-2 text-center nes-font text-xs ${
            activeView === null ? "bg-gray-200" : ""
          }`}
        >
          🎮 Game
        </button>
        <button
          onClick={onWalletClick}
          className={`flex-1 py-3 px-2 text-center nes-font text-xs ${
            activeView === "wallet" ? "bg-gray-200" : ""
          }`}
        >
          💰 Wallet
        </button>
        <button
          onClick={onRankingsClick}
          className={`flex-1 py-3 px-2 text-center nes-font text-xs ${
            activeView === "rankings" ? "bg-gray-200" : ""
          }`}
        >
          🏆 Rankings
        </button>
        <button
          onClick={onStatsClick}
          className={`flex-1 py-3 px-2 text-center nes-font text-xs ${
            activeView === "stats" ? "bg-gray-200" : ""
          }`}
        >
          📊 Stats
        </button>
        <button
          onClick={onAccountClick}
          className={`flex-1 py-3 px-2 text-center nes-font text-xs ${
            activeView === "account" ? "bg-gray-200" : ""
          }`}
        >
          👤 Account
        </button>
      </div>
    </div>
  );
}
