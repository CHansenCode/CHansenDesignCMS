import { useState } from "react";

import Head from "next/head";
import Nav from "../Nav/Nav";

const Layout = ({ children, meta, setMeta }) => {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      <Head>
        <title>ChansenDesign CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav
        meta={meta}
        setMeta={setMeta}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <main
        style={
          showNav === true
            ? { width: "calc(100vw - 18rem)", marginLeft: "18rem" }
            : { width: "100vw", marginLeft: "0" }
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
