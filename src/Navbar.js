import { Icon } from "@iconify/react";
import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";
// import LanguageSwitcher from "./LanguageSwitcher";
import Banderitas from "./Banderitas";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';


const Navbar = () => {

  const collapseRef = useRef(false);
  const { t } = useTranslation();

  const hideBars = () => {
    collapseRef.current.setAttribute("class", "collapse navbar-collapse justify-content-end");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand" onClick={hideBars}>
          <img
            className="logo"
            src="img/logo-transparente.svg"
            alt="Logo"
            width="220px"
          />
        </a>
        {/* <span className="noche_mobile"><DarkMode /></span> */}

        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
        >
          <span className="togglemenu">
            <Icon icon="bi:list" height="28" />
          </span>
        </button>

        {/* <div id="menu"  className="collapse navbar-collapse justify-content-end"   ref={collapseRef}> */}
        <div class="offcanvas-lg offcanvas-top menumobile" data-bs-scroll="true" tabindex="-1" id="offcanvasResponsive">
          <ul className="navbar-nav">
          <li className="nav-item" >
              <NavLink className={({ isActive }) =>
      isActive ? "active nav-link" : "nav-link"
    } to="/about" onClick={hideBars}>
                {t('menu-about')}
              </NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className={({ isActive }) =>
      isActive ? "active nav-link" : "nav-link"
    } to="/work" onClick={hideBars}>
                {t('menu-work')}
              </NavLink>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Design</a></li>
                <li><a class="dropdown-item" href="#">Development</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className={({ isActive }) =>
      isActive ? "active nav-link" : "nav-link"
    } to="/brand" onClick={hideBars}>
                {t('menu-brand')}
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/podcast" onClick={hideBars}>
                Podcast 
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="https://blog.nicocalvo.com">
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <Banderitas /> 
            </li>
             
            <li className="nav-item noche_desktop" onClick={hideBars}>
              <DarkMode />
            </li>
            {/* <LanguageSwitcher /> */}
          
            
            
            {/* Banderas mobile */}
            
              {/* <li className="nav-item banderas_mobile">
                <a className="nav-link mx-2" href="/">
                  <Icon icon="emojione-v1:flag-for-spain" height="28" />
                </a>
                <a className="nav-link mx-2" href="/">
                  <Icon
                    icon="emojione-v1:flag-for-united-kingdom"
                    height="28"
                  />
                </a>
                <a className="nav-link mx-2" href="/">
                  <Icon icon="emojione-v1:flag-for-portugal" height="28" />
                </a>
              </li> */}
           
          </ul>
        </div>
      </div>
    </nav>

    /*<nav className="navbar navbar-expand-md navbar-light fixed-top">
    <div className="container">
        <img src="https://nicocalvo.com/wp/wp-content/uploads/2020/06/logo-normal-1.svg" height="40px" />
        <div className="links">
            <a href="/">Blog</a>
            <a href="/create">Work</a>
            <a href="/">Brand</a>
            <a href="/">modo noche</a>
            <a href="/">idioma</a>
        </div>
    </div>

    </nav>*/
  );
};

export default Navbar;
