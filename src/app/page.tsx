"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import GameArea from "@/components/GameArea";
import Rankings from "@/components/Rankings";
import BotStats from "@/components/BotStats";
import DepositWithdraw from "@/components/DepositWithdraw";
import Chat from "@/components/Chat";
import MobileNavbar from "@/components/MobileNavbar";
import MobileWallet from "@/components/MobileWallet";
import MobileRankings from "@/components/MobileRankings";
import MobileBotStats from "@/components/MobileBotStats";
import MobileAccount from "@/components/MobileAccount";

export default function Home() {
  const [mobileView, setMobileView] = useState<string | null>(null);

  const handleCloseMobileView = () => {
    setMobileView(null);
  };

  return (
    <div className="h-screen bg-[#CBDBFC] flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-4 gap-4 overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-col gap-4 h-full">
          {/* Top Row - Main Content */}
          <div className="flex gap-4 flex-1">
            {/* Left Sidebar - Rankings */}
            <div style={{ width: "20%" }}>
              <Rankings />
            </div>

            {/* Middle Column - Game Area */}
            <div style={{ width: "60%" }} className="flex flex-col gap-4">
              {/* Game Area */}
              <div style={{ height: "67%" }}>
                <GameArea />
              </div>
              {/* Chat Area */}
              <div style={{ height: "33%" }}>
                <Chat />
              </div>
            </div>

            {/* Right Sidebar - Bot Stats & Wallet */}
            <div style={{ width: "20%" }} className="flex flex-col gap-4">
              {/* Bot Stats */}
              <div style={{ height: "67%" }}>
                <BotStats />
              </div>
              {/* Wallet */}
              <div style={{ height: "33%" }}>
                <DepositWithdraw />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden h-full pb-16">
          {/* Show different content based on mobile view */}
          {mobileView === null && (
            <div className="h-full">
              <GameArea />
            </div>
          )}
          {mobileView === "wallet" && (
            <div className="h-full">
              <DepositWithdraw />
            </div>
          )}
          {mobileView === "rankings" && (
            <div className="h-full">
              <Rankings />
            </div>
          )}
          {mobileView === "stats" && (
            <div className="h-full">
              <BotStats />
            </div>
          )}
          {mobileView === "account" && (
            <div className="h-full">
              <div className="nes-table-responsive h-full">
                <table className="nes-table is-bordered is-centered w-full h-full">
                  <thead>
                    <tr>
                      <th className="text-center">Account</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="h-full">
                        <div className="h-full flex items-center justify-center text-gray-500">
                          Account settings coming soon...
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNavbar
        onGameClick={() => setMobileView(null)}
        onWalletClick={() => setMobileView("wallet")}
        onRankingsClick={() => setMobileView("rankings")}
        onStatsClick={() => setMobileView("stats")}
        onAccountClick={() => setMobileView("account")}
        activeView={mobileView}
      />
    </div>
  );
}
