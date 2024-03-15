import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import Hero from "./assets/images/illustration-devices.svg";
import MenuOpen from "./assets/images/icon-hamburger.svg";
import MenuClose from "./assets/images/icon-close.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuState, setMenuState] = useState(false);
  const mobileBreakpoint = 650;

  /* data */
  const data__navItems = [
    {
      title: "product",
      style: "dark",
    },
    {
      title: "features",
      style: "dark",
    },
    {
      title: "pricing",
      style: "dark",
    },
    {
      title: "divider",
      style: "light",
    },
    {
      title: "login",
      style: "light",
    },
  ];

  /* item creation */

  /* dev: build nav item list creator -> if mobile menu, divider is a line */
  const create__navItems = () => {
    const mobile = mobileBreakpoint >= windowWidth;

    return data__navItems.map((data, index) => {
      return data.title === "divider" ? (
        <div
          key={`navItem${index}`}
          className={
            "nav__divider" +
            (mobile ? " nav__divider--line" : " nav__divider--circle")
          }
        ></div>
      ) : (
        <a
          key={`navItem${index}`}
          className={
            "nav__item text--other" +
            (data.style === "light" ? " nav__item--light" : " nav__item--dark")
          }
        >
          {data.title}
        </a>
      );
    });
  };

  /* initial load */
  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {windowWidth <= mobileBreakpoint && menuState ? (
        <div className="nav__modal">{create__navItems()}</div>
      ) : null}
      <div className="bg"></div>

      <nav className="nav">
        <img className="nav__logo" src={Logo} alt="logo"></img>
        <div className="nav__content-container">
          {windowWidth > mobileBreakpoint ? (
            create__navItems()
          ) : menuState ? (
            <img
              className="menu__img"
              src={MenuClose}
              alt="menu close img"
              onClick={() => setMenuState(!menuState)}
            ></img>
          ) : (
            <img
              className="menu__img"
              src={MenuOpen}
              alt="menu open img"
              onClick={() => setMenuState(!menuState)}
            ></img>
          )}
        </div>
      </nav>

      <main className="main">
        <article className="main__content-container">
          <div className="main__new-container text--other">
            <p className="main__new">new</p>
            <p className="main__new-feature">monograph dashboard</p>
          </div>
          <h1 className="text--other">powerful insights into your team</h1>
          <p className="main__p text--body">
            Project planning time tracking for agile teams
          </p>
          <div className="main__demo-container">
            <button className="main__button text--other">
              schedule a demo
            </button>
            <p className="main__preview text--other">to see a preview</p>
          </div>
        </article>

        <div className="main__hero-wrapper">
          <img className="main__hero" src={Hero} alt="hero img"></img>
        </div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen/" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
