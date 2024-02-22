import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".image img", {
        y: 40,
        opacity: 0,
        ease: "power3.out",
        duration: 0.8,
      });
    },
    { scope: container }
  );

  return (
    <section className="hero wrapper region" aria-label="Hero" ref={container}>
      <div className="image bg-blue-pill">
        <img
          src="/images/illustration-hero.svg"
          alt=""
          width="657"
          height="466"
        />
      </div>
      <div className="text wrapper">
        <h2>A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <p className="cta">
          <a href="#" className="btn primary">
            Get it on Chrome
          </a>
          <a href="#" className="btn secondary">
            Get it on Firefox
          </a>
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
