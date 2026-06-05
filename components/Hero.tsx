'use client'

import { useSound } from '@/hooks/useSound'

export default function Hero() {
  const { playBeep } = useSound()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center
                        px-6 pb-28 text-center">

      {/* 언더테일 소울 ♥ */}
      <div className="animate-soul text-[52px] leading-none mb-7"
           style={{ color: '#ff0000' }}>
        ♥
      </div>

      {/* 메인 타이틀 */}
      <h1 className="font-pixel leading-[1.35] mb-5"
          style={{ fontSize: 'clamp(32px, 9vw, 88px)' }}>
        <span className="fire-text">DRAGON</span>
        <br />
        <span className="fire-text">MINJUN</span>
      </h1>

      {/* 서브타이틀 */}
      <p className="text-[#cccccc] tracking-[3px] mb-11"
         style={{ fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
        드래곤민준의 공개 기지 &nbsp;·&nbsp; 14살 &nbsp;·&nbsp; 태양계
      </p>

      {/* CTA 버튼 */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#about"
           className="ut-btn ut-btn-fire"
           onMouseEnter={() => playBeep(220, 0.06)}
           onClick={() => playBeep(320, 0.10)}>
          ▶ 탐험 시작
        </a>
        <a href="#hobbies"
           className="ut-btn"
           onMouseEnter={() => playBeep(220, 0.06)}
           onClick={() => playBeep(320, 0.10)}>
          취미 보기
        </a>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-9 left-1/2 font-pixel text-[9px] text-[#666]
                      animate-scroll-bounce whitespace-nowrap">
        ▼ &nbsp; SCROLL &nbsp; ▼
      </div>
    </section>
  )
}
