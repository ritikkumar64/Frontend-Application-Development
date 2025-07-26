import React from "react";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./context/ChatContext";

export default function App() {
  return (
    <ChatProvider>
      <div className="app-container">
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}
