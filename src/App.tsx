import SiteHeader from "./components/SiteHeader"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Leadership from "./components/Leadership"
import SiteFooter from "./components/SiteFooter"

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Leadership />
      </main>
      <SiteFooter />
    </>
  )
}
