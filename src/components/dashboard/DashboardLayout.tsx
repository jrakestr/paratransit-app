import React, { useState } from 'react';
import { CardGrid } from './cards/CardGrid';
import { ChatPanel } from './chat/ChatPanel';

export function DashboardLayout() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Card Grid - 70% width on desktop */}
        <div className={`flex-1 min-w-0 ${isChatOpen ? 'lg:w-[70%]' : 'w-full'}`}>
          <div className="h-full overflow-y-auto px-4 py-6">
            <CardGrid />
          </div>
        </div>

        {/* Chat Panel - 30% width on desktop */}
        <div 
          className={`fixed inset-y-0 right-0 w-96 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${
            isChatOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:relative lg:translate-x-0 ${
            isChatOpen ? 'lg:w-[30%]' : 'lg:w-0'
          }`}
        >
          <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      </div>
    </div>
  );
}