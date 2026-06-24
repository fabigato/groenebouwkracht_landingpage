import Image from 'next/image'

interface HangingPlantProps {
  variant?: 1 | 2 | 3 | 4
  className?: string
  style?: React.CSSProperties
  width?: number
  flip?: boolean
}

const PLANTS: Record<number, { src: string; naturalWidth: number; naturalHeight: number }> = {
  1: { src: '/images/hangplant1.png', naturalWidth: 234, naturalHeight: 290 },
  2: { src: '/images/hangplant2.png', naturalWidth: 170, naturalHeight: 500 },
  3: { src: '/images/hangplant3.png', naturalWidth: 80, naturalHeight: 310 },
  4: { src: '/images/hangplant4.png', naturalWidth: 210, naturalHeight: 290 },
}

export default function HangingPlant({ variant = 1, className = '', style, width = 120, flip = false }: HangingPlantProps) {
  const sway = variant % 2 === 0 ? 'plant-sway-slow' : variant === 3 ? 'plant-sway-fast' : 'plant-sway'
  const plant = PLANTS[variant]
  const height = Math.round(width * (plant.naturalHeight / plant.naturalWidth))

  return (
    <div className={`hanging-plant ${sway} ${className}`} style={style}>
      <Image
        src={plant.src}
        alt=""
        width={width}
        height={height}
        className="pointer-events-none select-none"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden
      />
    </div>
  )
}
