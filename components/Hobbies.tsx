'use client'

import { useSound } from '@/hooks/useSound'

const HOBBIES = [
  { icon: '🎮', name: 'UNDERTALE',  desc: '나의 최애 게임. 언더테일 감성이 내 전부에 스며있어.' },
  { icon: '⚡', name: '일렉 / 음악', desc: '일렉 좋아함. 언젠간 내 게임 BGM도 직접 만들고 싶어.' },
  { icon: '🎲', name: '보드게임',    desc: '전략 있는 게임이면 뭐든 좋아. 이기는 게 최고야.' },
  { icon: '💻', name: '게임 개발',   desc: '장래희망이자 취미. 내가 만든 게임을 세상에 내놓을 거야.' },
]

export default function Hobbies() {
  const { playBeep } = useSound()

  return (
    <section id="hobbies" className="py-[90px] px-6 max-w-[980px] mx-auto">

      <p className="font-pixel text-[9px] text-fire-2 tracking-[4px] mb-3 opacity-80">
        // CHAPTER 02
      </p>
      <h2 className="font-pixel mb-11" style={{ fontSize: 'clamp(18px, 4vw, 30px)' }}>
        <span className="fire-text">취미 목록</span>
      </h2>

      <div className="grid gap-5"
           style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
        {HOBBIES.map(({ icon, name, desc }) => (
          <div
            key={name}
            className="border-[3px] border-white text-center p-7 cursor-pointer
                       transition-all duration-150
                       hover:border-fire-2 hover:-translate-y-1"
            style={{ background: 'rgba(0,0,0,0.80)' }}
            onMouseEnter={() => playBeep(220, 0.06)}
            onClick={() => playBeep(320, 0.10)}
          >
            <span className="text-[40px] mb-[14px] block">{icon}</span>
            <div className="font-pixel text-[10px] text-fire-3 mb-3">{name}</div>
            <p className="text-[13px] text-[#cccccc] leading-[1.7]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
