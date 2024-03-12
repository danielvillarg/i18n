import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const App = () => {
  const language = (navigator && navigator.language && navigator.language.split(/[-_]/)[0]) || "en";
  return (
    <IntlProvider locale={language} messages={language === "es" ? localeEsMessages : localeEnMessages}>
      <JobsList />
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
