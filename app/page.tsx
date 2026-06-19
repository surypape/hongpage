import Stars       from '@/components/Stars'
import Nav         from '@/components/Nav'
import Hero        from '@/components/Hero'
import About       from '@/components/About'
import Hobbies     from '@/components/Hobbies'
import GameSection from '@/components/GameSection'
import Gallery     from '@/components/Gallery'
import Footer      from '@/components/Footer'
import BGM         from '@/components/BGM'

export default function Home() {
  return (
    <>
      <Stars />
      <BGM />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Hobbies />
          <GameSection />
          <Gallery />
        </main>
        <Footer />
      </div>
    </>
  )
}
