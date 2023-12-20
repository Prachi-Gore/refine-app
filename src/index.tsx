import React from "react";
import { createRoot } from "react-dom/client";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";

const keycloak = new Keycloak({
  clientId: "refine-demo",
  url: "https://lemur-0.cloud-iam.com/auth",
  realm: "refine",
});

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.Suspense fallback="loading">
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
