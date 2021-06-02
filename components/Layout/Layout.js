import Head from "next/head";
import Nav from "../Nav/Nav";

const Layout = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>ChansenDesign CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav meta={meta} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
