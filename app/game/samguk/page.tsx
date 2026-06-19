import Link from 'next/link'

export const metadata = { title: '삼국열전기 // DRAGONMINJUN' }

export default function SamgukPage() {
  return (
    <div className="fixed inset-0 flex flex-col" style={{ background: '#0d0a07' }}>
      <div className="flex items-center gap-4 px-4 py-2 border-b-2 border-[#c9a84c] shrink-0"
           style={{ background: 'rgba(13,10,7,0.97)' }}>
        <Link href="/#game"
              className="font-pixel text-[10px] text-[#c9a84c] no-underline border-[2px]
                         border-[#c9a84c] px-3 py-2 hover:bg-[#c9a84c] hover:text-[#0d0a07] transition-all">
          ← BACK
        </Link>
        <span className="font-pixel text-[11px] text-[#e8dfc8] tracking-widest">삼국열전기 — 大戰</span>
      </div>
      <iframe src="https://sanguorezhanji.vercel.app/" className="flex-1 w-full border-0" title="삼국열전기" allow="autoplay" />
    </div>
  )
}
