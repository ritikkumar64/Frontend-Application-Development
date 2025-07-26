import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const sendMessage = (msg) => {
    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: "AI Response: " + msg }]);
      setLoading(false);
    }, 1000);
  };

  const saveConversation = () => {
    setHistory((prev) => [...prev, messages]);
  };

  const loadConversation = (index) => {
    setMessages(history[index]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        inputValue,
        setInputValue,
        loading,
        sendMessage,
        history,
        saveConversation,
        loadConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
