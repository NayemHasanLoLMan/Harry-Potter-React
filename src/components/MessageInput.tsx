// import React, { useState, useRef, useEffect } from 'react';
// import { Send, Eraser } from 'lucide-react';

// interface MessageInputProps {
//   onSendMessage: (message: string) => void;
//   onClearChat: () => void;
//   isLoading: boolean;
// }

// const MessageInput: React.FC<MessageInputProps> = ({ 
//   onSendMessage, 
//   onClearChat,
//   isLoading 
// }) => {
//   const [message, setMessage] = useState('');
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   // Auto-resize textarea
//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   }, [message]);

//   const handleSend = () => {
//     const trimmedMessage = message.trim();
//     if (trimmedMessage && !isLoading) {
//       onSendMessage(trimmedMessage);
//       setMessage('');
      
//       // Reset height
//       if (textareaRef.current) {
//         textareaRef.current.style.height = 'auto';
//       }
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleClearConfirm = () => {
//     if (window.confirm('Are you sure you want to clear this conversation?')) {
//       onClearChat();
//     }
//   };

//   return (
//     <div className="p-4 bg-hogwarts-stone border-t-3 border-gryffindor-gold flex flex-col">
//       <textarea
//         ref={textareaRef}
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Ask me anything about Harry Potter..."
//         className="w-full p-3 border-2 border-gryffindor-gold rounded-lg text-base bg-parchment min-h-[60px] max-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-gryffindor-red transition-all duration-200 mb-3"
//         disabled={isLoading}
//       />
      
//       <div className="flex justify-between">
//         <button
//           onClick={handleClearConfirm}
//           className="flex items-center gap-2 py-2 px-4 bg-hogwarts-stone border border-ink rounded-md text-white font-medium hover:bg-hogwarts-stone/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
//           disabled={isLoading}
//           title="Clear conversation"
//         >
//           <Eraser size={18} />
//           <span>Clear Chat</span>
//         </button>
        
//         <button
//           onClick={handleSend}
//           className="flex items-center gap-2 py-2 px-5 bg-gryffindor-gold text-ink rounded-md font-medium hover:bg-gryffindor-gold/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
//           disabled={!message.trim() || isLoading}
//         >
//           <span>Send</span>
//           <Send size={18} className="send-icon" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MessageInput;

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Eraser, Sparkles, Wand2 } from 'lucide-react'

interface MessageInputProps {
  onSendMessage: (message: string) => void
  onClearChat: () => void
  isLoading: boolean
}

const MessageInput = ({ onSendMessage, onClearChat, isLoading }: MessageInputProps) => {
  const [message, setMessage] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  const handleSend = () => {
    const trimmedMessage = message.trim()
    if (trimmedMessage && !isLoading) {
      onSendMessage(trimmedMessage)
      setMessage("")

      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleClearConfirm = () => {
    if (window.confirm("Are you sure you want to clear this conversation?")) {
      onClearChat()
    }
  }

  return (
    <div className="p-5 bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-t border-white/10">
      <div className={`relative mb-4 transition-all duration-300 ${isFocused ? "ring-2 ring-gryffindor-gold/50 transform scale-[1.01]" : ""}`}>
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask me anything about Harry Potter..."
          className="w-full p-4 pr-12 border border-white/20 rounded-xl text-base bg-white/10 dark:bg-black/30 backdrop-blur-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 min-h-[60px] max-h-[120px] resize-none focus:outline-none transition-all duration-200"
          disabled={isLoading}
        />
        <div className={`absolute right-3 top-3 text-gryffindor-gold/80 ${isFocused ? "animate-float" : ""}`}>
          <Wand2 size={24} />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleClearConfirm}
          className="flex items-center gap-2 py-2 px-4 bg-slate-700/70 backdrop-blur-sm border border-white/10 rounded-lg text-white font-medium hover:bg-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
          title="Clear conversation"
        >
          <Eraser size={18} />
          <span>Clear Chat</span>
        </button>

        <button
          onClick={handleSend}
          className="flex items-center gap-2 py-2 px-5 bg-gradient-to-r from-gryffindor-gold to-amber-500 text-black rounded-lg font-medium hover:from-amber-500 hover:to-gryffindor-gold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gryffindor-gold/20"
          disabled={!message.trim() || isLoading}
        >
          <span>Send</span>
          <Send size={18} className="send-icon" />
        </button>
      </div>
    </div>
  )
}

export default MessageInput


