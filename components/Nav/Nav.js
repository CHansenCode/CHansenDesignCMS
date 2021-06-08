import Link from "next/link";
import { useRouter } from "next/router";

import sheetStyle from "./Nav.module.scss";

const NavLink = ({ title, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <li className={router.pathname == href ? "active" : null}>{title}</li>
    </Link>
  );
};

const Nav = ({ meta, setMeta, showNav, setShowNav }) => {
  return (
    <>
      <header
        style={showNav === true ? { left: "0" } : { left: "-20rem" }}
        className={sheetStyle.header}
      >
        <nav
          style={showNav === true ? { opacity: 1 } : { opacity: 0.1 }}
          className={sheetStyle.nav}
        >
          {/* HEADER */}
          <Link href="/">
            <header>
              <h3>{meta.projectName}</h3>

              <p>
                <b style={{ color: "lightyellow" }}>C&nbsp;</b>ontent
                <br />
                <b style={{ color: "lightyellow" }}>M&nbsp;</b>anagement
                <br />
                <b style={{ color: "lightyellow" }}>S&nbsp;</b>ystem
              </p>
            </header>
          </Link>

          {/* ADD CONTENT + */}
          <ul className={sheetStyle.formList}>
            <h4>Add content +</h4>
            {meta.pageStructure.forms.map((nav, i) => (
              <NavLink title={nav.title} key={nav.title} href={nav.pageRoute} />
            ))}
          </ul>

          {/* STATISTICS */}
          <ul className={sheetStyle.statistics}>
            <h4>Statistics</h4>
            {meta.pageStructure.statistics.map((nav, i) => (
              <NavLink title={nav.title} key={nav.title} href={nav.pageRoute} />
            ))}
          </ul>

          {/* COMMUNICATIONS */}
          <ul className={sheetStyle.communication}>
            <h4>Commucations</h4>
            {meta.pageStructure.communication.map((nav, i) => (
              <NavLink title={nav.title} key={nav.title} href={nav.pageRoute} />
            ))}
          </ul>
        </nav>
      </header>
      <button
        style={{ position: "absolute", left: "0", bottom: "0", zIndex: "1000" }}
        onClick={() => setShowNav(!showNav)}
      >
        {showNav === true ? "hide" : "show"}
      </button>
    </>
  );
};

export default Nav;
