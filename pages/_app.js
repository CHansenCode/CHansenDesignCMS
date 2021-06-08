import { useState } from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "../reducers";

import Layout from "../components/Layout/Layout";

import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [meta, setMeta] = useState({
    pageStructure: {
      forms: [
        {
          title: "Architecture Projects",
          pageRoute: "/architectureProject",
        },
        {
          title: "Image Gallery",
          pageRoute: "/gallery",
        },
        {
          title: "Budget",
          pageRoute: "/budget",
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
      communication: [
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
    mediaServerRoot: "https://media.chansen.design/",
  });

  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  return (
    <>
      <Provider store={store}>
        <Layout meta={meta} setMeta={setMeta}>
          <Component {...pageProps} meta={meta} setMeta={setMeta} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
