'use client'

let audioCtx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (
      window.AudioContext ??
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext!
    )()
  }
  return audioCtx
}

export function useSound() {
  function playBeep(freq = 260, dur = 0.08) {
    try {
      const ac   = getCtx()
      const osc  = ac.createOscillator()
      const gain = ac.createGain()
      osc.connect(gain)
      gain.connect(ac.destination)
      osc.type          = 'square'
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.15, ac.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur)
      osc.start(ac.currentTime)
      osc.stop(ac.currentTime + dur + 0.01)
    } catch {
      // AudioContext 차단됐을 때 무시
    }
  }

  return { playBeep }
}
