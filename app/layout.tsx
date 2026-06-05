import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DRAGONMINJUN // 드래곤민준',
  description: '드래곤민준의 공개 기지 — 14살 게임 개발자 지망생',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Noto+Sans+KR:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-page-bg text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
