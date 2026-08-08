import data from "./data/portfolio.json";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero profile={data.profile} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} education={data.education} />
      <Contact email={data.profile.email} />
      <Footer socials={data.profile.socials} />
    </div>
  );
}

export default App;
