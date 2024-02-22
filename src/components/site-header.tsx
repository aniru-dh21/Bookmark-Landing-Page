import BurgerMenu from "./burger-menu";
import LogoBookmark from "./logo-bookmark";

function SiteHeader() {
  return (
    <header className="site-header wrapper">
      <LogoBookmark />
      <BurgerMenu />
    </header>
  );
}

export default SiteHeader;
