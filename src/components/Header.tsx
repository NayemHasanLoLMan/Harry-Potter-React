// import React from 'react';
// import { Wand2 } from 'lucide-react';

// const Header: React.FC = () => {
//   return (
//     <header className="text-center mb-5 bg-gryffindor-red/85 py-5 px-6 rounded-t-lg border-b-4 border-gryffindor-gold text-white shadow-lg">
//       <div className="flex items-center justify-center gap-3 mb-2">
//         <Wand2 size={32} className="text-gryffindor-gold animate-pulse" />
//         <h1 className="font-serif text-3xl md:text-4xl font-bold text-shadow">
//           Harry Potter Chatbot
//         </h1>
//         <Wand2 size={32} className="text-gryffindor-gold animate-pulse" />
//       </div>
//       <p className="italic text-gryffindor-gold/90">
//         Chat with an expert on Harry Potter and the Sorcerer's Stone
//       </p>
//     </header>
//   );
// };

// export default Header;



"use client"

import { Wand2, Moon, Sun, Sparkles } from 'lucide-react'
import { useTheme } from "./ThemeProvider"

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="mb-5 rounded-xl overflow-hidden shadow-2xl animate-fadeIn">
      <div className="relative">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-gryffindor-red/95 to-gryffindor-red/85 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=500')] bg-repeat-x bg-top opacity-10 mix-blend-overlay"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-2 left-4 w-2 h-2 bg-gryffindor-gold rounded-full animate-float opacity-70"></div>
          <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-gryffindor-gold rounded-full animate-float opacity-60" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-4 left-20 w-1 h-1 bg-gryffindor-gold rounded-full animate-float opacity-50" style={{ animationDelay: "1.2s" }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-6 px-8 border-b-4 border-gryffindor-gold">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="animate-castSpell">
                <Wand2 size={32} className="text-gryffindor-gold" />
              </div>

              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-white text-shadow-lg">
                  Harry Potter Chatbot
                </h1>
                <p className="italic text-gryffindor-gold/90 mt-1 flex items-center gap-1.5">
                  Chat with an expert on Harry Potter and the Sorcerer's Stone
                  <Sparkles size={12} className="text-gryffindor-gold inline-block animate-pulse" />
                </p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gryffindor-gold/30 hover:bg-gryffindor-gold/40 transition-all duration-300 text-white hover:scale-105"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

