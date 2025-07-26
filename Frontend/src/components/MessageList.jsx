import React from "react";
import { useChat } from "../context/ChatContext";
import Message from "./Message";

export default function MessageList() {
  const { messages, loading } = useChat();

  return (
    <div className="message-list">
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} />
      ))}
      {loading && <p className="loading">AI is typing...</p>}
    </div>
  );
}
