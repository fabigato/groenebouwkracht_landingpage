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
        {/* Image */}
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
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

      {/* Caption */}
      <p className="mt-4 text-slate-600 text-base">{slides[current].caption}</p>

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
    </section>
  )
}
