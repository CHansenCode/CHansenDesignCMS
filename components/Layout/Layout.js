import { useState, useEffect } from "react";

import Head from "next/head";
import Nav from "../Nav/Nav";

const Layout = ({ children, meta, setMeta }) => {
  const [showNav, setShowNav] = useState(false);

  //When a token is received, slide in from left
  useEffect(() => {
    setShowNav(true);
  }, [meta.token]);
  return (
    <>
      <Head>
        <title>ChansenDesign CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {meta.token ? (
        <Nav
          meta={meta}
          setMeta={setMeta}
          showNav={showNav}
          setShowNav={setShowNav}
        />
      ) : null}
      <main
        style={
          showNav === true
            ? { width: "calc(100vw - 14rem)", marginLeft: "14rem" }
            : { width: "100vw", marginLeft: "0" }
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
