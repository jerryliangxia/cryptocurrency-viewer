import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import store from "./app/store";
import "antd/dist/antd.css";

const actions = [
  {
    id: "cryptos",
    name: "Cryptocurrencies",
    shortcut: ["m"],
    keywords: "crypto cryptocurrency cryptocurrencies",
    perform: () => (window.location.pathname = "cryptocurrencies"),
  },
  {
    id: "news",
    name: "News",
    shortcut: ["n"],
    keywords: "news new",
    perform: () => (window.location.pathname = "news"),
  },
];

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "transparent",
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <KBarProvider actions={actions}>
        <KBarPortal>
          {" "}
          {/* // Renders the content outside the root node */}
          <KBarPositioner>
            {" "}
            {/* // Centers the content */}
            <KBarAnimator>
              {" "}
              {/* // Handles the show/hide and height animations */}
              <KBarSearch /> {/* // Search input */}
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <App />
      </KBarProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
