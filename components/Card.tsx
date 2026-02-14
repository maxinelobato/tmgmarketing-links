import React, { useEffect, useRef, useState } from 'react'
import { BioLinkCard } from '../types'

interface CardProps {
  card: BioLinkCard
}

const Card: React.FC<CardProps> = ({ card }) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const contentParallaxRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (
        !containerRef.current ||
        !parallaxRef.current ||
        !contentParallaxRef.current
      )
        return

      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const centerY = rect.top + rect.height / 2
        const distanceFromCenter = centerY - viewportHeight / 2

        // Background moves slower than scroll (parallax effect)
        const bgOffset = distanceFromCenter * 0.06
        parallaxRef.current.style.transform = `translate3d(0, ${bgOffset}px, 0)`

        // Text content moves even slower than the background to create depth
        const textOffset = distanceFromCenter * 0.02
        contentParallaxRef.current.style.transform = `translate3d(0, ${textOffset}px, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInteractionStart = () => setIsClicked(true)
  const handleInteractionEnd = () => setIsClicked(false)

  const titleParts = card.title.split(' ')
  const mainTitle = titleParts.slice(0, -1).join(' ')
  const highlightTitle = titleParts[titleParts.length - 1]

  const avifUrl = card.imageUrl.replace('auto=format', 'fm=avif')
  const webpUrl = card.imageUrl.replace('auto=format', 'fm=webp')

  return (
    <a
      href={card.link}
      className="card-container relative block w-full group outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] rounded-[2.5rem] md:rounded-[4rem] transition-all duration-300"
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      {/* Gradient Border Wrapper */}
      <div
        ref={containerRef}
        className={`relative p-[1.5px] bg-gradient-to-r from-brand-gold to-yellow-600 rounded-[2rem] md:rounded-[2rem] shadow-2xl transition-all duration-700 ${isClicked ? 'scale-[0.98]' : ''}`}
      >
        <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] md:rounded-[calc(2rem-1.5px)] bg-[#09090b] flex flex-col min-h-[350px] md:min-h-[500px] w-full h-full">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <div
              ref={parallaxRef}
              className="w-full h-full will-change-transform"
            >
              <picture>
                <source srcSet={avifUrl} type="image/avif" />
                <source srcSet={webpUrl} type="image/webp" />
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) scale-[1.15] group-hover:scale-[1.25] ${isClicked ? 'scale-[1.5]' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Heavy gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent z-10 pointer-events-none"></div>

            {/* Brand Blue subtle color wash */}
            <div
              className={`absolute inset-0 bg-blue-600/5 mix-blend-overlay z-10 transition-opacity duration-700 ${isClicked ? 'opacity-80' : 'opacity-100'}`}
            ></div>
          </div>

          {/* Content Overlay */}
          <div
            className={`relative z-20 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center transition-all duration-500 ${isClicked ? 'opacity-40 translate-x-4' : 'opacity-100 translate-x-0'}`}
          >
            <div
              ref={contentParallaxRef}
              className="max-w-xl space-y-2 md:space-y-4 will-change-transform"
            >
              <h2 className="text-xl md:text-3xl lg:text-4xl font-serif-display italic text-white/90 leading-tight glow-text-blue transition-all duration-500 group-hover:text-white">
                {mainTitle}
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-500 tracking-tighter uppercase leading-[0.85] glow-text-blue transition-all duration-500 group-hover:text-blue-400">
                {highlightTitle}
              </h2>
              <div className="flex items-center space-x-3 pt-4 md:pt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-white uppercase">
                  TMG
                </span>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-white uppercase">
                  MARKETING
                </span>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <div
                className="bg-gradient-to-r from-brand-gold to-yellow-700 cta-pulse text-white font-semibold py-4 px-10 md:py-5 md:px-12 rounded-full inline-flex items-center justify-center text-center text-sm md:text-xl shadow-lg transition-all duration-500 transform group-hover:scale-110 group-active:scale-95 hover:brightness-125"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {card.ctaText}
              </div>
            </div>
          </div>

          {/* Decorative subtle shine across the whole card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
        </div>
      </div>
    </a>
  )
}

export default Card
