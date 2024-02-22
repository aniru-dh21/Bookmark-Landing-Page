import { useEffect, useRef, useState } from "react";
import { Feature } from "../definitions";

function Tabs({ features }: { features: Feature[] }) {
  const [active, setActive] = useState(1);
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const tablist = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const threshold = 600;
    tablist.current?.style.setProperty("--threshold", threshold + "px");

    const switchOrientation = (entries: ResizeObserverEntry[]) => {
      const { contentRect } = entries[0];
      if (contentRect.width < threshold) {
        setOrientation("vertical");
      } else {
        setOrientation("horizontal");
      }
    };

    const ro = new ResizeObserver(switchOrientation);
    ro.observe(tablist.current as HTMLElement);

    return () => ro.disconnect();
  }, []);

  return (
    <div className="tabs">
      <div
        role="tablist"
        aria-labelledby="features-label"
        aria-orientation={orientation}
        className="switcher"
        ref={tablist}
      >
        {features.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            id={`f1-${id}`}
            aria-controls={`fp-${id}`}
            aria-selected={id === active}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {features.map(({ id, image, title, description }) => (
        <div
          key={id}
          role="tabpanel"
          id={`fp-${id}`}
          aria-labelledby={`f1-${id}`}
          aria-hidden={id !== active}
        >
          <div className="image bg-blue-pill">
            <img src={image} alt="" />
          </div>
          <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="btn primary">
              More Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
