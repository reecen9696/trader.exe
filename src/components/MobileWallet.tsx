"use client";

interface MobileWalletProps {
  onClose: () => void;
}

export default function MobileWallet({ onClose }: MobileWalletProps) {
  return (
    <div className="fixed inset-0 bg-[#CBDBFC] z-50 md:hidden">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold nes-font">Wallet</h1>
        <button onClick={onClose} className="nes-btn">
          <span>✕</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 h-full">
        <div className="nes-table-responsive h-full">
          <div className="nes-table is-bordered bg-white h-full p-6">
            <div className="nes-container">
              <h3 className="text-lg mb-4">Deposit/Withdraw</h3>
              <p className="text-sm">Wallet functions will go here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
