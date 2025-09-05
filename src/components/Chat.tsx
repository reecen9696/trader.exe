"use client";

import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [botResponse, setBotResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    setMessage(""); // Clear input
    setIsThinking(true);
    setBotResponse(""); // Clear previous response

    // Simulate thinking delay
    setTimeout(() => {
      setIsThinking(false);
      // Generate a simple bot response
      setBotResponse(
        `I received your message: "${userMessage}". How can I help you with trading today?`
      );
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="h-full bg-white border-4 border-black flex flex-col">
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
            <span className="text-black font-bold text-sm">Chat</span>
          </div>
        </div>
      </div>

      {/* Chat Content Area */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 flex flex-col justify-end">
          {/* Bot Response Bubble */}
          {(isThinking || botResponse) && (
            <div className="mb-3">
              {isThinking ? (
                <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                  <div className="text-sm text-gray-600 italic">
                    thinking...
                  </div>
                </div>
              ) : (
                <div className="bg-blue-100 rounded-lg p-3 max-w-md">
                  <div className="text-sm text-black">{botResponse}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="nes-input flex-1 text-sm"
            disabled={isThinking}
          />
          <button
            type="submit"
            disabled={isThinking || !message.trim()}
            className="nes-btn is-primary text-xs px-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
