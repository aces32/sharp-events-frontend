import { useState } from 'react';
import ChatDashboard from '../m-chatDashboard';
import ChatList from '../m-chatList';

const VendorChat = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="flex h-full w-full flex-col gap-5 overflow-hidden lg:h-[70vh] lg:flex-row">
      <div className="w-full lg:w-1/3">
        <ChatList selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>

      <div className={`w-full ${selectedId ? 'block' : 'hidden'} lg:block lg:w-2/3`}>
        <ChatDashboard selectedId={selectedId} />
      </div>
    </div>
  );
};

export default VendorChat;
