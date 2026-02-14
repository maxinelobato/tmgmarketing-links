import React from 'react'
import { CARD_DATA } from './constants'
import Card from './components/Card'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pattern text-white selection:bg-blue-500 selection:text-white pb-0">
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-28 flex flex-col items-center">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-20 md:mb-32 space-y-8 animate-fade-in">
          <div className="animate-float">
            <img src="/assets/tmglogo.png" alt="Logo" className="w-16 h-16" />
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
        <footer className="text-center mt-36 flex flex-col items-center space-y-6 opacity-20 hover:opacity-100 transition-all duration-1000 group cursor-default">
          <div className="flex items-center space-x-6 text-4xl md:text-6xl font-black tracking-tighter">
            <span>TMG</span>
            <span className="text-brand-gold group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-1000 inline-block">
              <svg
                viewBox="0 0 256 256"
                width="26"
                height="26"
                fill="#ffffff"
                className="w-10 h-10 md:w-12 md:h-12 rotate-45"
              >
                <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z" />
              </svg>
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
