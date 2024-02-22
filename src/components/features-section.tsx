import Tabs from "./tabs";
import { features } from "../data.json";

function FeaturesSelection() {
  return (
    <section className="features region" aria-labelledby="features-label">
      <div className="intro wrapper">
        <h2 id="features-label">Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="tabs-container wrapper">
        <Tabs features={features} />
      </div>
    </section>
  );
}

export default FeaturesSelection;
