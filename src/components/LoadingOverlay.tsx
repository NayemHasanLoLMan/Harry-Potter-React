// import React from 'react';
// import { Zap } from 'lucide-react';

// interface LoadingOverlayProps {
//   isVisible: boolean;
// }

// const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
//   if (!isVisible) return null;
  
//   return (
//     <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 animate-fadeIn">
//       <div className="text-center text-white">
//         <div className="animate-castSpell inline-block mb-3">
//           <Zap size={48} className="text-gryffindor-gold" />
//         </div>
//         <p className="text-xl">Casting spell...</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingOverlay;

"use client"

import { Wand2, Sparkles } from 'lucide-react'

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 animate-fadeIn">
      <div className="text-center p-8 rounded-xl bg-black/40 border border-gryffindor-gold/30 max-w-md">
        <div className="inline-block mb-5 animate-castSpell">
          <div className="relative">
            <Wand2 size={64} className="text-gryffindor-gold" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white animate-glow"></div>
            {/* Magic sparkles */}
            <div className="absolute -top-1 -left-1 animate-float" style={{ animationDelay: "0.1s" }}>
              <Sparkles size={16} className="text-gryffindor-gold/70" />
            </div>
            <div className="absolute -bottom-2 -right-1 animate-float" style={{ animationDelay: "0.5s" }}>
              <Sparkles size={14} className="text-gryffindor-gold/60" />
            </div>
          </div>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <p className="text-2xl font-serif text-white mb-2 text-shadow-lg">Casting spell...</p>
          <div className="flex justify-center space-x-2">
            <div
              className="w-3 h-3 rounded-full bg-gryffindor-gold animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-gryffindor-gold animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-gryffindor-gold animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          
          <p className="text-gryffindor-gold/80 text-sm mt-4 italic font-serif">
            "Patience is a virtue, even in the wizarding world."
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay

