import Link from "next/link";

import sheetStyle from "./Nav.module.scss";

const Nav = ({ meta }) => {
  return (
    <header className={sheetStyle.header}>
      <nav className={sheetStyle.nav}>
        <Link href="/">
          <header>
            <h3>{meta.projectName}</h3>
            <p>
              <b>C</b>ontent
              <b>
                <br />M
              </b>
              anagement
              <b>
                <br />S
              </b>
              ystem
            </p>
          </header>
        </Link>
        <ul className={sheetStyle.formList}>
          <h4>Add content +</h4>
          <Link href="/architectureProject">
            <li>Architecture Project</li>
          </Link>
          <Link href="/gallery">
            <li>Gallery</li>
          </Link>
        </ul>
        <ul className={sheetStyle.statistics}>
          <h4>Webpage statistics</h4>
          <li>Visitors</li>
          <li>Exchanges</li>
          <li>BLALB</li>
        </ul>
        <footer className={sheetStyle.footer}>
          <h6>Some info</h6>
        </footer>
      </nav>
    </header>
  );
};

export default Nav;
