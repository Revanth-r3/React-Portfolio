import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Stats from "./components/Stats";
import Technologies from "./components/Technologies";
import Hero from "./components/Hero";
import { PROJECTS } from "./constants";


const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
            bg-[radial-gradient(circle_at_50%_50%, rgba(10, 25, 47, 1), rgba(0, 8, 20, 1), rgba(10, 25, 47, 0.8))]">
          </div>
          {/* Optional alternative: gradient with starry effect or a subtle grid */}
          {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
