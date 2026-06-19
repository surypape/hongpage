'use client'

import Link from 'next/link'
import { useSound } from '@/hooks/useSound'

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

      {/* 게임 카드 */}
      <div className="ut-box max-w-[560px]">
        <div className="bg-white text-page-bg font-pixel text-[11px] px-[18px] py-[10px]">
          ★ 날짜 생존기 // BULLET HELL
        </div>
        <div className="p-7">
          {/* 미니 프리뷰 */}
          <div className="border-[2px] border-[#333] mb-6 overflow-hidden"
               style={{ background: '#08081a', aspectRatio: '800/180' }}>
            {/* 별 미리보기 */}
            <div className="w-full h-full flex items-center justify-center gap-8 relative">
              {['#ff4466','#ffaa33','#33ffcc','#9944ff','#44aaff'].map((c, i) => (
                <div key={i} className="rounded-full"
                     style={{
                       width: 10, height: 10,
                       background: c,
                       boxShadow: `0 0 10px ${c}`,
                       animation: `bounce ${0.8 + i * 0.15}s ease-in-out infinite alternate`,
                     }} />
              ))}
              <span className="absolute font-pixel text-[9px] text-[#555] bottom-2 right-3">
                탄막이 날아오는 게임
              </span>
            </div>
          </div>

          {/* 설명 */}
          <p className="text-[15px] text-[#cccccc] leading-[1.8] border-l-[3px] border-fire-2 pl-4 mb-6">
            * 1월 1일부터 12월 31일까지 탄막을 피하며 살아남는 게임.<br />
            날짜가 지날수록 패턴이 강해지고, 특수 이벤트 날엔 뭔가 일어날 예정.
          </p>

          {/* 스탯 */}
          <div className="flex gap-6 mb-8 flex-wrap">
            {[
              { k: 'LIVES',   v: '♥ x 2' },
              { k: 'DAYS',    v: '365일' },
              { k: 'CONTROL', v: 'WASD / 방향키' },
            ].map(({ k, v }) => (
              <div key={k}>
                <div className="font-pixel text-[8px] text-fire-2 mb-1">{k}</div>
                <div className="text-[14px] text-white">{v}</div>
              </div>
            ))}
          </div>

          {/* 플레이 버튼 */}
          <Link
            href="/game"
            className="ut-btn ut-btn-fire inline-block"
            onMouseEnter={() => playBeep(220, 0.06)}
            onClick={() => playBeep(320, 0.10)}
          >
            ▶ PLAY
          </Link>
        </div>
      </div>
    </section>
  )
}
