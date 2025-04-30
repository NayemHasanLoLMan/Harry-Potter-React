// import React from 'react';
// import Header from './components/Header';
// import ChatContainer from './components/ChatContainer';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div 
//       className="min-h-screen bg-black bg-[url('https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?auto=format&fit=crop&q=80')] bg-cover bg-fixed text-ink"
//     >
//       <div className="max-w-3xl mx-auto p-5 min-h-screen flex flex-col">
//         <Header />
//         <ChatContainer />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;


import Header from "./components/Header"
import ChatContainer from "./components/ChatContainer"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import BackgroundEffects from "./components/BackgroundEffects"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#0A1324] via-[#0F172A] to-[#1E293B] text-ink relative overflow-hidden">
        <BackgroundEffects />
        
        {/* Magical decorative elements */}
        <div className="fixed top-20 right-10 w-32 h-32 bg-gryffindor-gold/5 rounded-full blur-3xl"></div>
        <div className="fixed bottom-10 left-20 w-40 h-40 bg-gryffindor-red/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto p-5 min-h-screen flex flex-col relative z-10">
          <Header />
          <ChatContainer />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

