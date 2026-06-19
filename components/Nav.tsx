'use client'

import { useSound } from '@/hooks/useSound'

const LINKS = [
  { label: 'ABOUT',   href: '#about'   },
  { label: 'HOBBIES', href: '#hobbies' },
  { label: 'GAME',    href: '#game'    },
  { label: 'GALLERY', href: '#gallery' },
]

export default function Nav() {
  const { playBeep } = useSound()

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-[14px]
                    border-b-2 border-fire-1 backdrop-blur-md"
         style={{ background: 'rgba(8,0,8,0.94)' }}>

      <a href="#"
         className="font-pixel text-[14px] text-fire-3 no-underline tracking-widest"
         style={{ textShadow: '0 0 14px #ff8800' }}>
        ♥ DMJ
      </a>

      <ul className="flex gap-7 list-none m-0 p-0">
        {LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href}
               className="font-pixel text-[10px] text-white no-underline
                          transition-colors duration-150 hover:text-fire-3"
               onMouseEnter={() => playBeep(220, 0.06)}
               onClick={() => playBeep(320, 0.10)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
