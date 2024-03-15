import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /* item creation */

  /* dev: build nav item list creator -> if mobile menu, divider is a line */

  /* initial load */
  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <div className="bg"></div>

      <nav className="nav">
        <img className="nav__logo" src={Logo} alt="logo"></img>
        <div className="nav__right-container"></div>
      </nav>

      <main>
        <article></article>
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
