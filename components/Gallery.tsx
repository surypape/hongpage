'use client'

import { useSound } from '@/hooks/useSound'

export default function Gallery() {
  const { playBeep } = useSound()

  return (
    <section id="gallery" className="py-[90px] px-6 max-w-[980px] mx-auto">

      <p className="font-pixel text-[9px] text-fire-2 tracking-[4px] mb-3 opacity-80">
        // CHAPTER 03
      </p>
      <h2 className="font-pixel mb-11" style={{ fontSize: 'clamp(18px, 4vw, 30px)' }}>
        <span className="fire-text">갤러리</span>
      </h2>

      <div className="grid gap-4"
           style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border-[3px] border-[#333] aspect-square flex flex-col
                       items-center justify-center gap-[10px] cursor-pointer
                       transition-all duration-150
                       hover:border-fire-2"
            style={{ background: '#0c000c' }}
            onMouseEnter={() => playBeep(220, 0.06)}
            onClick={() => playBeep(320, 0.10)}
          >
            <span className="font-pixel text-[32px] text-[#333]">?</span>
            <span className="font-pixel text-[8px] text-[#2a2a2a]">준비 중</span>
          </div>
        ))}
      </div>

      <p className="text-center mt-7 font-pixel text-[10px] text-[#555]">
        * 곧 채워질 예정입니다...
      </p>
    </section>
  )
}
