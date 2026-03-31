import About from "../components/About";
import CreativityKinds from "../components/CreativityKinds";
import Education from "../components/Education";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Recognition from "../components/Recognition";
import SiteFooter from "../components/SiteFooter";
import StyleFeatures from "../components/StyleFeatures";
import Timeline from "../components/Timeline";

export default function HomePage() {
  return (
    <main className="bg-milk">
      <Hero />
      <About />
      <Timeline />
      <StyleFeatures />
      <Gallery />
      <Recognition />
      <Education />
      <CreativityKinds />
      <SiteFooter />
    </main>
  );
}
