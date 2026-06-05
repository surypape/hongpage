'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEO_ID = 'dd7N_Bz-nto'

interface YTPlayer {
  playVideo:  () => void
  pauseVideo: () => void
  setVolume:  (v: number) => void
  destroy:    () => void
}

declare global {
  interface Window {
    YT: {
      Player: new (
        el: string | HTMLElement,
        opts: {
          videoId: string
          playerVars?: Record<string, number | string>
          events?: {
            onReady?: () => void
          }
        }
      ) => YTPlayer
    }
    onYouTubeIframeAPIReady: () => void
  }
}

export default function BGM() {
  const playerRef = useRef<YTPlayer | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready,   setReady  ] = useState(false)

  useEffect(() => {
    function initPlayer() {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay:        0,
          controls:        0,
          loop:            1,
          playlist:        VIDEO_ID,
          modestbranding:  1,
          iv_load_policy:  3,
        },
        events: {
          onReady: () => {
            playerRef.current?.setVolume(40)
            setReady(true)
          },
        },
      })
    }

    if (!document.getElementById('yt-api')) {
      const s = document.createElement('script')
      s.id  = 'yt-api'
      s.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(s)
      window.onYouTubeIframeAPIReady = initPlayer
    } else if (window.YT?.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      try { playerRef.current?.destroy() } catch { /* ignore */ }
    }
  }, [])

  function toggle() {
    if (!playerRef.current || !ready) return
    if (playing) {
      playerRef.current.pauseVideo()
      setPlaying(false)
    } else {
      playerRef.current.playVideo()
      setPlaying(true)
    }
  }

  return (
    <>
      {/* 숨겨진 유튜브 플레이어 */}
      <div style={{ position: 'fixed', left: '-9999px', top: '-9999px', width: 1, height: 1 }}>
        <div id="yt-player" />
      </div>

      {/* BGM 토글 버튼 */}
      <button
        onClick={toggle}
        disabled={!ready}
        title={playing ? 'BGM 끄기' : 'BGM 켜기'}
        className="fixed bottom-6 right-6 z-50 font-pixel text-[11px] w-14 h-14
                   border-[3px] border-white bg-page-bg cursor-pointer
                   transition-all duration-150 flex items-center justify-center
                   hover:border-fire-2 hover:text-fire-3
                   disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          color:      playing ? '#ffcc00' : '#666',
          textShadow: playing ? '0 0 8px #ff8800' : 'none',
        }}
      >
        {ready ? (playing ? '♫' : '♪') : '…'}
      </button>
    </>
  )
}
