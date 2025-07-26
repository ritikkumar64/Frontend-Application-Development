import React from "react";
import MessageList from "./MessageList";
import UserInput from "../context/UserInput";
import { useChat } from "../context/ChatContext";

export default function ChatWindow() {
  const { history, loadConversation, saveConversation } = useChat();

  return (
    <div className="chat-window">
      {/* Sidebar for Conversation History */}
      <div className="history-panel">
        <h3>History</h3>
        {history.length === 0 && <p>No saved conversations</p>}
        {history.map((conv, idx) => (
          <button key={idx} className="history-btn" onClick={() => loadConversation(idx)}>
            Conversation {idx + 1}
          </button>
        ))}
      </div>

      {/* Main Chat Area */}
      <div className="chat-area">
        <MessageList />
        <UserInput />
        <button className="save-btn" onClick={saveConversation}>Save Conversation</button>
      </div>
    </div>
  );
}
