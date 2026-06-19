import Link from 'next/link'

export const metadata = {
  title: '날짜 생존기 // DRAGONMINJUN',
}

export default function GamePage() {
  return (
    <div className="fixed inset-0 bg-[#080814] flex flex-col">
      {/* 상단 바 */}
      <div className="flex items-center gap-4 px-4 py-2 border-b-2 border-[#ff2200] z-10"
           style={{ background: 'rgba(8,0,8,0.95)' }}>
        <Link
          href="/"
          className="font-pixel text-[10px] text-[#ffcc00] no-underline
                     border-[2px] border-[#ffcc00] px-3 py-2
                     hover:bg-[#ffcc00] hover:text-[#080008] transition-all"
        >
          ← BACK
        </Link>
        <span className="font-pixel text-[11px] text-white tracking-widest">
          날짜 생존기
        </span>
        <span className="font-pixel text-[9px] text-[#666] ml-auto">
          방향키/WASD 이동 &nbsp;·&nbsp; Shift 저속 &nbsp;·&nbsp; Space 시작
        </span>
      </div>

      {/* 게임 iframe */}
      <iframe
        src="/game.html"
        className="flex-1 w-full border-0"
        title="날짜 생존기"
        allow="autoplay"
      />
    </div>
  )
}
