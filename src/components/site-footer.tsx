import { navlinks } from "../data.json";
import LogoBookmark from "./logo-bookmark";
import SocialLinks from "./social-links";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="inner wrapper">
        <LogoBookmark />
        <nav aria-label="Footer">
          <ul role="list">
            {navlinks.map((navlink) => (
              <li key={navlink}>
                <a href="#">{navlink}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default SiteFooter;
