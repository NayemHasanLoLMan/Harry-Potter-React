// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="text-center py-3 mt-5 text-parchment italic text-shadow">
//       <p>Powered by Gemini and Pinecone</p>
//     </footer>
//   );
// };

// export default Footer;

"use client"

import { Sparkles, Wand } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="text-center py-5 mt-5 text-white animate-fadeIn">
      <div className="flex items-center justify-center gap-2">
        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gryffindor-gold/50"></div>
        <p className="italic">Powered by</p>
        <div className="animate-float">
          <Wand size={16} className="text-gryffindor-gold" />
        </div>
        <p className="font-medium">Gemini and Pinecone</p>
        <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gryffindor-gold/50"></div>
      </div>
      <div className="mt-2 text-xs text-gryffindor-gold/60">
        <span className="flex items-center justify-center gap-1">
          <Sparkles size={10} />
          <span>Ministry of Magic Approved</span>
          <Sparkles size={10} />
        </span>
      </div>
    </footer>
  )
}

export default Footer
