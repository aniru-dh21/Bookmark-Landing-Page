import CtaSection from "./components/cta-section";
import DownloadSection from "./components/download-section";
import FaqSection from "./components/faq-section";
import FeaturesSelection from "./components/features-section";
import HeroSection from "./components/hero-section";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <h1 className="visually-hidden">Bookmark landing page</h1>
        <HeroSection />
        <FeaturesSelection />
        <DownloadSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
