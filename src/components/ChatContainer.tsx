// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import ChatMessages from './ChatMessages';
// import MessageInput from './MessageInput';
// import LoadingOverlay from './LoadingOverlay';
// import { ChatState, Message } from '../types';
// import { 
//   getSessionId, 
//   getStoredMessages, 
//   storeMessages,
//   sendMessageToApi,
//   clearChatHistory
// } from '../utils/chatUtils';

// const ChatContainer: React.FC = () => {
//   const [chatState, setChatState] = useState<ChatState>({
//     messages: [],
//     isLoading: false,
//     sessionId: '',
//   });

//   // Initialize chat on mount
//   useEffect(() => {
//     const sessionId = getSessionId();
//     const storedMessages = getStoredMessages();
    
//     setChatState({
//       messages: storedMessages,
//       isLoading: false,
//       sessionId,
//     });
//   }, []);

//   // Update local storage when messages change
//   useEffect(() => {
//     if (chatState.messages.length > 0) {
//       storeMessages(chatState.messages);
//     }
//   }, [chatState.messages]);

//   // Handle sending message to FastAPI
//   const handleSendMessage = async (content: string) => {
//     // Create new user message
//     const userMessage: Message = {
//       id: uuidv4(),
//       content,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     // Add user message to state
//     setChatState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, userMessage],
//       isLoading: true,
//     }));

//     // Send to API and get response
//     const botResponse = await sendMessageToApi(content, chatState.sessionId);

//     // Create bot message
//     const botMessage: Message = {
//       id: uuidv4(),
//       content: botResponse,
//       sender: 'bot',
//       timestamp: new Date(),
//     };

//     // Add bot message to state
//     setChatState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, botMessage],
//       isLoading: false,
//     }));
//   };

//   // Handle clearing chat history
//   const handleClearChat = async () => {
//     setChatState((prev) => ({
//       ...prev,
//       isLoading: true,
//     }));

//     const success = await clearChatHistory();

//     if (success) {
//       const welcomeMessage: Message = {
//         id: uuidv4(),
//         content: "Welcome to the wizarding world! I'm your guide to all things related to Harry Potter and the Sorcerer's Stone. What would you like to know about Hogwarts, magical creatures, or Harry's first year at school?",
//         sender: 'bot',
//         timestamp: new Date(),
//       };

//       setChatState((prev) => ({
//         ...prev,
//         messages: [welcomeMessage],
//         isLoading: false,
//       }));
//     } else {
//       setChatState((prev) => ({
//         ...prev,
//         isLoading: false,
//       }));
      
//       alert("There was an error clearing the chat. Please try again.");
//     }
//   };

//   return (
//     <div className="flex-1 flex flex-col bg-parchment/95 rounded-b-lg overflow-hidden shadow-lg">
//       <ChatMessages messages={chatState.messages} />
//       <MessageInput 
//         onSendMessage={handleSendMessage}
//         onClearChat={handleClearChat}
//         isLoading={chatState.isLoading}
//       />
//       <LoadingOverlay isVisible={chatState.isLoading} />
//     </div>
//   );
// };

// export default ChatContainer;



"use client"

import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import ChatMessages from "./ChatMessages"
import MessageInput from "./MessageInput"
import LoadingOverlay from "./LoadingOverlay"
import type { ChatState, Message } from "../types"
import { getSessionId, getStoredMessages, storeMessages, sendMessageToApi, clearChatHistory } from "../utils/chatUtils"
import { Sparkles } from 'lucide-react'

const ChatContainer = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    sessionId: "",
  })

  // Initialize chat on mount
  useEffect(() => {
    const sessionId = getSessionId()
    const storedMessages = getStoredMessages()

    setChatState({
      messages:
        storedMessages.length > 0
          ? storedMessages
          : [
              {
                id: uuidv4(),
                content:
                  "Welcome to the wizarding world! I'm your guide to all things related to Harry Potter and the Sorcerer's Stone. What would you like to know about Hogwarts, magical creatures, or Harry's first year at school?",
                sender: "bot",
                timestamp: new Date(),
              },
            ],
      isLoading: false,
      sessionId,
    })
  }, [])

  // Update local storage when messages change
  useEffect(() => {
    if (chatState.messages.length > 0) {
      storeMessages(chatState.messages)
    }
  }, [chatState.messages])

  // Handle sending message to FastAPI
  const handleSendMessage = async (content: string) => {
    // Create new user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    // Add user message to state
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }))

    // Send to API and get response
    const botResponse = await sendMessageToApi(content, chatState.sessionId)

    // Create bot message
    const botMessage: Message = {
      id: uuidv4(),
      content: botResponse,
      sender: "bot",
      timestamp: new Date(),
    }

    // Add bot message to state
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      isLoading: false,
    }))
  }

  // Handle clearing chat history
  const handleClearChat = async () => {
    setChatState((prev) => ({
      ...prev,
      isLoading: true,
    }))

    const success = await clearChatHistory()

    if (success) {
      const welcomeMessage: Message = {
        id: uuidv4(),
        content:
          "Welcome to the wizarding world! I'm your guide to all things related to Harry Potter and the Sorcerer's Stone. What would you like to know about Hogwarts, magical creatures, or Harry's first year at school?",
        sender: "bot",
        timestamp: new Date(),
      }

      setChatState((prev) => ({
        ...prev,
        messages: [welcomeMessage],
        isLoading: false,
      }))
    } else {
      setChatState((prev) => ({
        ...prev,
        isLoading: false,
      }))

      alert("There was an error clearing the chat. Please try again.")
    }
  }

  return (
    <div className="flex-1 flex flex-col rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/5 dark:bg-black/15 border border-white/20 transition-all duration-300 hover:shadow-gryffindor-gold/10 animate-fadeIn">
      <div className="bg-gradient-to-r from-gryffindor-gold/10 to-transparent py-1 px-2 text-xs font-medium text-gryffindor-gold/80 border-b border-gryffindor-gold/20">
        <span className="flex items-center gap-1">
          <Sparkles size={10} />
          Hogwarts Secure Messaging
        </span>
      </div>
      <ChatMessages messages={chatState.messages} />
      <MessageInput onSendMessage={handleSendMessage} onClearChat={handleClearChat} isLoading={chatState.isLoading} />
      {chatState.isLoading && <LoadingOverlay />}
    </div>
  )
}

export default ChatContainer


