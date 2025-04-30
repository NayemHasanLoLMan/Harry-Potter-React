// import React, { useRef, useEffect } from 'react';
// import MessageItem from './MessageItem';
// import { Message } from '../types';

// interface ChatMessagesProps {
//   messages: Message[];
// }

// const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="flex-1 p-5 overflow-y-auto bg-parchment bg-opacity-95 bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] max-h-[65vh]">
//       {messages.map((message) => (
//         <MessageItem key={message.id} message={message} />
//       ))}
//       <div ref={messagesEndRef} />
//     </div>
//   );
// };

// export default ChatMessages;


"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MessageItem from "./MessageItem"
import type { Message } from "../types"

interface ChatMessagesProps {
  messages: Message[]
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 p-5 overflow-y-auto bg-parchment/95 dark:bg-slate-900/95 max-h-[65vh] custom-scrollbar">
      <AnimatePresence initial={false}>
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index === messages.length - 1 ? 0 : 0, // Only delay the latest message
            }}
          >
            <MessageItem message={message} />
          </motion.div>
        ))}
      </AnimatePresence>
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessages
