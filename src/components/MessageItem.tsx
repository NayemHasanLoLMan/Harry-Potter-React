// import React from 'react';
// import { Message } from '../types';
// import { marked } from 'marked';

// interface MessageItemProps {
//   message: Message;
// }

// const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
//   // Set up marked options
//   marked.setOptions({
//     breaks: true,
//     gfm: true,
//   });

//   return (
//     <div 
//       className={`flex mb-5 animate-fadeIn ${
//         message.sender === 'user' ? 'flex-row-reverse' : ''
//       }`}
//     >
//       <div 
//         className={`flex items-center justify-center w-10 h-10 rounded-full text-2xl shadow-md ${
//           message.sender === 'bot' 
//             ? 'bg-gryffindor-gold' 
//             : 'bg-gryffindor-red text-white'
//         }`}
//       >
//         {message.sender === 'bot' ? '🧙‍♂️' : '👤'}
//       </div>
      
//       <div 
//         className={`max-w-[70%] sm:max-w-[75%] p-3 rounded-lg shadow-sm ${
//           message.sender === 'bot'
//             ? 'ml-3 bg-gryffindor-gold/15 border-l-4 border-gryffindor-gold'
//             : 'mr-3 bg-gryffindor-red/10 border-r-4 border-gryffindor-red text-right'
//         }`}
//       >
//         {message.sender === 'bot' ? (
//           <div 
//             className="markdown-content prose prose-sm max-w-none"
//             dangerouslySetInnerHTML={{ __html: marked(message.content) }}
//           />
//         ) : (
//           <p className="whitespace-pre-line">{message.content}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MessageItem;


"use client"

import type { Message } from "../types"
import { marked } from "marked"
import { User, Sparkles, BookOpen } from 'lucide-react'

interface MessageItemProps {
  message: Message
}

const MessageItem = ({ message }: MessageItemProps) => {
  // Set up marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  })

  const isBot = message.sender === "bot"

  return (
    <div className={`flex mb-5 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isBot
            ? "bg-gradient-to-br from-gryffindor-gold to-amber-500"
            : "bg-gradient-to-br from-gryffindor-red to-red-700"
        }`}
      >
        {isBot ? (
          <div className="animate-float">
            <BookOpen size={18} className="text-white" />
          </div>
        ) : (
          <User size={18} className="text-white" />
        )}
      </div>

      <div
        className={`max-w-[80%] sm:max-w-[75%] p-4 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01] ${
          isBot
            ? "ml-3 bg-gradient-to-r from-amber-100/95 to-amber-50/95 dark:from-amber-900/40 dark:to-amber-800/30 dark:text-amber-50 border-l-4 border-gryffindor-gold"
            : "mr-3 bg-gradient-to-r from-red-50/95 to-red-100/95 dark:from-red-900/40 dark:to-red-800/30 dark:text-red-50 border-r-4 border-gryffindor-red text-right"
        }`}
      >
        {isBot ? (
          <div
            className="markdown-content prose prose-sm max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: marked(message.content) }}
          />
        ) : (
          <p className="whitespace-pre-line">{message.content}</p>
        )}
      </div>
    </div>
  )
}

export default MessageItem


