'use client'

import Link from 'next/link'
import { useSound } from '@/hooks/useSound'

const GAMES = [
  {
    href:    '/game/nyun',
    title:   '1년살기',
    sub:     'BULLET HELL',
    accent:  '#44aaff',
    border:  'border-white',
    btnCls:  'ut-btn ut-btn-fire',
    dots:    ['#ff4466','#ffaa33','#33ffcc','#9944ff','#44aaff'],
    desc:    '* 1월 1일부터 12월 31일까지 탄막을 피하며 살아남는 게임. 날짜가 지날수록 패턴이 강해진다.',
    stats: [
      { k: 'LIVES',   v: '♥ x 2' },
      { k: 'DAYS',    v: '365일' },
      { k: 'CONTROL', v: 'WASD / 방향키' },
    ],
  },
  {
    href:    '/game/samguk',
    title:   '삼국열전기',
    sub:     '三國列傳記 — 大戰',
    accent:  '#c9a84c',
    border:  'border-[#c9a84c]',
    btnCls:  'ut-btn',
    dots:    ['#4a90d9','#5cb85c','#c0392b','#c9a84c','#e8dfc8'],
    desc:    '* 위 · 촉 · 오 삼국이 맞붙는 전략 보드게임. 장수를 배치하고 전장을 지배하라.',
    stats: [
      { k: 'FACTIONS', v: '魏 · 蜀 · 吳' },
      { k: 'TYPE',     v: '전략 보드게임' },
      { k: 'CONTROL',  v: '마우스' },
    ],
  },
]

export default function GameSection() {
  const { playBeep } = useSound()

  return (
    <section id="game" className="py-[90px] px-6 max-w-[980px] mx-auto">

      <p className="font-pixel text-[9px] text-fire-2 tracking-[4px] mb-3 opacity-80">
        // CHAPTER 04
      </p>
      <h2 className="font-pixel mb-11" style={{ fontSize: 'clamp(18px, 4vw, 30px)' }}>
        <span className="fire-text">내가 만든 게임</span>
      </h2>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {GAMES.map(({ href, title, sub, accent, border, btnCls, dots, desc, stats }) => (
          <div key={href} className={`ut-box ${border}`}>
            {/* 타이틀 바 */}
            <div className="font-pixel text-[11px] px-[18px] py-[10px] tracking-wide"
                 style={{ background: accent, color: '#080008' }}>
              ★ {title} // {sub}
            </div>

            <div className="p-6">
              {/* 도트 프리뷰 */}
              <div className="border-[2px] border-[#222] mb-5 flex items-center justify-center gap-5 relative"
                   style={{ background: '#080814', height: 72 }}>
                {dots.map((c, i) => (
                  <div key={i} className="rounded-full"
                       style={{
                         width: 10, height: 10,
                         background: c,
                         boxShadow: `0 0 10px ${c}`,
                         animation: `scroll-bounce ${0.7 + i * 0.15}s ease-in-out infinite alternate`,
                       }} />
                ))}
              </div>

              {/* 설명 */}
              <p className="text-[14px] text-[#cccccc] leading-[1.8] border-l-[3px] pl-4 mb-5"
                 style={{ borderColor: accent }}>
                {desc}
              </p>

              {/* 스탯 */}
              <div className="flex gap-5 mb-6 flex-wrap">
                {stats.map(({ k, v }) => (
                  <div key={k}>
                    <div className="font-pixel text-[8px] mb-1" style={{ color: accent }}>{k}</div>
                    <div className="text-[13px] text-white">{v}</div>
                  </div>
                ))}
              </div>

              {/* 플레이 버튼 */}
              <Link href={href} className={btnCls}
                    onMouseEnter={() => playBeep(220, 0.06)}
                    onClick={() => playBeep(320, 0.10)}>
                ▶ PLAY
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
