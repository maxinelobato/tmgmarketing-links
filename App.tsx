import React from 'react'
import { CARD_DATA } from './constants'
import Card from './components/Card'
import { CircleNotchIcon } from '@phosphor-icons/react/dist/ssr'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pattern text-white selection:bg-blue-500 selection:text-white pb-0">
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-28 flex flex-col items-center">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-20 md:mb-32 space-y-8 animate-fade-in">
          <div className="animate-float">
            <img src="/images/tmglogo.png" alt="Logo" className="w-16 h-16" />
          </div>
          <div className="text-center space-y-3 px-4">
            <h1 className="text-[10px] text-xs md:text-lg font-black tracking-[0.8em] text-brand-gold uppercase ml-[0.8em] opacity-80">
              TMG Marketing
            </h1>
            <p className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
              Marketing & Estratégia para{' '}
              <span className="text-brand-gold">Advogados</span>.
            </p>
          </div>
        </header>

        {/* Links Grid - Alterado gap-8 para gap-10 no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 w-full">
          {CARD_DATA.map((card, index) => (
            <div
              key={card.id}
              className="animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <Card card={card} />
            </div>
          ))}
        </div>

        {/* Footer Branding */}
        <footer className="text-center mt-36 flex flex-col items-center space-y-6 opacity-20 hover:opacity-60 transition-all duration-1000 group cursor-default">
          <div className="flex items-center space-x-6 text-3xl md:text-5xl font-semibold tracking-tighter">
            <span>TMG</span>
            <span className="text-brand-gold group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-1000 inline-block">
              <CircleNotchIcon
                size={26}
                weight="thin"
                className="w-10 h-10 md:w-12 md:h-12 -rotate-0.1 animate-spin"
              />
            </span>
            <span>MARKETING</span>
          </div>
          <p className="text-[10px] md:text-xs tracking-[0.6em] font-bold text-white/50 uppercase ml-[0.6em]">
            Marketing & Estratégia para Advogados
          </p>
        </footer>
      </main>
      {/* Aesthetic Accents */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[1000px] bg-blue-600/5 blur-[250px] pointer-events-none -z-10 rounded-full"></div>
      <div className="fixed bottom-[-15%] right-[-15%] w-[50vw] h-[50vw] bg-blue-500/5 blur-[200px] pointer-events-none -z-10 rounded-full"></div>
    </div>
  )
}

export default App
