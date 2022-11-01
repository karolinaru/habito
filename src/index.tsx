import React from "react";
import App from "./app/App";
import { render } from "react-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import "./index.scss";

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  root
);
