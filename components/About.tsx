'use client'

import { useEffect, useRef } from 'react'

const STATS: { key: string; val: React.ReactNode }[] = [
  { key: 'NAME',  val: <>민준 <span className="text-[#888] text-[12px]">/ DRAGONMINJUN</span></> },
  { key: 'LV',    val: <>14 <span className="text-[#888] text-[12px]">(나이)</span></> },
  { key: 'GRADE', val: '중학교 2학년' },
  { key: 'LOC',   val: '태양계 🪐' },
  { key: 'GOAL',  val: '게임 개발자' },
  { key: 'LIKES', val: '언더테일 · 일렉 · 음악 · 보드게임' },
  { key: 'HATES', val: '공부 공부 공부 공부 공부...' },
]

export default function About() {
  const hpRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = hpRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.style.width = '99%' },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-[90px] px-6 max-w-[980px] mx-auto">

      <p className="font-pixel text-[9px] text-fire-2 tracking-[4px] mb-3 opacity-80">
        // CHAPTER 01
      </p>
      <h2 className="font-pixel mb-11" style={{ fontSize: 'clamp(18px, 4vw, 30px)' }}>
        <span className="fire-text">나는 누구?</span>
      </h2>

      <div className="ut-box max-w-[580px]">
        {/* 언더테일 타이틀 바 */}
        <div className="bg-white text-page-bg font-pixel text-[11px] px-[18px] py-[10px] tracking-wide">
          ★ DRAGONMINJUN // STATUS
        </div>

        <div className="p-[26px]">
          {/* 다이얼로그 */}
          <p className="text-base text-[#dddddd] leading-[1.8] border-l-[3px] border-fire-2 pl-4 mb-6">
            * 안녕! 난 드래곤민준이야.<br />
            언젠간 내가 만든 게임으로 세상을 뒤집을 거야.
          </p>

          {/* 스탯 목록 */}
          <dl className="space-y-3 mb-7">
            {STATS.map(({ key, val }) => (
              <div key={key} className="flex gap-5 items-start">
                <dt className="font-pixel text-[9px] text-fire-2 whitespace-nowrap shrink-0 pt-[3px]">
                  {key}
                </dt>
                <dd className="text-[15px] leading-[1.5]">{val}</dd>
              </div>
            ))}
          </dl>

          {/* HP 바 */}
          <p className="font-pixel text-[8px] text-fire-3 mb-2">
            열정 HP &nbsp; ████████████ &nbsp; 99/99
          </p>
          <div className="border-[2px] border-white h-5 overflow-hidden"
               style={{ background: '#140008' }}>
            <div ref={hpRef} className="hp-fill" />
          </div>
        </div>
      </div>
    </section>
  )
}
