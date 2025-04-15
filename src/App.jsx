import { FeatureCards, Hero, LogoSection, ShowcaseSection } from "./sections";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
    </>
  );
}
