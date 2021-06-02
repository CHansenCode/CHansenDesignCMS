import { useState } from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "../reducers";

import Layout from "../components/Layout/Layout";

import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [meta, setMeta] = useState({
    pages: {
      forms: [
        {
          title: "Architecture Projects",
          pageRoute: "/architectureProjects",
        },
        {
          title: "Image Gallery",
          pageRoute: "/gallery",
        },
        {
          title: "Articles",
          pageRoute: "/articles",
        },
      ],
      statistics: [
        {
          title: "Visitor statistics",
          pageRoute: "/statsVisitors",
        },
        {
          title: "Components Exchanges",
          pageRoute: "/statsComponents",
        },
      ],
      Communications: [
        {
          title: "Calendar",
          pageRoute: "/calendar",
        },
        {
          title: "InterCom",
          pageRoute: "/intercom",
        },
      ],
    },
    formPages: [{ title: "Architecture Project" }, { title: "Gallery" }],
    mediaServerRoot: "https://media.chansen.design/",
  });

  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  return (
    <>
      <Provider store={store}>
        <Layout meta={meta}>
          <Component {...pageProps} meta={meta} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
