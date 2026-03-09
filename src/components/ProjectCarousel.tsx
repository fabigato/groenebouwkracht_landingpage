import { useState } from 'react'
import Image from 'next/image'

export interface CarouselSlide {
  src: string
  alt: string
  caption: string
}

interface ProjectCarouselProps {
  title: string
  slides: CarouselSlide[]
}

export default function ProjectCarousel({ title, slides }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent((i) => (i + 1) % slides.length)

  if (slides.length === 0) return null

  return (
    <section id="gallery" className="my-10">
      <h2>{title}</h2>

      <div className="relative mt-6 rounded-[12px] overflow-hidden bg-[#f4f4f5]">
        {/* Film strip — all slides in a row, shifted by translateX */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative shrink-0 w-full"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            </div>
          ))}
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#222] rounded-full w-10 h-10 flex items-center justify-center shadow transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#222] rounded-full w-10 h-10 flex items-center justify-center shadow transition"
        >
          ›
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-4 text-sm text-white bg-black/40 rounded-full px-3 py-1">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Caption — fades on change via key */}
      <div
        key={current}
        className="mt-4 text-slate-600 text-base"
        style={{ animation: 'fadeIn 0.35s ease' }}
      >
        {slides[current].caption.split('\n\n').map((para, i) => (
          <p key={i} className="mb-3">{para}</p>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-[#0b6efd]' : 'bg-[#ccc]'}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
