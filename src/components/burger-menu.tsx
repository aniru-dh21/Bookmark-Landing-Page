import { useEffect, useRef, useState } from "react";
import IconMenu from "./icon-menu";
import LogoBookmark from "./logo-bookmark";
import { navlinks } from "../data.json";
import SocialLinks from "./social-links";

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const [isEnabled, setEnabled] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = root.current?.parentElement as HTMLElement;
    const switchMode = (entries: ResizeObserverEntry[]) => {
      const { contentRect } = entries[0];
      if (contentRect.width < 666) {
        setEnabled(true);
      } else {
        setEnabled(false);
      }
    };
    const closeOnTabOut = () => {
      if (root.current?.contains(document.activeElement)) return;
      setOpen(false);
    };

    const ro = new ResizeObserver(switchMode);
    ro.observe(header);

    document.addEventListener("focusin", closeOnTabOut);

    return () => {
      ro.disconnect();
      document.removeEventListener("focusin", closeOnTabOut);
    };
  }, []);

  return (
    <div className="burger-menu" ref={root}>
      {isEnabled && (
        <button
          className="trigger"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <IconMenu />
        </button>
      )}
      <div className="panel">
        {isEnabled && <LogoBookmark />}
        <nav>
          <ul role="list">
            {navlinks.map((navlink) => (
              <li key={navlink}>
                <a href="#">{navlink}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" className="btn tertiary">
          Login
        </a>
        {isEnabled && <SocialLinks />}
      </div>
    </div>
  );
}

export default BurgerMenu;
