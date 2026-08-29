import { useState } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const [certificationsLoaded, setCertificationsLoaded] =
    useState(false);

  return (
    <>
      {/* Full-screen loader overlay */}
      <Loader
        projectsLoaded={projectsLoaded}
        certificationsLoaded={certificationsLoaded}
      />

      {/* Portfolio remains visible underneath */}
      <div className="min-h-screen bg-black">

        <Navigation />

        <Hero />

        <About />

        <Skills />

        <Projects
          onLoaded={() => setProjectsLoaded(true)}
        />

        <Certifications
          onLoaded={() =>
            setCertificationsLoaded(true)
          }
        />

        <Contact />

        <Footer />

        <ScrollToTop />

      </div>
    </>
  );
}

export default App;