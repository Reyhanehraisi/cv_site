import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Tools from "./components/Tools"
import Research from "./components/Research"
import Designs from "./components/Designs"
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Tools />
        <Research />
        <Designs />
        <Contact />
      </main>
    </>
  )
}
