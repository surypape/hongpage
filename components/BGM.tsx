'use client'

import { useEffect, useRef, useState } from 'react'

export default function BGM() {
  const audioRef  = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [ready,   setReady]   = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35
    audio.loop   = true
    const onCanPlay = () => setReady(true)
    audio.addEventListener('canplaythrough', onCanPlay)
    return () => audio.removeEventListener('canplaythrough', onCanPlay)
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" preload="auto" />

      <button
        onClick={toggle}
        title={playing ? 'BGM 끄기' : 'BGM 켜기'}
        className="fixed bottom-6 right-6 z-50 font-pixel text-[11px] w-14 h-14
                   border-[3px] border-white bg-page-bg cursor-pointer
                   transition-all duration-150 flex items-center justify-center
                   hover:border-fire-2 hover:text-fire-3"
        style={{
          color: playing ? '#ffcc00' : '#666',
          textShadow: playing ? '0 0 8px #ff8800' : 'none',
        }}
      >
        {playing ? '♫' : '♪'}
      </button>
    </>
  )
}
